import {QueryValue} from "ufo";
import {VehicleModel} from "~/models/vehicle.model";
import {PaginationMeta} from "~/types/server/pagination";
export const getVehiclePaginationHelper = (
  page: QueryValue,
  pageSize: QueryValue,
  vehicles: VehicleModel[]
): {
  vehicles: VehicleModel[],
  meta: PaginationMeta
} => {
  const currentPage = parseInt(String(page)) || 1;
  const currentPageSize = parseInt(String(pageSize)) || 10;

  const startIndex = (currentPage - 1) * currentPageSize;
  const endIndex = startIndex + currentPageSize;

  const vehiclesPortion = vehicles.slice(startIndex, endIndex);

  const totalVehicles = vehicles.length;
  const totalPages = Math.ceil(totalVehicles / currentPageSize);

  return {
    vehicles: vehiclesPortion,
    meta: {
      page: currentPage,
      pageSize: currentPageSize,
      totalItems: totalVehicles,
      totalPages
    }
  }
}