'use client';

import css from './Filters.module.css';

const Filters = () => {
  const handleSubmit = (formData: FormData) => {
    console.log(formData);
  };

  return (
    <div className={css.formWrapper}>
      <form action={handleSubmit} className={css.form}>
        <div>
          <label htmlFor="brand">Car brand</label>
          <div>
            <input type="text" name="brand" id="brand" />
            <span>
              <svg width={16} height={16}>
                <use href="/icons.svg#icon-chevron-down"></use>
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="price">Price/ 1 hour</label>
          <div>
            <input type="text" name="price" id="price" />
            <span>
              <svg width={16} height={16}>
                <use href="/icons.svg#icon-chevron-down"></use>
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="mileage">Car mileage / km</label>
          <div>
            <input type="text" name="mileage" id="mileage" />
            <span></span>
            <input type="text" name="mileage" id="mileage" />
          </div>
        </div>
        <button type="button">Search</button>
      </form>
      <button type="button">Clear filters</button>
    </div>
  );
};
export default Filters;
