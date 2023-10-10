
import { api, METHOD } from "@/utils/api";
import { formatPath, getQueryString } from "@/utils/helper";
import EbookPath from "./path";

// ebook
export const apiGetListEbook= (params:any) => {
  const queryParams = getQueryString(params);
  return api(METHOD.GET,formatPath(EbookPath.GetListEbook, queryParams));
}

// ebook
export const apiGetListEbookRelate= (params:any) => {
  const queryParams = getQueryString(params);
  return api(METHOD.GET,formatPath(EbookPath.GetListEbookRelate, queryParams));
}

