import React from 'react';
import Button from './Button';
import CapmerCard from './CapmerCard';

function CatalogList() {
  return (
    <div className="border border-amber-950 w-full flex items-center flex-col gap-10">
      <div className="w-full flex flex-col gap-8">
        <CapmerCard />
        <CapmerCard />
        <CapmerCard />
        <CapmerCard />
        <CapmerCard />
      </div>
      <Button as="button" variant="white" onClick={() => {}} width={145}>
        Load more
      </Button>
    </div>
  );
}

export default CatalogList;
