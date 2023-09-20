import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@mui/material/Rating";
import { Lexend_Deca } from "next/font/google";
import CategoryHomePage from '@/component/Category/CategoryHomePage';
import EbookHomePage from '@/component/Ebook/EbookHomePage';
import PostHomePage from '@/component/Post/PostHomePage';
// import { useRouter, useSearchParams } from "next/navigation";

// import { useEffect, useState } from "react";

const posts = [1, 2, 3, 4, 5, 6];
const ebooks = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];
const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

const getCategory = async () => {
	try {
		const res = await fetch(`http://localhost:8000/category/full`);
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};

const getBooks = async () => {
	try {
		const res = await fetch(`http://localhost:8000/ebook/?page=1&page_size=24&ordering=-views`);
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};

export default async function Home() {

  const listCate = await getCategory()
  const categories = listCate?.slice(0, 12)
  const ebookPaging = await getBooks()
  const ebooks = ebookPaging?.items  
  
    
  return (
    <main style={{ minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* category */}
        <div className={styles.section}>
           <CategoryHomePage  categories={categories} isLoading={false}/>
        </div>

        {/* Last test book */}
        <div className={styles.section}>
         <EbookHomePage  ebooks={ebooks} isLoading={false}/>
        </div>

        {/* Review book */}
        <div className={styles.section} style={{ margin: "70px 0px 100px" }}>
          <PostHomePage  posts={posts} isLoading={false}/>
        </div>
      </Container>
    </main>
  );
}



