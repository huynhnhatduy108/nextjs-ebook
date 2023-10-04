import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Paper,
  Rating
} from "@mui/material";
import {
  faComment,
  faEye,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Comment from "@/component/Comment";

import styles from "./page.module.css";
import EbookNotFound from "@/component/Ebook/NotFound";

const tags = ["asdsadassa", "sacascsacsa", "sacascsac"];

const postRelate = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const metadata: Metadata = {
    title: slug,
    description: `This is the page of ${slug}`,
  };
  return metadata;
}

const getEbook = async (slug: string) => {
  try {
    const res = await fetch(`http://localhost:8000/ebook/slug/${slug}`);
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
            <iframe
              src="https://firebasestorage.googleapis.com/v0/b/ebook-389008.appspot.com/o/ebook%2Fpdf%2Fnha-gia-kim-pdf.pdf?alt=media"
              height="900px"
              width="100%"
            ></iframe>
            {/* Comment */}
            <Box sx={{ marginTop: "50px" }}>
              <Comment id={ebookDetail?._id} isShowRate={true}/>
            </Box>
          </Box>
        ) : (
          <EbookNotFound />
        )}
      </Container>
    </main>
  );
}
