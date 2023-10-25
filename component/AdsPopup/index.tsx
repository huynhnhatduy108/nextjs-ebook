"use client";
import React, { useEffect } from "react";
import {
  Paper,
  Modal,
} from "@mui/material";
import { Lexend_Deca } from "next/font/google";
import styles from "./ads.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAuthSlice, login } from "@/store/features/auth/slice";

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

interface IProps {
  open: boolean;
  onClose?: () => void;
}

function AdsPopup(props: IProps) {
  const { open, onClose } = props;
  const dispatch = useDispatch()
  const authStore = useSelector(getAuthSlice);
  const dataUser = authStore;

  useEffect(()=>{ 
    if(dataUser && dataUser?.access_token){
    }
  },[dataUser])
  
  return (
    <Modal open={open} onClose={onClose}>
      <Paper
        className={styles.ads_popup}
        style={{
          maxWidth: "500px",
          margin: "70px auto",
          outline: "none",
          border: "none",
          padding: "30px 0px",
          position: "relative",
        }}
      >
        <div>HIIHI</div>
      </Paper>
    </Modal>
  );
}
export default AdsPopup;
