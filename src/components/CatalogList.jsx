import React from 'react';
import Button from './Button';
import CapmerCard from './CapmerCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllCampers,
  selectPage,
  selectPages,
} from '../redux/campers/selectors';
import { setPage } from '../redux/campers/slice';

function CatalogList() {
  const items = useSelector(selectAllCampers);
  const page = useSelector(selectPage);
  const pages = useSelector(selectPages);

  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className="w-full flex items-center flex-col gap-10 pb-[52px]">
      <ul className="w-full flex flex-col gap-8">
        {items.map((item) => (
          <li key={item.id}>
            <CapmerCard camperData={item} />
          </li>
        ))}
      </ul>
      {page < pages && (
        <Button
          as="button"
          variant="white"
          onClick={handleLoadMore}
          width={145}
        >
          Load more
        </Button>
      )}
    </div>
  );
}

export default CatalogList;
