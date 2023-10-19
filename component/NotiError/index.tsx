"use client";
import React, { useEffect, useState } from "react";
import {  Box } from "@mui/material";
import styles from "./noti.module.css";
import { faCircleExclamation, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Lexend_Deca } from "next/font/google";
import NotiPopup from "../NotiPopup";


const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

interface IProps {
  ebookId: string;
}

function NotiError(props:IProps) {
  const {ebookId}= props
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClosePopup = ()=>{
    setIsOpen(false)
  }

  const handleOpenPopup = ()=>{
    setIsOpen(true)
  }

  return (
    <Box
      sx={{
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    > 
      <NotiPopup open={isOpen} onClose={handleClosePopup} ebookId={ebookId}/>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: { md: "8px 30px", xs: "6px 30px" },
          color: "white",
          backgroundColor: "#57b846",
          borderRadius: "4px",
          cursor: "pointer",
          width: "125px",
        }}
      >
        <FontAwesomeIcon
          icon={faTag}
          style={{ fontSize: "16px", marginRight: "5px" }}
        />
        <p style={{ margin: "0px" }}> Xem giá sách</p>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: { md: "8px 30px", xs: "6px 30px" },
          color: "white",
          backgroundColor: "rgb(230, 0, 0)",
          borderRadius: "4px",
          cursor: "pointer",
          width: "80px",
        }}
        onClick ={handleOpenPopup}
      >
        <FontAwesomeIcon
          icon={faCircleExclamation}
          style={{ fontSize: "16px", marginRight: "5px" }}
        />
        <p style={{ margin: "0px" }}> Báo lỗi</p>
      </Box>
    </Box>
  );
}
export default NotiError;
