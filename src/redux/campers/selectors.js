export const selectAllCampers = (state) => state.campersList.campers.items;
export const selectLoadingCampers = (state) =>
  state.campersList.campers.loadingCampers;
export const selectErrorCampers = (state) =>
  state.campersList.campers.errorCampers;
export const selectPage = (state) => state.campersList.campers.page;
export const selectPages = (state) => state.campersList.campers.pages;
export const selectTotalCampers = (state) => state.campersList.campers.total;
export const selectEquipment = (state) =>
  state.campersList.campers.vehicleEquipment;
export const selectvehicleType = (state) =>
  state.campersList.campers.vehicleType;
