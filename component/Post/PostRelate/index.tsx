"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getListPostRelate, getListPostRelateSlice,
} from "@/store/features/post/slice";
import { htmlToPlainText } from "@/utils/helper";

interface IProps {
  categories: Array<any>;
  id: string;
}

function PostRelate(props: IProps) {
  const { id, categories = [] } = props;
  const dispatch = useDispatch();

  const postsRelate = useSelector(getListPostRelateSlice);

  console.log("postsRelate=>", postsRelate);

  useEffect(() => {
    dispatch(getListPostRelate({post_id:id, page_size:15}))
  }, [id]);

  return (
    <>
      {postsRelate.map((post: any) => {
        return (
          <Link
            href={`/review-sach/${post.slug}`}
            style={{ textDecoration: "none" }}
          >
            <div className={styles.post_relate_container} key={post._id}>
              <div className={styles.post_relate_image}>
                <Image
                  className={styles.post_relate_thumbnail}
                  src={post.thumbnail}
                  width={100}
                  height={100}
                  alt={post.name}
                />
              </div>
              <div className={styles.post_relate_intro}>
                <p className={styles.post_relate_title}>{post.name}</p>
                <p className={styles.post_relate_content}>
                  {post.sumary ? post.sumary : htmlToPlainText(post.content)}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}
export default PostRelate;
