import { getVehicleByID } from "../../../controllers/vehicle/getVehicleByID";

export default defineEventHandler((event) => {
  return getVehicleByID(event)
})