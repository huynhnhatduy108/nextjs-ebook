
import { api, METHOD } from "@/utils/api";
import { formatPath } from "@/utils/helper";
import CommentPath from "./path";

export const getCommentEbook= (payload:any) => {
  return api(METHOD.GET,formatPath(CommentPath.CommentByEbookId), payload);
}

export const apiRegister = (payload:any) => {
  return api(METHOD.POST,formatPath(CommentPath.CommentByPostId), payload);
}
