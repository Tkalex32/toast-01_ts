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
        <span className={styles.toast}>breakfast_dining</span>
        <form
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <div className={styles.autoClose}>
            <input
              type="checkbox"
              //value={autoClose}
              onChange={e => setAutoClose(e.target.checked)}
            />
            <label>Auto Close</label>
          </div>

          <select value={mode} onChange={e => setMode(e.target.value)}>
            <option value="info">Info</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>

          <input
            type="text"
            value={text}
            placeholder="Toast Value"
            onChange={e => setText(e.target.value)}
          />

          <button>Submit</button>
        </form>
      </div>
      <ToastPortal />
    </div>
  );
};
