
import { api, METHOD } from "@/utils/api";
import { formatPath, getQueryString } from "@/utils/helper";
import PostPath from "./path";

// ebook
export const apiGetListPost= (params:any) => {
  const queryParams = getQueryString(params);
  return api(METHOD.GET,formatPath(PostPath.GetListPost, queryParams));
}

// ebook
export const apiGetListPostRelate= (params:any) => {
  const queryParams = getQueryString(params);
  return api(METHOD.GET,formatPath(PostPath.GetListPostRelate, queryParams));
}

