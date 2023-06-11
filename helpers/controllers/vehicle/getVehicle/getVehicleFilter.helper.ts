import { VehicleModel } from "~/models/vehicle.model";
import { QueryValue } from "ufo";
import { availableFilterTypes } from "~/constants/availableFilterTypes";
import { vehiclesFilterType } from "~/types/server/vehiclesFilterType";

export const getVehicleFilterHelper = (vehicles: VehicleModel[], type: QueryValue) => {
  if (!availableFilterTypes.includes(<vehiclesFilterType>type)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad request',
    })
  }

  return vehicles.filter(vehicle => vehicle.type === type)
}