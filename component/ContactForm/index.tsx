"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { Lexend_Deca } from "next/font/google";
import styles from "./contactform.module.css";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

interface IProps {
  open: boolean;
  handleClose?: () => void;
}

const formInit = {
  name: "",
  email: "",
  subject: "",
  content: "",
};

function ContactFormModel(props: IProps) {
  const { open, handleClose } = props;
  const [contactForm, setContactForm] = useState({ ...formInit });

  const handleChangeValue = (key: string, value: string) => {
    setContactForm({ ...contactForm, [key]: value });
  };

  const handleSubmit = () => {
    console.log("contactForm==>", contactForm);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Paper
      className={styles.contact_form}
        style={{
          maxWidth: "700px",
          margin: "50px auto",
          outline: "none",
          border: "none",
          padding:"30px 0px" 
        }}
      >
        <div>
            <p style={{textAlign:"center", fontSize:"22px", margin:"0px", fontWeight:"500", }}>Liên hệ</p>
        </div>
        <div style={{ width: "90%", margin: "0px auto" }}>
          <input
            placeholder="Ten cua ban"
            className={`${styles.contact_input} ${lexendDeca.className}`}
            value={contactForm.name}
            onChange={(event) =>
              handleChangeValue("name", event.target.value)
            }
          />
        </div>
        <div style={{ width: "90%", margin: "0px auto" }}>
          <input
            placeholder="Email"
            className={`${styles.contact_input} ${lexendDeca.className}`}
            value={contactForm.email}
            onChange={(event) =>
              handleChangeValue("email", event.target.value)
            }
          />
        </div>
        <div style={{ width: "90%", margin: "0px auto" }}>
          <input
            placeholder="Tieu de"
            className={`${styles.contact_input} ${lexendDeca.className}`}
            value={contactForm.subject}
            onChange={(event) =>
              handleChangeValue("subject", event.target.value)
            }
          />
        </div>
        <div style={{ width: "90%", margin: "0px auto" }}>
          <textarea
            placeholder="Noi dung"
            className={`${styles.contact_area} ${lexendDeca.className}`}
            value={contactForm.content}
            onChange={(event) =>
              handleChangeValue("content", event.target.value)
            }
          />
        </div>
        <div
            style={{
              width: "90%",
              textAlign: "center",
              margin: "25px auto 10px",
              fontSize: "16px",
            }}
          >
            <Box
              sx={{
                height: "40px",
                color: "white",
                backgroundColor: "#1976d1",
                borderRadius: "4px",
                cursor: "pointer",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
              onClick={handleSubmit}
            >
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon={faPaperPlane}
              />
              Gửi
            </Box>
          </div>
      </Paper>
    </Modal>
  );
}
export default ContactFormModel;
