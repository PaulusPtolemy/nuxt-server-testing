import { vehiclesSortParams } from "~/types/server/vehiclesSortList";
import { IVehicle } from "~/types/vehicle";
import { priceNormalize } from "~/utils/priceNormalize";
export const sortList = (list: IVehicle[], sortParams: vehiclesSortParams) => {
  const { sortType } = sortParams
  const ascending = sortType === 'ascending'

  const sortByAlphabet = (fieldName: keyof IVehicle) => {
    return list.sort((a, b) => {
      const nameA = String(a[fieldName]).toLowerCase();
      const nameB = String(b[fieldName]).toLowerCase();

      if (nameA < nameB) {
        return ascending? -1 : 1;
      }
      if (nameA > nameB) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
  }

  const sortByNumber = () => {
    return list.sort((a, b) => {
      if (ascending) {
        return priceNormalize(a.rent) - priceNormalize(b.rent)
      }
      return priceNormalize(b.rent) - priceNormalize(a.rent)
    })
  }

  return {
    sortByAlphabet,
    sortByNumber
  }
}