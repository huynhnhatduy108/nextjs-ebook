"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import styles from "./footer.module.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Link from "next/link";

import { Lexend_Deca } from "next/font/google";
import ContactFormModel from "../ContactForm";

const lexendDeca = Lexend_Deca({
  weight: "300",
  subsets: ["vietnamese"],
});

function Footer() {

  const [isOpenContactForm, setIsOpenContactForm] = useState<boolean>(false);

  const handleOpenContactForm =()=>{
    setIsOpenContactForm(true)
  }

  const handleCloseContactForm =()=>{
    setIsOpenContactForm(false)
  }

  return (
    <footer
      style={{
        backgroundColor: "#1976d1",
        color: "white",
        padding: "20px 0px 20px",
      }}
    >
      <ContactFormModel open={isOpenContactForm} handleClose={handleCloseContactForm}/>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Link className={styles.page} href="/">
            Trang chủ
          </Link>
          <Link href="/" className={styles.page}>
            Blog
          </Link>
          <Link href="/" className={styles.page}>
            Về chúng tôi
          </Link>
          <a className={styles.page} onClick={handleOpenContactForm}>
            Liên hệ
          </a>
        </Box>
        <div
          className={styles.copyright}
        ></div>
        <Typography
          className={`${lexendDeca.className} ${styles.copyright_text}`}
        >
          Copyright ©2023 All rights reserved | This template is made by Nhat Duy
        </Typography>
      </Container>
    </footer>
  );
}
export default Footer;
