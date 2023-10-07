import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import Comment from "@/component/Comment";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./page.module.css";
import EbookNotFound from "@/component/Ebook/NotFound";
import { API_BASE_URL } from "@/utils/api";

const tags = ["asdsadassa", "sacascsacsa", "sacascsac"];

const postRelate = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Params) {
  const res = await fetch(`${API_BASE_URL}/ebook/slug/${slug}`);
  const ebookDetail = await res.json();
  if (ebookDetail) {
    const metadata: Metadata = {
      title: ebookDetail.name,
      description: `This is the page of ${slug}`,
    };
    return metadata;
  }
  return null;
}

const getEbook = async (slug: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/ebook/slug/${slug}`);
    if (res.status === 200) return await res.json();
    return null;
  } catch (err) {
    console.log(err);
  }
};

export default async function PostDeatailPage({ params: { slug } }: Params) {
  const ebookDetail = await getEbook(slug);
  console.log("ebookDetail==>", ebookDetail);

  return (
    <main style={{ minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* category */}
        {ebookDetail ? (
          <Box sx={{ margin: "50px 0px" }}>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "25px",
                color: "#1976D1",
                margin: "20px 0px",
                textAlign: "center",
              }}
            >
              {ebookDetail.name}
            </p>

            <Grid container sx={{ margin: "20px 0px" }}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p style={{ margin: "0px" }}>Tác giả:</p>
                  <p style={{ fontWeight: "500", margin: "0px 10px" }}>
                    {ebookDetail.auth_name}
                  </p>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop:{sm:"10px", xs:"10px", md:"0px"}
                  }}
                >
                  <p style={{ margin: "0px" }}>Mua sách:</p>
                  <Box
                    sx={{
                      display:"flex",
                      alignItems:"center",
                      padding: { md: "7px 30px", xs: "6px 30px" },
                      color: "white",
                      backgroundColor: "#57b846",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginLeft:"10px",
                    }}
                  >
                    <FontAwesomeIcon icon={faTag} style={{fontSize:"16px", marginRight:"5px"}} />
                    <p style={{margin:"0px"}}> Xem giá sách</p>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box></Box>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/ebook-389008.appspot.com/o/ebook%2Fpdf%2Fnha-gia-kim-pdf.pdf?alt=media"
              height="1000px"
              width="100%"
            ></iframe>
            {/* Comment */}
            <Box sx={{ marginTop: "50px" }}>
              <Comment id={ebookDetail?._id} isShowRate={true} />
            </Box>
          </Box>
        ) : (
          <EbookNotFound />
        )}
      </Container>
    </main>
  );
}
