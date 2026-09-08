import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import CatalogClient from './Catalog.client';
import { fetchCars } from '@/lib/api';

const CatalogPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['cars', 1],
    queryFn: () => fetchCars(1),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
};
export default CatalogPage;
