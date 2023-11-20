import s from './Loader.style.module.scss';

const Loader = () => {
  return (
    <div className={s.wrapper}>
      <span className={s.loader}></span>
    </div>
  );
};

export default Loader;
