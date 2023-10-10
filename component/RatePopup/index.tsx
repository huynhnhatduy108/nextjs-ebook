"use client";
import React, { useEffect, useState } from "react";
import { Paper, Modal, Rating, Box } from "@mui/material";
import styles from "./rate.module.css";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Lexend_Deca } from "next/font/google";
import { rateEbook } from "@/store/features/common/slice";

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

interface IProps {
  ebookId:string;
  open: boolean;
  onClose?: () => void;
  rate?: number;
  onChangeRate?: (event: any, newValue: any) => void;
}

function RatePopup(props: IProps) {
  const { ebookId, open, onClose, rate, onChangeRate } = props;
  const dispatch = useDispatch();

  const [rateText, setRateText] = useState<string>("");

  const handleSubmit = () => {
    dispatch(rateEbook({ebook_id: ebookId, rate: rate}))
    setRateText("");
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
          Danh gia
        </p>
        <Box
          sx={{
            marginTop: "20px",
            marginBottom: "10px",
            width: "100%",
            position: "relative",
            height: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              alignItems:"center"
            }}
          >
            <p
              style={{
                margin: "0px",
              }}
            >
              {`(${rate}/5)`}
            </p>
            <Rating
              name="no-value"
              value={rate}
              onChange={onChangeRate}
              style={{marginLeft:"5px"}}
            />
          </Box>
        </Box>

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
            placeholder="Viết bình luận"
            value={rateText}
            onChange={(event) => setRateText(event.target.value)}
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
export default RatePopup;
