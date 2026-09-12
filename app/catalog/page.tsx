import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import CatalogClient from './Catalog.client';
import { fetchCars, getFilters } from '@/lib/api';

const CatalogPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['cars', {}],
    queryFn: () => fetchCars({ page: 1, perPage: 12 }),
    initialPageParam: 1,
  });

  await queryClient.prefetchQuery({
    queryKey: ['carsFilters'],
    queryFn: getFilters,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
};
export default CatalogPage;
