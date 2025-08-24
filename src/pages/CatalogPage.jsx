import React, { useEffect } from 'react';
import Container from '../components/Container';
import SearchForm from '../components/SearchForm';
import CatalogList from '../components/CatalogList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCampers } from '../redux/campers/operations';
import { selectFilters } from '../redux/filters/selectors';
import { selectPage } from '../redux/campers/selectors';

function CatalogPage() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const page = useSelector(selectPage);
  console.log(filters);
  console.log(page);

  useEffect(() => {
    dispatch(
      fetchAllCampers({
        page,
        filterEquipment: filters.equipment,
        filterVehicleType: filters.vechileType,
        location: filters.location,
      })
    );
  }, [dispatch, page, filters]);

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
