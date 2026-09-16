'use client';

import { ChangeEvent, FocusEvent, useState } from 'react';
import { CarsFilters } from '@/types/car';
import { buildPriceOptions } from '@/utils/buildPriceOptions';
import css from './Filters.module.css';

interface SetFilters {
  brand?: string;
  price?: number;
  minMileage?: number;
  maxMileage?: number;
}
interface FiltersProps {
  filters?: CarsFilters;
  setFilters: (filters: SetFilters) => void;
}

const Filters = ({ filters, setFilters }: FiltersProps) => {
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [brandIsOpen, setBrandIsOpen] = useState(false);
  const [priceIsOpen, setPriceIsOpen] = useState(false);

  const handleSubmit = (formData: FormData) => {
    const brand = formData.get('brand') as string;
    const price = formData.get('price') as string;
    const minMileage = formData.get('minMileage') as string;
    const maxMileage = formData.get('maxMileage') as string;
    setFilters({
      brand: brand ? brand : undefined,
      price: price ? Number(price.slice(4)) : undefined,
      minMileage: minMileage ? Number(minMileage) : undefined,
      maxMileage: maxMileage ? Number(maxMileage) : undefined,
    });
  };

  const handleClear = () => {
    setBrand('');
    setPrice('');
    setMinMileage('');
    setMaxMileage('');
    setFilters({});
  };

  const handleChangeMinMileage = (e: ChangeEvent<HTMLInputElement>) => {
    setMinMileage(e.target.value);
  };

  const handleChangeMaxMileage = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxMileage(e.target.value);
  };

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setBrandIsOpen(false);
      setPriceIsOpen(false);
    }
  };

  const priceOptions = buildPriceOptions(filters?.price);

  return (
    <div className={css.formWrapper}>
      <form action={handleSubmit} className={css.form}>
        <div className={css.dropdownContainer}>
          <label htmlFor="brand" className={css.label}>
            Car brand
          </label>
          <div
            className={css.dropdownInputWrap}
            tabIndex={-1}
            onBlur={handleBlur}>
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
              aria-label="Choose a brand"
            />
            <span className={css.icon}>
              <svg width={16} height={16}>
                <use
                  href={`/icons.svg#icon-chevron-${brandIsOpen ? 'up' : 'down'}`}
                />
              </svg>
            </span>
          </div>
          {brandIsOpen && (
            <div
              className={`${css.dropdownWrapper} ${css.dropdownWrapperBrand}`}>
              <ul className={css.dropdown}>
                {filters?.brands.map((item, idx) => (
                  <li
                    key={idx}
                    tabIndex={0}
                    className={`${item === brand ? css.dropdownItemSelected : css.dropdownItem}`}
                    onMouseDown={e => {
                      e.preventDefault();
                    }}
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
          <div
            className={css.dropdownInputWrap}
            tabIndex={-1}
            onBlur={handleBlur}>
            <input
              className={`${css.input} ${css.dropdownInputPrice}`}
              type="text"
              name="price"
              id="price"
              value={price ? `To $${price}` : ''}
              placeholder="Choose a price"
              readOnly
              onClick={() => {
                setPriceIsOpen(!priceIsOpen);
                setBrandIsOpen(false);
              }}
              aria-label="Choose a price"
            />
            <span className={css.icon}>
              <svg width={16} height={16}>
                <use
                  href={`/icons.svg#icon-chevron-${priceIsOpen ? 'up' : 'down'}`}
                />
              </svg>
            </span>
          </div>
          {priceIsOpen && (
            <div
              className={`${css.dropdownWrapper} ${css.dropdownWrapperPrice}`}>
              <ul className={css.dropdown}>
                {priceOptions.map((item, idx) => {
                  const itemValue = String(item);

                  return (
                    <li
                      key={idx}
                      tabIndex={0}
                      className={`${itemValue === price ? css.dropdownItemSelected : css.dropdownItem}`}
                      onMouseDown={e => {
                        e.preventDefault();
                      }}
                      onClick={() => {
                        setPrice(itemValue);
                        setPriceIsOpen(false);
                      }}>
                      {itemValue}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="minMileage" className={css.label}>
            Car mileage / km
          </label>
          <div>
            <input
              className={`${css.input} ${css.inputMinMileage}`}
              type="number"
              name="minMileage"
              id="minMileage"
              value={minMileage}
              onChange={handleChangeMinMileage}
              placeholder="From"
              aria-label="Car mileage from"
            />
            <input
              className={`${css.input} ${css.inputMaxMileage}`}
              type="number"
              name="maxMileage"
              id="maxMileage"
              value={maxMileage}
              onChange={handleChangeMaxMileage}
              placeholder="To"
              aria-label="Car mileage to"
            />
          </div>
        </div>
        <button className={css.searchBtn} type="submit">
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
