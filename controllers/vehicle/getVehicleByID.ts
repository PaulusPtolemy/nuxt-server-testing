import { H3Event } from "h3";
import { VehicleModel } from "~/models/vehicle.model";
import { jsonParse } from "~/utils/server/jsonParse";
export const getVehicleByID = (event: H3Event) => {
  const id = event?.context?.params?.id

  const vehicles: VehicleModel[] = jsonParse()

  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad request',
    })
  }

  const data = vehicles.find(vehicle => vehicle.id === id)

  if (!data) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Not found',
    })
  }

  return {
    data
  }
}