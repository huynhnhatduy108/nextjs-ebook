"use client";
import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/system";
import { Paper, Modal } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Lexend_Deca } from "next/font/google";
import styles from "./authform.module.css";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { clearRegister, getAuthSlice, login, register } from "@/store/features/auth/slice";
import { setNotification } from "@/store/features/notification/slice";

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

interface IProps {
  open: boolean;
  onClose?: () => void;
}

const formInit = {
  username: "",
  full_name:"",
  email: "",
  password: "",
  confirmPassword: "",
};

function AuthFormModel(props: IProps) {
  const { open, onClose } = props;
  const dispatch = useDispatch();
  const [isSingin, setIsSingin] = useState<boolean>(true);
  const [user, setUser] = useState({ ...formInit });

  const authStore = useSelector(getAuthSlice);
  const userLogin = authStore.login;
  const userRegister = authStore.register;

  useEffect(() => {
    if (userLogin && userLogin?.access_token) {
      setUser({ ...formInit });
      onClose && onClose();
    }
    if (userRegister && userRegister?._id){
      dispatch(setNotification({message:"Dang ky thanh cong", type: "success"}));
      dispatch(clearRegister());
      setIsSingin(true); 
    }
  }, [userLogin, userRegister]);


  const handleChangeValue = (key: string, value: string) => {
    setUser({ ...user, [key]: value });
  };

  const handleSubmit = async () => {
    if (isSingin) {
      const data = {
        username: user.username,
        password: user.password,
      };
      dispatch(login(data));
    } else {
      const data = {
        username: user.username,
        email: user.email,
        full_name: user.full_name,
        avatar_url: "",
        password: user.password,
      };
      if(user.password!= user.confirmPassword){
         dispatch(setNotification({message:"Mat khau xac nhan khong giong nhau", type: "error"}));
      }
      else{
        dispatch(register(data));
      }
    }
  };

  const changeForm = () => {
    setIsSingin(!isSingin);
    setUser({ ...formInit });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Paper
        className={styles.auth_form}
        style={{
          maxWidth: "500px",
          margin: "70px auto",
          outline: "none",
          border: "none",
          padding: "30px 0px",
          position: "relative",
        }}
      >
        <div>
          <div>
            <p
              style={{
                textAlign: "center",
                fontSize: "20px",
                margin: "0px",
                fontWeight: "500",
              }}
            >
              {isSingin ? "Dang nhap" : "Dang ky"}
            </p>
          </div>
          <div style={{ width: "90%", margin: "0px auto" }}>
            <input
              placeholder="Ten dang nhap"
              className={`${styles.auth_input} ${lexendDeca.className}`}
              value={user.username}
              onChange={(event) =>
                handleChangeValue("username", event.target.value)
              }
            />
          </div>
          {!isSingin ? (
            <div style={{ width: "90%", margin: "0px auto" }}>
              <input
                placeholder="Ho ve ten"
                className={`${styles.auth_input} ${lexendDeca.className}`}
                value={user.full_name}
                onChange={(event) =>
                  handleChangeValue("full_name", event.target.value)
                }
              />
            </div>
          ) : (
            ""
          )}
          {!isSingin ? (
            <div style={{ width: "90%", margin: "0px auto" }}>
              <input
                placeholder="Email"
                className={`${styles.auth_input} ${lexendDeca.className}`}
                value={user.email}
                onChange={(event) =>
                  handleChangeValue("email", event.target.value)
                }
              />
            </div>
          ) : (
            ""
          )}
          <div style={{ width: "90%", margin: "0px auto" }}>
            <input
              placeholder="Mật khẩu"
              type="password"
              className={`${styles.auth_input} ${lexendDeca.className}`}
              value={user.password}
              onChange={(event) =>
                handleChangeValue("password", event.target.value)
              }
            />
          </div>
          {!isSingin ? (
            <div style={{ width: "90%", margin: "0px auto" }}>
              <input
                placeholder="Nhập lại mật khẩu"
                type="password"
                className={`${styles.auth_input} ${lexendDeca.className}`}
                value={user.confirmPassword}
                onChange={(event) =>
                  handleChangeValue("confirmPassword", event.target.value)
                }
              />
            </div>
          ) : (
            ""
          )}
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
                height: "42px",
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
                icon={faRightToBracket}
              />
              {isSingin ? "Dang nhap" : "Dang ky"}
            </Box>
          </div>

          {/* Term and service */}

          <p
            style={{
              width: "90%",
              textAlign: "center",
              margin: "0px auto 30px",
              fontSize: "14px",
              color: "gray",
            }}
          >
            Bạn đồng ý với Điều khoản dịch vụ và Chính sách quyền riêng tư của
            <span style={{ fontWeight: 500, color: "black" }}> Ebook</span>
          </p>

          {/* Google login */}
          <div
            style={{
              height: "42px",
              backgroundColor: "#e60000",
              borderRadius: "4px",
              width: "90%",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <svg
              style={{
                fontSize: "16px",
                marginRight: "10px",
                backgroundColor: "white",
                padding: "5px 8px",
                borderRadius: "4px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path
                fill="#e60000"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              />
            </svg>
            <p
              style={{
                color: "white",
                margin: "0px",
              }}
            >
              Dang nhap bang Google
            </p>
          </div>

          {/* Facebook login */}
          {/* <div
            style={{
              height: "42px",
              backgroundColor: "#3b5998",
              borderRadius: "4px",
              width: "90%",
              margin: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              marginTop: "15px",
            }}
          >
            <svg
              style={{
                fontSize: "16px",
                marginRight: "10px",
                backgroundColor: "white",
                padding: "5px 8px",
                borderRadius: "4px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path
                fill="#3b5998"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
            <p
              style={{
                color: "white",
                margin: "0px",
              }}
            >
              Dang nhap bang Facebook
            </p>
          </div> */}

          <p
            style={{
              textAlign: "center",
              cursor: "pointer",
              color: "#1976d1",
              fontSize: "14px",
            }}
            className={styles.text_register}
            onClick={changeForm}
          >
            {isSingin ? "Ban muon dang ky ?" : "Dang nhap"}
          </p>
        </div>
      </Paper>
    </Modal>
  );
}
export default AuthFormModel;
