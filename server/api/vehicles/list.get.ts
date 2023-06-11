import {getVehicles} from "../../../controllers/vehicle/getVehicles";
export default defineEventHandler((event) => {
  return getVehicles(event)
});