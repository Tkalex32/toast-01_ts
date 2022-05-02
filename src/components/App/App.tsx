import { ToastPortal, ToastHandle, PositionSwitcher } from 'components';
import { ChangeEventHandler, FC, useRef, useState } from 'react';
import styles from './styles.module.css';

export const App: FC = () => {
  const toastRef = useRef<ToastHandle>(null);
  const [text, setText] = useState<string>('');
  const [mode, setMode] = useState<string>('info');
  const [selectedOption, setSelectedOption] =
    useState<string>('top-right');
  const [autoClose, setAutoClose] = useState<boolean>(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    setSelectedOption(event.currentTarget.value);
  };

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
            <label htmlFor="positionSelect">
              Position:{' '}
              <span className={styles.position}>
                {selectedOption.replace(/-/, ' ')}
              </span>
            </label>
            <PositionSwitcher
              selectedOption={selectedOption}
              handleChange={handleChange}
            />
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
        position={selectedOption}
      />
    </div>
  );
};
