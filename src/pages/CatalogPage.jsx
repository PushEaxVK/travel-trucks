import React, { useEffect } from 'react';
import Container from '../components/Container';
import SearchForm from '../components/SearchForm';
import CatalogList from '../components/CatalogList';
import { useDispatch } from 'react-redux';
import { fetchAllCampers } from '../redux/campers/operations';

function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCampers({ page: 1 }));
  }, [dispatch]);
  return (
    <Container>
      <div className="flex flex-row gap-16 pt-12">
        <SearchForm />
        <CatalogList />
      </div>
    </Container>
  );
}

export default CatalogPage;
