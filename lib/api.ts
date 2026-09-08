import { BookingRequest, Car, Filters } from '@/types/car';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://car-rental-api.goit.study',
});

interface FetchCarsResponse {
  cars: Car[];
  page: number;
  totalPages: number;
}

interface BookingResponse {
  message: string;
}

export const fetchCars = async (page: number): Promise<FetchCarsResponse> => {
  const response = await api.get<FetchCarsResponse>('/cars', {
    params: {
      page,
      perPage: 12,
    },
  });
  return response.data;
};

export const getFilters = async (): Promise<Filters> => {
  const response = await api.get<Filters>('/cars/filters');
  return response.data;
};

export const fetchCarById = async (id: string): Promise<Car> => {
  const response = await api.get<Car>(`/cars/${id}`);
  return response.data;
};

export const createBookingRequest = async (
  id: string,
  request: BookingRequest
): Promise<BookingResponse> => {
  const response = await api.post<BookingResponse>(
    `cars/${id}/booking-requests`,
    request
  );
  return response.data;
};
