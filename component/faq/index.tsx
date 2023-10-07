"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Avatar, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./faq.module.css";

const comments = [
  {
    id: 1,
    commment:
      "Nếu như bạn mong muốn giao tiếp tiếng Anh thành thạo, chuyên nghiệp từ 3 tới 6 tháng thì cuốn sách này sẽ làm bạn thất vọng. Thực tế cho thấy chưa có ai mới bắt đầu học tiếng Anh có thể giao tiếp được trôi chảy trong thời gian từ 3 – 6 tháng. Đó là ảo tưởng. Nhưng nếu như bạn đang Tìm kiế làm như thế nào có thể sử dụng tiếng Anh giao tiếp thành thạo, chuyên nghiệp trong 1 năm tới thì xin chúc mừng bạn. ",
    sub: [],
  },
  {
    id: 2,
    commment: "Apecoin là gì?",
    sub: [
      {
        id: 7,
        commment: "Apecoin là token quản trị phi tập trung (DAO) ",
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
  const [currentComentId, setCurrentComentId] = useState<number|string>("");
  const [commentText, setCommentText]= useState<string>("")
  const [commentReplyText, setCommentReplyText]= useState<string>("")


  const handleClickReply = (id:string|number) =>{
    setCommentReplyText("")
    setCurrentComentId(id===currentComentId?"":id)
  }


  const handleChangeComment =(value:string)=>{
    setCommentText(value)
  }


  const handleChangeCommentReply =(value:string)=>{
    setCommentReplyText(value)
  }

  const handleSendComment =(bookId: string|number, parentId:string|number)=>{
      if (!parentId){
        console.log("id, commentText", bookId, commentText);

      }
      else{
        console.log("id, commentReplyText", bookId, commentReplyText);

      }
      
  }

  

  return (
    <Box sx={{ width: "100%" }}>
      <Paper className={styles.ebook_comment} style={{ padding: "20px" }}>
        <Typography>{`Bình luận (${0})`}</Typography>
       
      </Paper>
    </Box>
  );
}
export default Comment;
