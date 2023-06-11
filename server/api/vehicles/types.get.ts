import { getVehicleTypes } from "../../../controllers/vehicle/getVehicleTypes";

export default defineEventHandler(() => {
  return getVehicleTypes()
})