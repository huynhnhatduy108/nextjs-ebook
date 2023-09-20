import * as React from "react";

import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";

interface Props {
  open: boolean;
  onClose?: () => void;
  mess?: string;
  type?: string;
}


export default function Notification(props: Props) {
  const { open, onClose, mess = "Hello Ebook!", type="default" } = props;

  const colors:{ [key: string]: string } = {
    success:"#00cc33",
    error:"#e60000",
    info:"#1976d1",
    warnming:"#cc6600",
    default:"#1976d1"
}
  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <Box sx={{ width: 400 }}>
      <Snackbar
        sx={{
          "& .css-1eqdgzv-MuiPaper-root-MuiSnackbarContent-root": {
            backgroundColor: colors[type],
          },
        }}
        autoHideDuration={1000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        message={mess}
        key="top right"
      />
    </Box>
  );
}
