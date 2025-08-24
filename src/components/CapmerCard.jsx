import React from 'react';
import Button from './Button';
import Icon from './Icon';
import FeatureBadge from './FeatureBadge';

function CapmerCard({ camperData }) {
  const img = camperData.gallery[0].thumb;
  const alt = `${camperData.name} Image`;
  return (
    <div className="p-6 flex flex-row gap-6 border border-grayLight rounded-[20px]">
      <div className="rounded-[10px] w-[292px] h-[320px] overflow-hidden shrink-0">
        <img
          src={img}
          className="object-cover w-full h-full object-center"
          alt={alt}
        />
      </div>
      <div className="w-full">
        <div className="flex flex-row justify-between mb-2">
          <h3 className="font-semibold text-[24px] leading-[1.33] text-dark">
            {camperData.name}
          </h3>
          <div className="flex gap-3 items-center">
            <p className="font-semibold text-[24px] leading-[1.33] text-dark">
              €{camperData.price}
            </p>
            <Icon id="heart" width={26} height={24} />
          </div>
        </div>
        <div className="flex items-center mb-6">
          <Icon id="star-yellow" width={16} height={16} className="mr-1" />
          <p className="mr-4">
            {camperData.rating}({camperData.reviews.length} Reviews)
          </p>
          <Icon id="map" width={16} height={16} className="mr-1" />
          <p>{camperData.location}</p>
        </div>
        <p className="mb-6 font-normal text-base leading-6 text-grayDark line-clamp-1">
          {camperData.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          <FeatureBadge />
          <FeatureBadge />
          <FeatureBadge />
          <FeatureBadge />
          <FeatureBadge />
        </div>
        <Button as="link" to="/catalog/1" width={166}>
          Show more
        </Button>
      </div>
    </div>
  );
}

export default CapmerCard;
