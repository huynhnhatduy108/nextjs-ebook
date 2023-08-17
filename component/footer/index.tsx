"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import styles from "./footer.module.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Link from "next/link";

import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  weight: "300",
  subsets: ["vietnamese"],
});

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1976d1",
        color: "white",
        padding: "20px 0px 20px",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center" }}>
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              margin: "0px 10px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Trang chu
          </Link>
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              margin: "0px 10px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Blog
          </Link>
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              margin: "0px 10px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Ve chung toi
          </Link>
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              margin: "0px 10px",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            Lien he
          </Link>
        </Box>
        <div
          style={{
            height: "1px",
            backgroundColor: "white",
            width: "80%",
            margin: "20px auto 10px",
          }}
        ></div>
        <Typography className={lexendDeca.className} style={{ textAlign: "center" }}>
          Copyright ©2023 All rights reserved | This template is made with Ebook
        </Typography>
      </Container>
    </footer>
  );
}
export default Footer;
