import React from 'react';
import Button from './Button';
import { Formik, Form, Field } from 'formik';
import clsx from 'clsx';

const vehicleEquipment = [
  { value: 'AC', label: 'AC', icon: 'AC' },
  { value: 'Automatic', label: 'Automatic', icon: '' },
  { value: 'kitchen', label: 'Kitchen', icon: '' },
  { value: 'TV', label: 'TV', icon: '' },
  { value: 'bathroom', label: 'Bathroom', icon: '' },
];

const vehicleTypes = [
  { value: 'panelTruck', label: 'Van', icon: '' },
  { value: 'fullyIntegrated', label: 'Fully Integrated', icon: '' },
  { value: 'alcove', label: 'Alcove', icon: '' },
];

const initialValues = {
  location: '',
  equipment: [],
  type: '',
};

const handleSubmit = (values, actions) => {};

function SearchForm() {
  return (
    <div className="w-[360px]">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({
          values,
          setFieldValue,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <Form>
            {/* Location */}
            <div>
              <label htmlFor="">Location</label>
              <Field name="location" placeholder="Kyiv, Ukraine" />
            </div>

            {/* Filters title */}
            <div>
              <h3>Filters</h3>
            </div>

            {/* Vehicle equipment */}
            <div>
              <h4>Vehicle equipment</h4>
              <div>
                {vehicleEquipment.map((item) => (
                  <button
                    type="button"
                    key={item.value}
                    onClick={() => {
                      if (values.equipment.includes(item.value)) {
                        setFieldValue(
                          'equipment',
                          values.equipment.filter((v) => v !== item.value)
                        );
                      } else {
                        setFieldValue('equipment', [
                          ...values.equipment,
                          item.value,
                        ]);
                      }
                    }}
                    className={clsx(
                      'border',
                      values.equipment.includes(item.value)
                        ? 'border-red-700 bg-gray-500'
                        : 'border-gray-600'
                    )}
                  >
                    <span>icon</span>
                    <span>label</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle type */}
            <div>
              <h4>Vehicle type</h4>
              <div>
                {vehicleTypes.map((item) => (
                  <button
                    type="button"
                    key={item.value}
                    onClick={() => setFieldValue('type', item.value)}
                    className={clsx(
                      'border',
                      values.type === item.value
                        ? 'border-red-700 bg-gray-500'
                        : 'border-gray-600'
                    )}
                  >
                    <span>icon</span>
                    <span>label</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <Button as="button" width={166} type="submit">
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SearchForm;
