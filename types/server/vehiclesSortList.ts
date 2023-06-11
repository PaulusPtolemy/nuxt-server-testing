import { vehiclesSortOptions } from "~/constants/sort";

type sortType = "ascending" | "descending"
type sortBy = vehiclesSortOptions


export interface vehiclesSortParams {
  sortBy: sortBy,
  sortType: sortType
}