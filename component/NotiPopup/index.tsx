"use client";
import React, { useEffect, useState } from "react";
import { Paper, Modal, Rating, Box } from "@mui/material";
import styles from "./noti.module.css";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Lexend_Deca } from "next/font/google";
import { rateEbook } from "@/store/features/common/slice";
import { notiErrorToEbook } from "@/store/features/error/slice";

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

interface IProps {
  ebookId:string;
  open: boolean;
  onClose?: () => void;
  rate?: number;
}

function NotiPopup(props: IProps) {
  const { ebookId, open, onClose } = props;
  const dispatch = useDispatch();

  const [errorText, setErrorText] = useState<string>("");

  const handleSubmit = () => {
    dispatch(notiErrorToEbook({ebook_id:ebookId, mess: errorText}));
    setErrorText("");
    onClose && onClose();
  };

  return (
    <Modal open={open} onClose={() => onClose && onClose()}>
      <Paper
        className={styles.ads_popup}
        style={{
          maxWidth: "500px",
          margin: "100px auto",
          outline: "none",
          border: "none",
          padding: "30px 20px",
          position: "relative",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "20px",
            margin: "0px",
            fontWeight: "500",
          }}
        >
          Báo lỗi
        </p>

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
            placeholder="Viết thông báo lỗi"
            value={errorText}
            onChange={(event) => setErrorText(event.target.value)}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "10px",
              right: "10px",
              padding: "6px 20px",
              color: "white",
              backgroundColor: "#1976d1",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            Gửi
          </Box>
        </Box>
      </Paper>
    </Modal>
  );
}
export default NotiPopup;
