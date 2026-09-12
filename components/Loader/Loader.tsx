import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.spinner}>
      <span className={css.loader} aria-label="Loading" />
      <p className={css.loadingText}>Loading cars...</p>

      <p className={css.description}>
        Please wait while we fetch the best cars for you
      </p>
    </div>
  );
};
export default Loader;
