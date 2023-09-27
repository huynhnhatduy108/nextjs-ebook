"use client"
import React, { useEffect } from "react";
import {
  getNotificationSlice,
  clearNotification,
} from "@/store/features/notification/slice";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";

export default function Notification() {
  const dispatch = useDispatch();
  const notiState = useSelector(getNotificationSlice);

  const {
    isShow = false,
    duration = 1000,
    message = "Thong bao!",
    type = "default",
  } = notiState;

  useEffect(() => {
    if (isShow) {
      const timeOut = setTimeout(() => {
        dispatch(clearNotification());
      }, duration);

      return () => clearTimeout(timeOut);
    }
  }, [isShow]);

  const colors: { [key: string]: string } = {
    success: "#00cc33",
    error: "#e60000",
    info: "#1976d1",
    warnming: "#cc6600",
    default: "#1976d1",
  };

  const handleClose = () => {
    dispatch(clearNotification());
  };

  if (!isShow) return null;

  return (
    <Box sx={{ width: 400 }}>
      <Snackbar
        sx={{
          "& .css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root": {
            backgroundColor: colors[type],
          },
        }}
        autoHideDuration={duration}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={isShow}
        onClose={handleClose}
        message={message}
        key="top right"
      />
    </Box>
  );
}
