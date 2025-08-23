export function buildCampersUrl({
  page = 1,
  limit = 5,
  filterEquipment = [],
  filterVehicleType = null,
}) {
  const params = new URLSearchParams({
    page,
    limit,
  });

  filterEquipment.forEach((value) => {
    params.append(
      value === 'automatic' ? 'transmission' : value,
      value === 'automatic' ? 'automatic' : 'true'
    );
  });

  if (filterVehicleType) {
    params.append('form', filterVehicleType);
  }

  return `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers?${params.toString()}`;
}
