import React from 'react';
import Container from '../components/Container';
import SearchForm from '../components/SearchForm';
import CatalogList from '../components/CatalogList';

function CatalogPage() {
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
