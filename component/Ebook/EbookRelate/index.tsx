"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/system";
import { Avatar, Paper, Typography, Rating, Grid } from "@mui/material";
import Link from "next/link";
import { faReply, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Lexend_Deca } from "next/font/google";
import styles from "./ebookrelate.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getListEbookRelate , getListEbookRelateSlice} from "@/store/features/ebook/slice";
import { abbreviateNumber } from "@/utils/helper";

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});


interface Iprops{
  id: string;
  categoriesId: string[]
}

function EbookRelate(props: Iprops) {
  const {id, categoriesId}= props;
  const dispatch = useDispatch()
  const ebookRelate = useSelector(getListEbookRelateSlice);

  useEffect(()=>{
    dispatch(getListEbookRelate({ebook_id:id, page_size:12}));
  },[id]);

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
          {ebookRelate.map((ebook:any) => {
            return (
              <Grid item lg={2} md={3} sm={3} xs={6} key={ebook._id}>
                <Link
                  href={`/ebook/${ebook.slug}`}
                  style={{textDecoration: "none" }}
                >
                  <Paper className={styles.ebook}>
                    <Image
                      className={styles.ebook_image}
                      src={ebook.img_url}
                      alt={ebook.name}
                      width={100}
                      height={100}
                    />
                    <p className={styles.ebook_name}>
                      {ebook.name}
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
                           {abbreviateNumber(ebook.views)}
                        </Typography>
                      </div>
                    </div>
                  </Paper>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
export default EbookRelate;
