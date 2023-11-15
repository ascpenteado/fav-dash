import { FC, ReactNode, MouseEvent } from 'react';
// import s from './Button.style.module.scss';

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '10px',
        fontSize: '16px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        backgroundColor: disabled ? '#ccc' : '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
      }}
      tabIndex={disabled ? -1 : 0} // Ensure the button is not focusable when disabled
      aria-disabled={disabled} // Indicate the button's state for screen readers
    >
      {children}
    </button>
  );
};

export default Button;
