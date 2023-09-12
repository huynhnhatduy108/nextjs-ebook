"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import {
  Avatar,
  Paper,
  Typography,
  Rating,
  Dialog,
  Button,
  Modal,
} from "@mui/material";
import Link from "next/link";
import { faReply, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Lexend_Deca } from "next/font/google";
import styles from "./contactform.module.css";

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

interface IProps {
  open: boolean;
  handleClose?: () => void;
}

function ContactFormModel(props: IProps) {
  const { open, handleClose } = props;
  return (
    <Modal open={open} onClose={handleClose}>
      <Paper
      className={styles.contact_form}
        style={{
          maxWidth: "700px",
          margin: "50px auto",
          outline: "none",
          border: "none",
          
        }}
      >
        <div>
            <p style={{textAlign:"center", fontSize:"22px", margin:"0px", fontWeight:"700", paddingTop:"40px"}}>Liên hệ</p>
        </div>
        <div style={{ width: "90%", margin: "0px auto" }}>
          <input
            placeholder="Ten cua ban"
            className={`${styles.contact_input} ${lexendDeca.className}`}
          />
        </div>
        <div style={{ width: "90%", margin: "0px auto" }}>
          <input
            placeholder="Email"
            className={`${styles.contact_input} ${lexendDeca.className}`}
          />
        </div>
        <div style={{ width: "90%", margin: "0px auto" }}>
          <input
            placeholder="Tieu de"
            className={`${styles.contact_input} ${lexendDeca.className}`}
          />
        </div>
        <div style={{ width: "90%", margin: "0px auto" }}>
          <textarea
            placeholder="Noi dung"
            className={`${styles.contact_area} ${lexendDeca.className}`}
          ></textarea>
        </div>
        <div style={{ width: "90%", textAlign: "right", margin: "auto" }}>
          {" "}
          <Button
            className={`${styles.contact_btn} ${lexendDeca.className}`}
            variant="contained"
          >
            Gui
          </Button>
        </div>
      </Paper>
    </Modal>
  );
}
export default ContactFormModel;
