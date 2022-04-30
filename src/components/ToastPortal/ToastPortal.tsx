import React, {
  FC,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import { useToastPortal } from 'hooks';
import styles from './styles.module.css';
import { createPortal } from 'react-dom';
import { Toast } from 'components';
import { uuid } from 'shared';

interface ToastPortalProps {
  autoClose: boolean;
  autoCloseTime?: number;
  ref: any; // TODO: set correct type. eg. Ref<HTMLDivElement>;
}

export const ToastPortal: FC<ToastPortalProps> = forwardRef(
  ({ autoClose = false, autoCloseTime = 5000 }, ref) => {
    const [toasts, setToasts] = useState<IToast[]>([
      { id: '1', message: 'Hello', mode: 'info' },
    ]);
    const { loaded, portalId } = useToastPortal();

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
                onClose={() => removeToast(toast.id)}
              />
            ))}
          </div>,
          document.getElementById(portalId) as HTMLElement,
        )
      : null;
  },
);
