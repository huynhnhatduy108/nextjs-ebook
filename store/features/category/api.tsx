
import { api, METHOD } from "@/utils/api";
import { formatPath } from "@/utils/helper";
import CategoryPaths from "./path";

export const apiListCategory= (payload:any) => {
  // return api(METHOD.GET,formatPath(AuthPaths.Login), );
}

export const apiListCategoryFull = (payload:any) => {
  return api(METHOD.GET,formatPath(CategoryPaths.ListCategoryFull));
}
