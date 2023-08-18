"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Avatar, Paper, Typography, Rating } from "@mui/material";
import Link from "next/link";
import { faReply, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Lexend_Deca } from "next/font/google";
import styles from "./ebookslick.module.css";


const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});



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
        <Typography fontSize="22px"  fontWeight="bold" className={lexendDeca.className} >
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
      <Box className={styles.ebook_slider}>
        <Slider {...settings}>
          {ebooks.map((item) => {
            return (
              <Box sx={{ padding: "20px 10px", boxSizing: "border-box" }}>
                <Paper className={styles.ebook}>
                  <img
                    className={styles.ebook_image}
                    src="https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-08/51NmhibPg%2BL.jpg?itok=AUurEj_q"
                    alt="Celestial Magic"
                  />
                  <p className={styles.ebook_name}>
                    OpenCoin được đổi tên thành Ripple Labs, sau đó được đổi tên
                    thành Ripple vào năm 2015.
                  </p>
                  <div className={styles.ebook_dowload_view}>
                    <div className={styles.ebook_dowload}>
                      <Rating max={1} value={0.7} precision={0.5} readOnly />
                      <Typography
                        style={{
                          marginLeft: "5px",
                          fontSize: "14px",
                          color: "gray",
                        }}
                      >
                        5/5
                      </Typography>
                    </div>
                    <div className={styles.ebook_view}>
                      <FontAwesomeIcon
                        icon={faEye}
                        color="gray"
                        fontSize="15px"
                      />
                      <Typography
                        style={{
                          marginLeft: "5px",
                          fontSize: "14px",
                          color: "gray",
                        }}
                      >
                        100
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
  );
}
export default EbookSlick;
