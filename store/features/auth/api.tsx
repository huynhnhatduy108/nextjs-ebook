
import { api, METHOD } from "@/utils/api";
import { formatPath } from "@/utils/helper";
import AuthPaths from "./path";

export const apiLogin= (payload:any) => {
  return api(METHOD.POST,formatPath(AuthPaths.Login), payload);
}

export const apiRegister = (payload:any) => {
  return api(METHOD.POST,formatPath(AuthPaths.Register), payload);
}
