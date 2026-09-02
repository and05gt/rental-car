import css from './CatalogPage.module.css';
import Filters from '@/components/Filters/Filters';

const CatalogPage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <Filters />
      </div>
    </section>
  );
};
export default CatalogPage;
