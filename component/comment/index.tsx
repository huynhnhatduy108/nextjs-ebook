"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Avatar, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./comment.module.css";

const comments = [
  {
    id: 1,
    commment: "Apecoin (APE) là gì? Thông tin chi tiết về tiền điện tử APE",
    sub: [],
  },
  {
    id: 2,
    commment: "Apecoin là gì?",
    sub: [
      {
        id: 7,
        commment: "Apecoin là token quản trị phi tập trung (DAO) ",
        sub: [],
      },
      { id: 8, commment: "Điểm nổi bật của Apecoin  " },
      {
        id: 9,
        commment: "The APE Foundation sử dụng Ecosystem Fund,",
      },
    ],
  },
  {
    id: 3,
    commment: "Apecoin là token quản trị phi tập trung (DAO) ",
    sub: [],
  },
  {
    id: 4,
    commment: "Điểm nổi bật của Apecoin  ",
    sub: [
      {
        id: 10,
        commment: "Apecoin là token quản trị phi tập trung (DAO) ",
      },
      { id: 11, commment: "Điểm nổi bật của Apecoin  " },
    ],
  },
  { id: 5, commment: "The APE Foundation sử dụng Ecosystem Fund,", sub: [] },
  { id: 6, commment: "ahsahsaskasnaksa s sds sd sd sd sd s ds ds d", sub: [] },
];

function Comment() {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper style={{ padding: "20px" }}>
        <Typography>{`Binh luan (${0})`}</Typography>
        {/* Main comment */}
        <Box
          sx={{
            marginTop: "20px",
            width: "100%",
            height: "100px",
            position: "relative",
          }}
        >
          <textarea
            style={{            
              boxSizing:"border-box",
              display:"block",
              width: "100%",
              height: "100px",
              padding: "10px",
              outline: "none",
              borderRadius: "5px",
              backgroundColor: "#f3f4f6",
              border: "none",
            }}
            placeholder="Viet binh luan"
          ></textarea>
          <Box
            sx={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              padding: "8px 20px",
              color: "white",
              backgroundColor: "#1976d1",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Gui
          </Box>
        </Box>
        {/* Line */}
        <Box
          sx={{
            backgroundColor: "#f3f4f6",
            height: "2px",
            margin: "20px auto",
            width: "80%",
          }}
        ></Box>
        {/* List comment */}
        <Box
          sx={{
            marginTop: "20px",
            width: "100%",
            // height: "100px",
            position: "relative",
            border: "1px solid rgba(0,0,0,0.2)",
            borderRadius: "5px",
          }}
        >
          <Box
            sx={{
              padding: "10px 10px 0px",
              height: "40px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar>ND</Avatar>
            <Box sx={{ marginLeft: "10px" }}>
              <Typography fontWeight="700">Nhat Duy</Typography>
              <Typography fontSize="13px" color="gray">
                28/07/2023 - 08:56
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px",
              height: "60px",
              color: "gray",
              // backgroundColor: "green",
            }}
          >
            Nếu như bạn đã sẵn sàng để sử dụng tiếng Anh trong 1 năm tới thì tôi
            tin chắc rằng đây chính là quyển sách quan trọng nhất mà bạn cần
            đọc.
          </Box>

          <Box sx={{ position: "relative", height: "20px" }}></Box>
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              right: "10px",
              bottom: "10px",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon color="#1976d1" icon={faReply} />
            <Typography color="#1976d1" marginLeft="5px">
              Phan hoi
            </Typography>
          </Box>
        </Box>
        {/* Reply */}
        <Box
          sx={{
            marginTop: "10px",
            marginLeft: "20px",
            // width: "100%",
            height: "100px",
            position: "relative",
            border: "1px solid rgba(0,0,0,0.2)",
            borderRadius: "5px",
          }}
        >
           <textarea
            style={{
              display:"block",
              boxSizing:"border-box",
              width: "100%",
              height: "100px",
              padding: "10px",
              outline: "none",
              borderRadius: "5px",
              backgroundColor: "#f3f4f6",
              border: "none",
            }}
            placeholder="Viet binh luan"
          ></textarea>
          <Box
            sx={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              padding: "8px 20px",
              color: "white",
              backgroundColor: "#1976d1",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Gui
          </Box>

        </Box>
        {/* Child comment */}
        <Box
          sx={{
            marginTop: "10px",
            marginLeft: "20px",
            // width: "100%",
            // height: "100px",
            position: "relative",
            border: "1px solid rgba(0,0,0,0.2)",
            borderRadius: "5px",
          }}
        >
          <Box
            sx={{
              padding: "10px 10px 0px",
              height: "40px",
              // backgroundColor: "red",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar>ND</Avatar>
            <Box sx={{ marginLeft: "10px" }}>
              <Typography fontWeight="700">Nhat Duy</Typography>
              <Typography fontSize="13px" color="gray">
                28/07/2023 - 08:56
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px",
              minHeight: "40px",
              color: "gray",
              // backgroundColor: "green",
            }}
          >
            Nếu như bạn đã sẵn sàng để sử dụng tiếng Anh trong 1 năm tới thì tôi
            tin chắc rằng đây chính là quyển sách quan trọng nhất mà bạn cần
            đọc.
          </Box>
        </Box>
       
      </Paper>
    </Box>
  );
}
export default Comment;
