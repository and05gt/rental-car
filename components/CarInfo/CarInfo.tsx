import { Car } from '@/types/car';
import css from './CarInfo.module.css';

interface CarInfoProps {
  car: Car;
}

const CarInfo = ({ car }: CarInfoProps) => {
  const {
    brand,
    model,
    year,
    mileage,
    rentalPrice,
    rentalConditions,
    engine,
    type,
    stockNumber,
    description,
    features,
    fuelConsumption,
    location,
  } = car;

  return (
    <div className={css.carInfoContainer}>
      <div>
        <div className={css.modelNameWrapper}>
          <p className={css.modelName}>
            {brand} {model}, {year}
          </p>
          <p className={css.stockNumber}>Article: {stockNumber}</p>
        </div>
        <div className={css.locationWrapper}>
          <svg width={16} height={16}>
            <use href="/icons.svg#icon-location"></use>
          </svg>
          <p className={css.location}>
            {location.city}, {location.country}
          </p>
        </div>
        <p className={css.price}>${rentalPrice}</p>
        <p className={css.description}>{description}</p>
      </div>
      <div className={css.detailsContainer}>
        <div className={css.details}>
          <p className={css.title}>Rental Conditions:</p>
          <ul className={css.detailsList}>
            {rentalConditions.map((item, index) => (
              <li key={index} className={css.listItem}>
                <svg width={16} height={16}>
                  <use href="/icons.svg#icon-check-circle"></use>
                </svg>
                <p className={css.listItemText}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={css.details}>
          <p className={css.title}>Car Specifications:</p>
          <ul className={css.detailsList}>
            <li className={css.listItem}>
              <svg width={16} height={16}>
                <use href="/icons.svg#icon-calendar"></use>
              </svg>
              <p className={css.listItemText}>Year: {year}</p>
            </li>
            <li className={css.listItem}>
              <svg width={16} height={16}>
                <use href="/icons.svg#icon-car"></use>
              </svg>
              <p className={css.listItemText}>Type: {type}</p>
            </li>
            <li className={css.listItem}>
              <svg width={16} height={16}>
                <use href="/icons.svg#icon-fuel-pump"></use>
              </svg>
              <p className={css.listItemText}>
                Fuel Consumption: {fuelConsumption}
              </p>
            </li>
            <li className={css.listItem}>
              <svg width={16} height={16}>
                <use href="/icons.svg#icon-gear"></use>
              </svg>
              <p className={css.listItemText}>Engine: {engine}</p>
            </li>
            <li className={css.listItem}>
              <svg width={16} height={16}>
                <use href="/icons.svg#icon-road-horizon"></use>
              </svg>
              <p className={css.listItemText}>Mileage: {mileage} km</p>
            </li>
          </ul>
        </div>
        <div className={css.details}>
          <p className={css.title}>Features</p>
          <ul className={css.detailsList}>
            {features.map((item, index) => (
              <li key={index} className={css.listItem}>
                <svg width={16} height={16}>
                  <use href="/icons.svg#icon-check-circle"></use>
                </svg>
                <p className={css.listItemText}>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default CarInfo;
