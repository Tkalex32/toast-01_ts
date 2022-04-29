import { FC, useState } from 'react';
import { useToastPortal } from 'hooks';
import styles from './styles.module.css';
import { createPortal } from 'react-dom';
import { Toast } from 'components';

export const ToastPortal: FC = () => {
  const [toasts, setToasts] = useState([
    { id: 1, message: 'Hello', mode: 'warning' },
  ]);
  const { loaded, portalId } = useToastPortal();

  return loaded
    ? createPortal(
        <div className={styles.toastContainer}>
          {toasts.map(toast => (
            <div key={toast.id}>
              <Toast
                mode={toast.mode}
                message={toast.message}
                onClose={() => {}}
              />
            </div>
          ))}
        </div>,
        document.getElementById(portalId) as HTMLElement,
      )
    : null;
};
