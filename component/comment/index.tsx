"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Avatar, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Lexend_Deca } from "next/font/google";

import styles from "./comment.module.css";

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

const comments = [
  {
    id: 1,
    commment:
      "Nếu như bạn mong muốn giao tiếp tiếng Anh thành thạo, chuyên nghiệp từ 3 tới 6 tháng thì cuốn sách này sẽ làm bạn thất vọng. Thực tế cho thấy chưa có ai mới bắt đầu học tiếng Anh có thể giao tiếp được trôi chảy trong thời gian từ 3 – 6 tháng. Đó là ảo tưởng. Nhưng nếu như bạn đang tìm kiếm làm như thế nào có thể sử dụng tiếng Anh giao tiếp thành thạo, chuyên nghiệp trong 1 năm tới thì xin chúc mừng bạn. ",
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
        <Typography className={lexendDeca.className}>{`Binh luan (${0})`}</Typography>
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
          className={lexendDeca.className}
            style={{
              boxSizing: "border-box",
              display: "block",
              width: "100%",
              height: "100px",
              padding: "10px",
              outline: "none",
              fontSize:"14px",
              borderRadius: "5px",
              backgroundColor: "#f3f4f6",
              border: "none",
            }}
            placeholder="Viet binh luan"
            onChange={(event)=>handleChangeComment(event.target.value)}
          >{commentText}</textarea>
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
            onClick={()=>handleSendComment("","")}

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
        {comments.map((comment) => {
          return (
            <Box key={comment.id}>
              <Box
                sx={{
                  marginTop: "20px",
                  width: "100%",
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
                    <Typography fontWeight="500"  className={lexendDeca.className}>Nhat Duy</Typography>
                    <Typography fontSize="13px" color="gray" className={lexendDeca.className}>
                      28/07/2023 - 08:56
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    minHeight: "30px",
                    color: "gray",
                    fontSize:"14px"
                    // backgroundColor: "green",
                  }}
                >
                  {comment.commment}
                </Box>

                <Box sx={{ position: "relative", height: "20px" }}></Box>
                <Box
                  onClick={()=>handleClickReply(comment.id)}
                  sx={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    right: "10px",
                    bottom: "10px",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon color="#1976d1" icon={faReply} fontSize="14px"  />
                  <Typography color="#1976d1" marginLeft="5px" fontSize="14px" className={lexendDeca.className} >
                    Phan hoi
                  </Typography>
                </Box>
              </Box>
              {/* Reply */}
              {currentComentId === comment.id ? (
                <Box
                  sx={{
                    marginTop: "10px",
                    marginLeft: "20px",
                    position: "relative",
                    border: "1px solid rgba(0,0,0,0.2)",
                    borderRadius: "5px",
                  }}
                >
                  <textarea
                  className={lexendDeca.className}
                    style={{
                      display: "block",
                      boxSizing: "border-box",
                      width: "100%",
                      height: "100px",
                      padding: "10px",
                      outline: "none",
                      fontSize:"14px",
                      borderRadius: "5px",
                      backgroundColor: "#f3f4f6",
                      border: "none",
                    }}
                    placeholder="Viet binh luan"
                    onChange={(event)=>handleChangeCommentReply(event.target.value)}
                  >{commentReplyText}</textarea>
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
                    onClick={()=>handleSendComment("",comment.id)}
                  >
                    Gui
                  </Box>
                </Box>
              ) : (
                ""
              )}
              {/* Child comment */}
              {comment.sub.map((sub_comment) => {
                return (
                  <Box
                    key={sub_comment.id}
                    sx={{
                      marginTop: "10px",
                      marginLeft: "20px",
                      position: "relative",
                      border: "1px solid rgba(0,0,0,0.2)",
                      borderRadius: "5px",
                    }}
                  >
                    <Box
                      sx={{
                        padding: "10px 10px 0px",
                        minHeight: "40px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Avatar>ND</Avatar>
                      <Box sx={{ marginLeft: "10px" }}>
                        <Typography fontWeight="500" className={lexendDeca.className}>Nhat Duy</Typography>
                        <Typography fontSize="13px" color="gray" className={lexendDeca.className}>
                          28/07/2023 - 08:56
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        padding: "10px",
                        minHeight: "40px",
                        color: "gray",
                        fontSize:"14px"

                      }}
                    >
                      {sub_comment.commment}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Paper>
    </Box>
  );
}
export default Comment;
