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
import { useDispatch, useSelector } from "react-redux";
import { FormatDate, getLocalItem } from "@/utils/helper";
import {
  ebookComment,
  getEbookComment,
  getEbookCommentSlice,
} from "@/store/features/comment/slice";
import { setNotification } from "@/store/features/notification/slice";
import AuthFormModel from "../AuthForm";
import { getAuthSlice } from "@/store/features/auth/slice";

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

interface IProps {
  id: string;
}

const countComment = (comments: any) => {
  if (!comments.length) return 0;
  let count = comments.length;
  for (let index = 0; index < comments.length; index++) {
    count += comments[index].sub_comments.length;
  }
  return count;
};

const userLocal: any = getLocalItem("userToken");

function Comment(props: IProps) {
  const { id } = props;
  const dispatch = useDispatch();

  const ebookCommentStore = useSelector(getEbookCommentSlice);
  const authStore = useSelector(getAuthSlice);
  const userLogin = authStore.login;

  const listComments = ebookCommentStore.list;

  const [currentComentId, setCurrentComentId] = useState<number | string>("");
  const [commentText, setCommentText] = useState<string>("");
  const [commentReplyText, setCommentReplyText] = useState<string>("");
  const [comments, setComments] = useState<Array<any>>([]);
  const [isAuth, setIsAuth] = useState(false);

  console.log("isAuth==>", isAuth);

  console.log('userLogin?.access_token || userLocal?.access_token', userLogin?.access_token , userLocal?.access_token);
  

  useEffect(() => {
    if (id) {
      dispatch(getEbookComment(id));
    }
  }, [id]);

  useEffect(() => {
    setComments(listComments);
  }, [listComments]);

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
    const data = {
      ebook_id: bookId,
      parent_id: parentId,
      content: parentId ? commentReplyText : commentText,
    };

    if (userLogin?.access_token || userLocal?.access_token) {
      if (!data.content) {
        dispatch(
          setNotification({ message: "Vui long nhap noi dung", type: "error" })
        );
      } else {
        setCommentText("");
        setCommentReplyText("");
        dispatch(ebookComment(data));
      }
    } else {
      setIsAuth(true);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Auth model */}
      <AuthFormModel open={isAuth} onClose={() => setIsAuth(false)} />
      {/* Comment */}
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
                  <Avatar
                    alt={comment?.user_comment.full_name}
                    src={comment?.user_comment?.avatar_url}
                  />
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
              {comment?.sub_comments &&
                comment.sub_comments.map((sub_comment: any) => {
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
                         <Avatar
                            alt={sub_comment?.user_comment.full_name}
                            src={sub_comment?.user_comment?.avatar_url}
                          />
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
