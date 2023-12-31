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
import { API_BASE_URL } from "@/utils/api";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});


const getCategory = async () => {
	try {
		const res = await fetch(`${API_BASE_URL}/category/full`);
    if (res.status ===200) return await res.json();
		return []
	} catch (err) {
		console.log(err);
	}
};

const getBooks = async () => {
	try {
		const res = await fetch(`${API_BASE_URL}/ebook/?page=1&page_size=24&ordering=-views`);
		if (res.status ===200) return await res.json();
		return {}
	} catch (err) {
		console.log(err);
	}
};

const getPosts = async () => {
	try {
		const res = await fetch(`${API_BASE_URL}/post/?page=1&page_size=6`);
		if (res.status ===200) return await res.json();
		return {}
	} catch (err) {
		console.log(err);
	}
};

export default async function Home() {

  const listCate = await getCategory()
  const categories = listCate?.slice(0, 12)
  const ebookPaging = await getBooks()
  const ebooks = ebookPaging?.items  
  const postPaging = await getPosts()
  const posts = postPaging?.items;  

    
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



