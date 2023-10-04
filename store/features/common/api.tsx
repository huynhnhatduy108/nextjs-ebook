
import { api, METHOD } from "@/utils/api";
import { formatPath } from "@/utils/helper";
import CommonPath from "./path";

// rate
export const apiGeRateEbook= (id:string) => {
  return api(METHOD.GET,formatPath(CommonPath.GetRateEbookId,id));
}

export const apiRateEbook= (payload:any) => {
  return api(METHOD.POST,formatPath(CommonPath.RateToEbook), payload);
}

export const apiCheckRateEbook= (id:string) => {
  return api(METHOD.GET,formatPath(CommonPath.CheckRateEbookId, id));
}




