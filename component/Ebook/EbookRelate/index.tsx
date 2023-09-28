// "use client";
import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/system";
import { Avatar, Paper, Typography, Rating, Grid } from "@mui/material";
import Link from "next/link";
import { faReply, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Lexend_Deca } from "next/font/google";
import styles from "./ebookrelate.module.css";
import Image from "next/image";

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

const ebooks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface Iprops{
  id: string;
  categoriesId: string[]
}

function EbookRelate(props: Iprops) {
  const {id, categoriesId}= props;
  console.log("ebook relate", id, categoriesId);

  return (
    <Box sx={{ width: "100%", margin: "20px 0px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          fontSize="22px"
          fontWeight="bold"
          className={lexendDeca.className}
        >
          Các tựa sách liên quan
        </Typography>
        <Link
          href="/ebook"
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "#1976d1",
          }}
        >
          {"Xem thêm >>"}
        </Link>
      </Box>
      <Box sx={{ width: "100%", margin: "20px 0px 50px" }}>
        <Grid container spacing={2}>
          {ebooks.map((book) => {
            return (
              <Grid item lg={2} md={3} sm={3} xs={6} key={book}>
                <Paper className={styles.ebook}>
                  <Image
                    className={styles.ebook_image}
                    src="https://static.8cache.com/cover/o/eJzLyTDW1zULTa4wdYuyiA8I1A8zytT1cDIwzfDy1HeEgoC0bH1j78QU55DEcnMzRw-TwjwPf3MXT0en7NzMdJNMt8x033Rn53z9YgMAsFUYBA==/nha-gia-kim-cau-chuyen-mot-giac-mo.jpg"
                    alt="Celestial Magic"
                    width={100}
                    height={100}
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
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
export default EbookRelate;
