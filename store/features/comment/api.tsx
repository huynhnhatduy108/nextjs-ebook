
import { api, METHOD } from "@/utils/api";
import { formatPath } from "@/utils/helper";
import CommentPath from "./path";

// ebook
export const apiCommentEbook= (payload:any) => {
  return api(METHOD.POST,formatPath(CommentPath.CommentToEbook), payload);
}

export const apiGetCommentEbook= (id:string) => {
  return api(METHOD.GET,formatPath(CommentPath.CommentByEbookId,id));
}

// post

export const apiCommentPost= (payload:any) => {
  return api(METHOD.POST,formatPath(CommentPath.CommentToPost), payload);
}

export const apiGetCommentPost = (id:string) => {
  return api(METHOD.GET,formatPath(CommentPath.CommentByPostId, id));
}
