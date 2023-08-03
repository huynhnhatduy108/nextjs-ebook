"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Avatar, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ebookslick.module.css";

const ebooks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1239,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 739,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

function EbookSlick() {
  return (
    <Box sx={{ width: "100%", margin: "20px 0px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography fontSize="20px" fontWeight="bold">
          Sach duoc doc nhieu nhat
        </Typography>
        <Link
          href="/"
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "#1976d1",
          }}
        >
          {"Xem them >>"}
        </Link>
      </Box>
      <Slider {...settings} className={styles.ebook_slider}>
        {ebooks.map((item) => {
          return (
            <Box sx={{ padding: "20px", boxSizing: "border-box" }}>
              <Paper sx={{ height: "200px" }}>{item}</Paper>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}
export default EbookSlick;
