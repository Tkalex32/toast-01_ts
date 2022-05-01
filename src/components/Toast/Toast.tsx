import { FC, useEffect, useMemo, useState } from 'react';
import styles from './styles.module.css';

interface ToastProps {
  mode: string;
  onClose: () => void;
  message: string;
  autoClose: boolean;
}

export const Toast: FC<ToastProps> = ({
  mode,
  onClose,
  message,
  autoClose,
}) => {
  const [width, setWidth] = useState<number>(100);
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

  const handleStartTimer = (): void => {
    const id = setInterval(change, 50);

    function change() {
      if (width === 0) {
        clearInterval(id);
      } else {
        setWidth(prev => prev - 0.5);
      }
    }
  };

  useEffect((): void => {
    handleStartTimer();
  }, []);

  return (
    <div className={classes} onClick={onClose}>
      <div className={styles.wrapper}>
        <span className={styles.icon}>{icon}</span>
        <div className={styles.toastContent}>{message}</div>
        <span className={styles.close}>close</span>
      </div>
      {autoClose && (
        <div
          className={styles.progress}
          style={{ width: `${width}%` }}
        ></div>
      )}
    </div>
  );
};
