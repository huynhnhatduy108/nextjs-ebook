
import { api, METHOD } from "@/utils/api";
import { formatPath } from "@/utils/helper";
import PostPath from "./path";

// ebook
export const apiGetListPost= (payload:any) => {
  return api(METHOD.GET,formatPath(PostPath.GetListPost), payload);
}

