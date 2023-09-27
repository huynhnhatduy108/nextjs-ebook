"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Avatar, Paper, Typography } from "@mui/material";
import Link from "next/link";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Lexend_Deca } from "next/font/google";

import styles from "./comment.module.css";
import { useDispatch , useSelector} from "react-redux";
import { FormatDate } from "@/utils/helper";

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

interface IProps {
  id: string;
}

const countComment = (comments:any)=>{  
  if(!comments.length) return 0
  let count = comments.length;
  for (let index = 0; index < comments.length; index++) {
    count += comments[index].sub_comments.length;
  }
  return count;
}

function Comment(props: IProps) {
  const { id } = props;
  const dispatch = useDispatch();

  const [currentComentId, setCurrentComentId] = useState<number | string>("");
  const [commentText, setCommentText] = useState<string>("");
  const [commentReplyText, setCommentReplyText] = useState<string>("");
  const [comments, setComments] = useState<Array<any>>([]);

  useEffect(() => {
    if (id) {
      const getCommentByBookId = async (ebook_id: string) => {
        try {
          const res = await fetch(
            `http://localhost:8000/comment/ebook/${ebook_id}`
          );
          if (res.status === 200) {
            const data = await res.json();
            console.log("data==>", data);
            
            setComments(data);
          }
        } catch (err) {
          console.log(err);
        }
      };
      getCommentByBookId(id);
    }
  }, [id]);

  const countComments = useMemo(() => countComment(comments), [comments]);

  const handleClickReply = (id: string | number) => {
    setCommentReplyText("");
    setCurrentComentId(id === currentComentId ? "" : id);
  };

  const handleChangeComment = (value: string) => {
    setCommentText(value);
  };

  const handleChangeCommentReply = (value: string) => {
    setCommentReplyText(value);
  };

  const handleSendComment = (
    bookId: string | number,
    parentId: string | number
  ) => {

    console.log("bookId==>", bookId);
    
    if (!parentId) {
      console.log("id, commentText", bookId, commentText);
    } else {
      console.log("id, commentReplyText", bookId, parentId,commentReplyText);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper className={styles.ebook_comment} style={{ padding: "20px" }}>
        <Typography
          className={lexendDeca.className}
        >{`Binh luan (${countComments})`}</Typography>
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
              fontSize: "14px",
              borderRadius: "5px",
              backgroundColor: "#f3f4f6",
              border: "none",
            }}
            placeholder="Viet binh luan"
            value={commentText}
            onChange={(event) => handleChangeComment(event.target.value)}
         />
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
            onClick={() => handleSendComment(id, "")}
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
            <Box key={comment._id}>
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
                    <Typography
                      fontWeight="500"
                      className={lexendDeca.className}
                    >
                      {comment?.user_comment.full_name}
                    </Typography>
                    <Typography
                      fontSize="13px"
                      color="gray"
                      className={lexendDeca.className}
                    >
                     {FormatDate(comment.created_at)}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    minHeight: "30px",
                    color: "gray",
                    fontSize: "14px",
                    // backgroundColor: "green",
                  }}
                >
                  {comment.content}
                </Box>

                <Box sx={{ position: "relative", height: "20px" }}></Box>
                <Box
                  onClick={() => handleClickReply(comment._id)}
                  sx={{
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    right: "10px",
                    bottom: "10px",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon
                    color="#1976d1"
                    icon={faReply}
                    fontSize="14px"
                  />
                  <Typography
                    color="#1976d1"
                    marginLeft="5px"
                    fontSize="14px"
                    className={lexendDeca.className}
                  >
                    Phan hoi
                  </Typography>
                </Box>
              </Box>
              {/* Reply */}
              {currentComentId === comment._id ? (
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
                      fontSize: "14px",
                      borderRadius: "5px",
                      backgroundColor: "#f3f4f6",
                      border: "none",
                    }}
                    placeholder="Viet binh luan"
                    value={commentReplyText}
                    onChange={(event) =>
                      handleChangeCommentReply(event.target.value)
                    }
                  />
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
                    onClick={() => handleSendComment(id, comment._id)}
                  >
                    Gui
                  </Box>
                </Box>
              ) : (
                ""
              )}
              {/* Child comment */}
              {comment?.sub_comments && comment.sub_comments.map((sub_comment:any) => {
                return (
                  <Box
                    key={sub_comment._id}
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
                        <Typography
                          fontWeight="500"
                          className={lexendDeca.className}
                        >
                         {sub_comment?.user_comment.full_name}
                        </Typography>
                        <Typography
                          fontSize="13px"
                          color="gray"
                          className={lexendDeca.className}
                        >
                          {FormatDate(sub_comment.created_at)}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        padding: "10px",
                        minHeight: "40px",
                        color: "gray",
                        fontSize: "14px",
                      }}
                    >
                      {sub_comment.content}
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
