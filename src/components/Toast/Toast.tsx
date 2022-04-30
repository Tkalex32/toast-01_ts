import { FC, useMemo } from 'react';
import styles from './styles.module.css';

interface ToastProps {
  mode: string;
  onClose: () => void;
  message: string;
}

export const Toast: FC<ToastProps> = ({ mode, onClose, message }) => {
  const classes: string = useMemo(
    () => [styles.toast, styles[mode]].join(' '),
    [mode],
  );
  const icon: string =
    mode === 'error'
      ? 'dangerous'
      : mode === 'success'
      ? 'check_circle'
      : mode;

  return (
    <div className={classes} onClick={onClose}>
      <div className={styles.wrapper}>
        <span className={styles.icon}>{icon}</span>
        <div className={styles.toastContent}>{message}</div>
        <span className={styles.close}>close</span>
      </div>
      {/* <div className={styles.progress}></div> */}
    </div>
  );
};
