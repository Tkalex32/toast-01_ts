import { ChangeEventHandler, FC } from 'react';
import styles from './styles.module.css';

interface PositionSwitcherProps {
  selectedOption: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

interface SwitcherProps extends PositionSwitcherProps {
  name: string;
  value: string;
}

const Switcher: FC<SwitcherProps> = ({
  selectedOption,
  handleChange,
  name,
  value,
}) => {
  console.log('Switcher');

  return (
    <div>
      <label htmlFor={name}>
        <input
          type="radio"
          name="position"
          id={name}
          value={value}
          checked={selectedOption === value}
          onChange={handleChange}
        />
        <span className={`${styles[name]}`}>{name}</span>
      </label>
    </div>
  );
};

export const PositionSwitcher: FC<PositionSwitcherProps> = ({
  selectedOption,
  handleChange,
}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Switcher
          selectedOption={selectedOption}
          handleChange={handleChange}
          name="north_west"
          value="top-left"
        />

        <Switcher
          selectedOption={selectedOption}
          handleChange={handleChange}
          name="north_east"
          value="top-right"
        />
        <Switcher
          selectedOption={selectedOption}
          handleChange={handleChange}
          name="south_west"
          value="bottom-left"
        />

        <Switcher
          selectedOption={selectedOption}
          handleChange={handleChange}
          name="south_east"
          value="bottom-right"
        />
      </div>
    </>
  );
};
