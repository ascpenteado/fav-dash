import { useState, useEffect, FC } from 'react';
import { ColorsType } from '../../../types/Colors';
import s from './Toast.style.module.scss';
import closeIcon from '../../../assets/svg/close-toast.svg';
import cn from 'classnames';
import Icon from '../Icon/Icon.component';

interface ToastProps {
  message: string;
  duration?: number;
  variant: ColorsType;
  onClose: () => void;
  visible?: boolean;
}

const Toast: FC<ToastProps> = ({
  variant,
  message,
  duration,
  onClose,
  visible,
}) => {
  const [isVisible, setIsVisible] = useState(visible);

  const toastClasses = cn({
    [s[`${variant}`]]: !!variant,
    [s.toast]: true,
  });

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (duration) {
      timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, duration);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [duration, onClose]);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div className={`${s.wrapper} ${isVisible && s.visible}`}>
        <div className={toastClasses}>
          <p>{message}</p>
          <div className={s.iconWrapper} onClick={handleClose}>
            <Icon iconUrl={closeIcon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Toast;
