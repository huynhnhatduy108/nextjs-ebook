import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import Comment from "@/component/Comment/Ebook";
import { faTag, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./page.module.css";
import EbookNotFound from "@/component/Ebook/NotFound";
import { API_BASE_URL } from "@/utils/api";
import NotiPopup from "@/component/NotiPopup";
import NotiError from "@/component/NotiError";

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
                textAlign: "center",
                margin: "0px",
              }}
            >
              {ebookDetail.name}
            </p>

            {/* Categories */}
            <Box sx={{ position: "relative", height: "60px" }}>
              <Box
                sx={{
                  display: "flex",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <p style={{ margin: "0px" }}>Tác giả:</p>
                <p style={{ fontWeight: "500", margin: "0px 10px" }}>
                  {ebookDetail.auth_name}
                </p>
              </Box>
            </Box>
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/ebook-389008.appspot.com/o/ebook%2Fpdf%2Fnha-gia-kim-pdf.pdf?alt=media"
              height="1000px"
              width="100%"
            ></iframe>
            {/* Buy and noti error */}
             <NotiError ebookId={ebookDetail?._id}/>

            {/* Comment */}
            <Box sx={{ marginTop: "30px" }}>
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
