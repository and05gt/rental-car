'use client';

import { ChangeEvent, useState } from 'react';
import css from './Filters.module.css';

const BRANDS = [
  'Aston Martin',
  'Audi',
  'BMW',
  'Bentley',
  'Buick',
  'Chevrolet',
  'Chrysler',
  'GMC',
  'HUMMER',
  'Acura',
  'Infinity',
  'Mercedes',
];

const PRICES = ['30', '40', '50', '60', '70', '80', '90', '100'];

const Filters = () => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');
  const [brandIsOpen, setBrandIsOpen] = useState(false);
  const [priceIsOpen, setPriceIsOpen] = useState(false);

  const handleSubmit = (formData: FormData) => {
    console.log(formData);
  };

  const handleClear = () => {
    setBrand('');
    setPrice('');
    setMileageFrom('');
    setMileageTo('');
  };

  const handleChangeMileageFrom = (e: ChangeEvent<HTMLInputElement>) => {
    setMileageFrom(e.target.value);
  };

  const handleChangeMileageTo = (e: ChangeEvent<HTMLInputElement>) => {
    setMileageTo(e.target.value);
  };

  return (
    <div className={css.formWrapper}>
      <form action={handleSubmit} className={css.form}>
        <div className={css.dropdownContainer}>
          <label htmlFor="brand" className={css.label}>
            Car brand
          </label>
          <div className={css.dropdownInputWrap}>
            <input
              className={`${css.input} ${css.dropdownInputBrand}`}
              type="text"
              name="brand"
              id="brand"
              value={brand}
              placeholder="Choose a brand"
              readOnly
              onClick={() => {
                setBrandIsOpen(!brandIsOpen);
                setPriceIsOpen(false);
              }}
            />
            {brandIsOpen ? (
              <span className={css.icon}>
                <svg width={16} height={16}>
                  <use href="/icons.svg#icon-chevron-up"></use>
                </svg>
              </span>
            ) : (
              <span className={css.icon}>
                <svg width={16} height={16}>
                  <use href="/icons.svg#icon-chevron-down"></use>
                </svg>
              </span>
            )}
          </div>
          {brandIsOpen && (
            <div
              className={`${css.dropdownWrapper} ${css.dropdownWrapperBrand}`}>
              <ul className={css.dropdown}>
                {BRANDS.map(item => (
                  <li
                    key={item}
                    className={`${item === brand ? css.dropdownItemSelected : css.dropdownItem}`}
                    onClick={() => {
                      setBrand(item);
                      setBrandIsOpen(false);
                    }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={css.dropdownContainer}>
          <label htmlFor="price" className={css.label}>
            Price/ 1 hour
          </label>
          <div className={css.dropdownInputWrap}>
            <input
              className={`${css.input} ${css.dropdownInputPrice}`}
              type="text"
              name="price"
              id="price"
              value={price}
              placeholder="Choose a price"
              readOnly
              onClick={() => {
                setPriceIsOpen(!priceIsOpen);
                setBrandIsOpen(false);
              }}
            />
            {priceIsOpen ? (
              <span className={css.icon}>
                <svg width={16} height={16}>
                  <use href="/icons.svg#icon-chevron-up"></use>
                </svg>
              </span>
            ) : (
              <span className={css.icon}>
                <svg width={16} height={16}>
                  <use href="/icons.svg#icon-chevron-down"></use>
                </svg>
              </span>
            )}
          </div>
          {priceIsOpen && (
            <div
              className={`${css.dropdownWrapper} ${css.dropdownWrapperPrice}`}>
              <ul className={css.dropdown}>
                {PRICES.map(item => (
                  <li
                    key={item}
                    className={`${item === price ? css.dropdownItemSelected : css.dropdownItem}`}
                    onClick={() => {
                      setPrice(item);
                      setPriceIsOpen(false);
                    }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="mileageFrom" className={css.label}>
            Car mileage / km
          </label>
          <div>
            <input
              className={`${css.input} ${css.inputMileageFrom}`}
              type="text"
              name="mileageFrom"
              id="mileageFrom"
              value={mileageFrom}
              onChange={handleChangeMileageFrom}
              placeholder="From"
            />
            <input
              className={`${css.input} ${css.inputMileageTo}`}
              type="text"
              name="mileageTo"
              id="mileageTo"
              value={mileageTo}
              onChange={handleChangeMileageTo}
              placeholder="To"
            />
          </div>
        </div>
        <button className={css.searchBtn} type="button">
          Search
        </button>
      </form>
      <button className={css.clearBtn} type="button" onClick={handleClear}>
        Clear filters
      </button>
    </div>
  );
};
export default Filters;
