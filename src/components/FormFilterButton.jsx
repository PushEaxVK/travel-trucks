import clsx from 'clsx';
import React from 'react';
import Icon from './Icon';

function FormFilterButton({ onClick, selected, icon, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'border w-[112px] h-[96px] rounded-[12px] border-grayLight items-center justify-center',
        selected ? 'border-red-700' : 'border-gray-600'
      )}
    >
      <div className="flex flex-col gap-2 items-center">
        <Icon id={icon} width={32} height={32} />
        <span>{label}</span>
      </div>
    </button>
  );
}

export default FormFilterButton;
