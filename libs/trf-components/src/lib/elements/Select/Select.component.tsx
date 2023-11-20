import React, { useState, ComponentProps } from 'react';
import styles from './Select.style.module.scss';

type Option = {
  value: string | number;
  label: string;
};

type SelectProps = {
  options: Option[];
  onSelect: (selectedValue: string | number) => void;
} & ComponentProps<'select'>;

const Select: React.FC<SelectProps> = ({ options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState<string | number>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <select
      className={styles.select}
      value={selectedValue}
      onChange={handleSelectChange}
    >
      <option value="" disabled>
        Select an option
      </option>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
