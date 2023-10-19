
import { api, METHOD } from "@/utils/api";
import { formatPath } from "@/utils/helper";
import ErrorPath from "./path";

export const apiNotiErrorToEbook= (payload:any) => {
  return api(METHOD.POST,formatPath(ErrorPath.NotiErrorToEbook), payload);
}
