import { ChangeEvent, FC } from 'react';
import s from './Checkbox.style.module.scss';

type LabelPosition = 'before' | 'after';

type CheckboxProps = {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  labelPosition?: LabelPosition;
};

const Checkbox: FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  labelPosition = 'before',
}) => {
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    onChange(checked);
  };

  const renderLabel = () => {
    return <span className={`${s.label} ${s[labelPosition]}`}>{label}</span>;
  };

  return (
    <label className={s.checkboxContainer}>
      {renderLabel()}
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className={s.checkboxInput}
      />
      <span className={s.checkmark}></span>
    </label>
  );
};

export default Checkbox;
