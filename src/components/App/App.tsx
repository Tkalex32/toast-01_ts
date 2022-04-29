import { ToastPortal } from 'components';
import { FC, useRef, useState } from 'react';
import styles from './styles.module.css';

export const App: FC = () => {
  // const toastRef = useRef();
  const [text, setText] = useState<string>('');
  const [mode, setMode] = useState<string>('info');
  const [autoClose, setAutoClose] = useState<boolean>(false);

  /* const addToast = () => {
    toastRef.current.addMessage({ mode, message: text });
  }; */

  return (
    <div className={styles.main}>
      <h1>Toast w/ Portal</h1>
      <div className={styles.content}>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className={styles.autoClose}>
            <input
              type="checkbox"
              //value={autoClose}
              id="autoClose"
              onChange={e => setAutoClose(e.target.checked)}
            />
            <label htmlFor="autoClose">Auto Close</label>
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
      <ToastPortal />
    </div>
  );
};
