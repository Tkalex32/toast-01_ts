import {
  ForwardedRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import { useToastAutoClose, useToastPortal } from 'hooks';
import styles from './styles.module.css';
import { createPortal } from 'react-dom';
import { Toast } from 'components';
import { uuid } from 'shared';

export type ToastHandle = {
  addMessage: (toast: IToast) => void;
};

interface ToastPortalProps {
  autoClose: boolean;
  autoCloseTime?: number;
  position: string;
  ref: ForwardedRef<ToastHandle>;
}

export const ToastPortal = forwardRef<ToastHandle, ToastPortalProps>(
  ({ autoClose = false, autoCloseTime = 5000, position }, ref) => {
    const [toasts, setToasts] = useState<IToast[]>([]);
    const { loaded, portalId } = useToastPortal(position);

    useToastAutoClose({
      toasts,
      setToasts,
      autoClose,
      autoCloseTime,
    });

    const removeToast = (id: string): void => {
      setToasts(toasts.filter(toast => toast.id !== id));
    };

    useImperativeHandle(ref, () => ({
      addMessage(toast: IToast) {
        setToasts([...toasts, { ...toast, id: uuid() }]);
      },
    }));

    return loaded
      ? createPortal(
          <div className={styles.toastContainer}>
            {toasts.map(toast => (
              <Toast
                key={toast.id}
                mode={toast.mode}
                message={toast.message}
                onClose={() => removeToast(toast.id as string)}
              />
            ))}
          </div>,
          document.getElementById(portalId) as HTMLElement,
        )
      : null;
  },
);
