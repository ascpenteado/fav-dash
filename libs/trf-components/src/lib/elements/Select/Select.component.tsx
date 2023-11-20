import React, { useState } from 'react';
import styles from './Select.style.module.scss';

type Option = {
  value: string | number;
  label: string;
};

type SelectProps = {
  options: Option[];
  id?: string;
  name?: string;
  value?: string;
  onSelect: (selectedValue: string) => void;
};

const Select: React.FC<SelectProps> = ({ options, onSelect, value }) => {
  const [selectedValue, setSelectedValue] = useState<string>(value ?? '');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedValue(value);
    onSelect(value.toString());
  };

  return (
    <select
      className={styles.select}
      value={selectedValue}
      onChange={handleSelectChange}
    >
      <option value="" disabled>
        Selecione uma opção
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
