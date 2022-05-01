import { ToastPortal, ToastHandle } from 'components';
import { FC, useRef, useState } from 'react';
import styles from './styles.module.css';

export const App: FC = () => {
  const toastRef = useRef<ToastHandle>(null);
  const [text, setText] = useState<string>('');
  const [mode, setMode] = useState<string>('info');
  const [position, setPosition] = useState('top-right');
  const [autoClose, setAutoClose] = useState<boolean>(false);

  const addToast = () => {
    toastRef.current?.addMessage({ mode, message: text });
  };

  return (
    <div className={styles.main}>
      <h1>Toast w/ Portal</h1>
      <div className={styles.content}>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (text) {
              addToast();
              setText('');
            }
          }}
        >
          <div className={styles.autoClose}>
            <input
              type="checkbox"
              value={autoClose ? 'true' : 'false'}
              id="autoClose"
              onChange={e => setAutoClose(e.target.checked)}
            />
            <label htmlFor="autoClose">Auto Close</label>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="positionSelect">Position:</label>
            <select
              value={position}
              id="positionSelect"
              onChange={e => setPosition(e.target.value)}
            >
              <option value="top-left">top-left</option>
              <option value="top-right">top-right</option>
              <option value="bottom-left">bottom-left</option>
              <option value="bottom-right">bottom-right</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="typeSelect">Toast Type:</label>
            <select
              value={mode}
              id="typeSelect"
              onChange={e => setMode(e.target.value)}
            >
              <option value="info">Info</option>
              <option value="success">Success</option>
              <option value="warning">Warning</option>
              <option value="error">Error</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="toastText">Message:</label>
            <input
              type="text"
              value={text}
              placeholder="Toast Value"
              id="toastText"
              onChange={e => setText(e.target.value)}
            />
          </div>

          <button>Submit</button>
        </form>
      </div>
      <ToastPortal
        ref={toastRef}
        autoClose={autoClose}
        position={position}
      />
    </div>
  );
};
