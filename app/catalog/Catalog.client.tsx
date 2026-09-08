'use client';

import Filters from '@/components/Filters/Filters';
import CarList from '@/components/CarList/CarList';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCars } from '@/lib/api';
import css from './CatalogPage.module.css';

const CatalogClient = () => {
  const {
    data,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
    isFetched,
  } = useInfiniteQuery({
    queryKey: ['cars'],
    queryFn: ({ pageParam = 1 }) => {
      return fetchCars(pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: lastResponse => {
      const nextPage = lastResponse.page + 1;
      return nextPage <= lastResponse.totalPages ? nextPage : undefined;
    },
    select: data => {
      return {
        ...data,
        cars: data.pages.flatMap(page => page.cars),
      };
    },
  });

  const cars = data?.cars ?? [];
  const hasCars = cars.length > 0;
  const showNoResults = isFetched && !isError && !hasCars;

  return (
    <section className={css.section}>
      <div className={css.container}>
        <Filters />
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error</p>}
        {showNoResults && <p>No cars found.</p>}
        {hasCars && (
          <>
            <CarList cars={cars} />
            {hasNextPage && (
              <button
                className={css.button}
                type="button"
                onClick={() => fetchNextPage()}>
                Load more
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
};
export default CatalogClient;
