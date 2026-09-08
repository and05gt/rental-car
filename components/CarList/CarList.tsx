import { Car } from '@/types/car';
import css from './CarList.module.css';
import CarItem from '../CarItem/CarItem';

interface CarListProps {
  cars: Car[];
}

const CarList = ({ cars }: CarListProps) => {
  return (
    <ul className={css.list}>
      {cars.map(car => (
        <CarItem key={car.id} car={car} />
      ))}
    </ul>
  );
};
export default CarList;
