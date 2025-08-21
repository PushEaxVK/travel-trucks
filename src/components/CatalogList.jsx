import React from 'react';
import Button from './Button';

function CatalogList() {
  return (
    <div className="border border-amber-950 w-full flex items-center flex-col gap-10">
      <div>CatalogList</div>
      <Button as="button" variant="white" onClick={() => {}} width={145}>
        Load more
      </Button>
    </div>
  );
}

export default CatalogList;
