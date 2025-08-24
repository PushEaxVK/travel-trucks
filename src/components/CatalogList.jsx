import React from 'react';
import Button from './Button';
import CapmerCard from './CapmerCard';
import { useSelector } from 'react-redux';
import { selectAllCampers } from '../redux/campers/selectors';

function CatalogList() {
  const items = useSelector(selectAllCampers);
  return (
    <div className="w-full flex items-center flex-col gap-10 pb-[52px]">
      <ul className="w-full flex flex-col gap-8">
        {items.map((item) => (
          <li key={item.id}>
            <CapmerCard camperData={item} />
          </li>
        ))}
      </ul>
      <Button as="button" variant="white" onClick={() => {}} width={145}>
        Load more
      </Button>
    </div>
  );
}

export default CatalogList;
