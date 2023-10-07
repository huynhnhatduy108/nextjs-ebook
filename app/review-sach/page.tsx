"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Pagination,
  InputBase,
} from "@mui/material";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Lexend_Deca } from "next/font/google";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getListPostPaging,
  getPostListPagingSlice,
} from "@/store/features/post/slice";
import {
  covertQuerySearch,
  getDay,
  getMonth,
  htmlToPlainText,
  splitString,
} from "@/utils/helper";

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

const posts = [1, 3, 23, 2];

export default function ReviewPage() {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams?.get("page")
    ? Number(searchParams?.get("page"))
    : 1;
  const keyword = searchParams?.get("keyword") ?? "";

  const postsPaging = useSelector(getPostListPagingSlice);
  const { items, page_size, total_page } = postsPaging;
  console.log("postPaging==>", postsPaging);

  useEffect(() => {
    if (page) {
      dispatch(getListPostPaging({ page, keyword, page_size: 15 }));
    }
  }, [page, keyword]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    const path = covertQuerySearch({ page, keyword });
    router.replace(path);
  };

  return (
    <main style={{ minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* category */}
        <Box sx={{ margin: "50px 0px" }}>
          <p
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "center",
              margin: "0px",
            }}
          >
            Review sách
          </p>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "45px",
              borderRadius: "5px",
              margin: "40px 0px",
              boxShadow:
                "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);",
            }}
          >
            <InputBase
              sx={{
                flex: 1,
                color: "gray",
                height: "45px",
                paddingLeft: "15px",
                borderRadius: "5px",
              }}
              placeholder="Tìm kiếm..."
              className={lexendDeca.className}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              fontSize="20px"
              color="gray"
              width="40px"
              height="40px"
              style={{
                cursor: "pointer",
              }}
            />
          </Box>

          <Grid container spacing={2}>
            {items?.length &&
              items.map((post: any) => {
                return (
                  <Grid item lg={4} md={6} sm={6} xs={12} key={post._id}>
                    <Link
                      href={`/review-sach/${post.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Paper className={styles.post} style={{}}>
                        <div className={styles.post_day}>
                          <p className={styles.post_day_date}>
                            {getDay(post.updated_at)}
                          </p>
                          <p className={styles.post_day_line}></p>
                          <p className={styles.post_day_date}>
                            {getMonth(post.updated_at)}
                          </p>
                        </div>
                        <Image
                          className={styles.post_image}
                          src={post.thumbnail}
                          width={100}
                          height={100}
                          alt={post.name}
                        />
                        <p className={styles.post_title}>{post.name}</p>
                        <p className={styles.post_content}>
                          {htmlToPlainText(post.content)}
                        </p>
                        <div style={{ height: "20px" }}></div>
                      </Paper>
                    </Link>
                  </Grid>
                );
              })}
          </Grid>
          {total_page > 1 ? (
            <Box
              sx={{
                width: "100%",
                position: "relative",
                height: "100px",
                marginTop: "20px",
              }}
            >
              <Pagination
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
                count={total_page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
                color="primary"
              />
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Container>
    </main>
  );
}
