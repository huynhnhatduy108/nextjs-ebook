
import { api, METHOD } from "@/utils/api";
import { API_EBOOK_URL } from "@/utils/constants";
import { formatPath } from "@/utils/helper";
import AuthPaths from "./path";

export const apiLogin= (payload:any) => {
  return api(API_EBOOK_URL,METHOD.POST,formatPath(AuthPaths.Login), payload);
}

export const apiRegister = (payload:any) => {
  return api(API_EBOOK_URL, METHOD.POST,formatPath(AuthPaths.Register), payload);
}
