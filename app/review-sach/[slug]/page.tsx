import { Suspense } from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
  Button,
} from "@mui/material";
import {
  faComment,
  faEye,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./page.module.css";
import { API_BASE_URL } from "@/utils/api";
import { FormatDate } from "@/utils/helper";
import PostRelate from "@/component/Post/PostRelate";

const PostComment = dynamic(() => import("@/component/Comment/Post"));

const postRelate = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type Params = {
  params: {
    slug: string;
  };
};


export async function generateMetadata({
  params: { slug },
}: Params){
  const res = await fetch(`${API_BASE_URL}/post/slug/${slug}`);
  const postDetail = await res.json();

  if (postDetail){
    const metadata: Metadata = {
      title: postDetail.name,
      description: `This is the page of ${slug}`,
    };
    return metadata;
  }
  return {
    title: "Khong tim thay",
    description: `This is the page of ${slug}`,
  };
  
}

const getPost = async (slug: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/post/slug/${slug}`);
    if (res.status === 200) return await res.json();
    return null;
  } catch (err) {
    console.log(err);
  }
};

export default async function PostDeatailPage({ params: { slug } }: Params) {
  const postDetail = await getPost(slug);  


  return (
    <main style={{ minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* category */}
        <Box sx={{ margin: "50px 0px" }}>
          <Grid container spacing={2}>
            <Grid item lg={8} md={12} sm={12} xs={12}>
              <Box>
                {/* Title */}
                <h1 style={{ margin: "0px" }}>
                  {postDetail?.name}
                </h1>
                {/* Auth time */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "15px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Avatar
                      alt={postDetail?.author.full_name}
                      src={postDetail?.author?.avatar_url}
                    />
                    <p  style={{margin:"0px 0px 0px 10px", fontWeight:"500"}}>
                      {postDetail?.author.full_name}
                    </p>
                    <p  style={{margin:"0px 0px 0px 10px", fontSize:"14px", color:"gray"}}>
                      {FormatDate(postDetail?.updated_at)}
                    </p>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    {/* <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <FontAwesomeIcon
                        style={{
                          fontSize: "15px",
                          color: "gray",
                          marginRight: "4px",
                        }}
                        icon={faComment}
                      />
                      <p style={{margin:"0px", color:"gray", fontSize:"15px"}}>
                        10
                      </p>
                    </Box> */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        marginLeft: "10px",
                      }}
                    >
                      <FontAwesomeIcon
                        style={{
                          fontSize: "15px",
                          color: "gray",
                          marginRight: "4px",
                        }}
                        icon={faEye}
                      />
                      <p style={{margin:"0px", color:"gray", fontSize:"15px"}}>
                        {postDetail?.views}
                      </p>
                    </Box>
                  </Box>
                </Box>
                {/* Thumnail  */}
                <Box
                  sx={{
                    margin: "20px 0px",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                    width={100} height={500}
                    alt={postDetail?.name}
                    src={postDetail?.thumbnail}
                  />
                </Box>
                {/* content */}
                <p>{postDetail?.sumary}</p>
                   <div className={styles.detail__content} dangerouslySetInnerHTML={{ __html: postDetail?.content }}>
                </div>

                {/* tag */}
                <Box sx={{ display: "flex", marginTop: "30px" }}>
                  {
                    postDetail?.tags.map((tag:string) => {
                      return (
                        <p
                          style={{
                            border: "1px solid gray",
                            padding: "6px 25px",
                            borderRadius: "5px",
                            color:"gray",
                            margin:"0px 10px 0px 0px",
                            cursor:"pointer",
                          }}
                        >
                          #{tag}
                        </p>
                      );
                    })}
                </Box>

                {/* </Paper> */}
              </Box>
              {/* share book  */}
              <Box
                sx={{
                  marginTop: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p style={{margin:"0px"}}>Chia sẻ:</p>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  <Box
                    sx={{
                      height: "34px",
                      minWidth: "45px",
                      backgroundColor: "#3b5998",
                      color: "white",
                      borderRadius: "4px",
                      marginRight: "10px",
                      position: "relative",
                    }}
                  >
                    <svg
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        color: "white",
                        transform: "translate(-50%,-50%)",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="white"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                      />
                    </svg>
                  </Box>
                  <Box
                    sx={{
                      height: "34px",
                      minWidth: "45px",
                      backgroundColor: "#00acee",
                      color: "white",
                      borderRadius: "4px",
                      marginRight: "10px",
                      position: "relative",
                    }}
                  >
                    <svg
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        color: "white",
                        transform: "translate(-50%,-50%)",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="white"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      />
                    </svg>
                  </Box>
                  <Box
                    sx={{
                      height: "34px",
                      minWidth: "45px",
                      backgroundColor: "#e60000",
                      color: "white",
                      borderRadius: "4px",
                      marginRight: "10px",
                      position: "relative",
                    }}
                  >
                    <svg
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        color: "white",
                        transform: "translate(-50%,-50%)",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="white"
                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                      />
                    </svg>
                  </Box>
                  <Box
                    sx={{
                      height: "34px",
                      minWidth: "45px",
                      backgroundColor: "#0a66c2",
                      color: "white",
                      borderRadius: "4px",
                      marginRight: "10px",
                      position: "relative",
                    }}
                  >
                    <svg
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        color: "white",
                        transform: "translate(-50%,-50%)",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="white"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                      />
                    </svg>
                  </Box>
                </Box>
              </Box>
              {/* Comment */}
              <Box sx={{ marginTop: "50px" }}>
                <PostComment id={postDetail?._id} />
              </Box>
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <Paper style={{ borderRadius: "5px" }}>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    padding: "13px 0px",
                    backgroundColor: "#1976d1",
                    borderTopRightRadius: "5px",
                    borderTopLeftRadius: "5px",
                    color: "white",
                    margin:"0px",
                  }}
                >
                  Bài viết liên quan
                </p>
                <div className={styles.post_relate}>
                  <PostRelate id={postDetail?._id} categories={postDetail?.categories}/>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
