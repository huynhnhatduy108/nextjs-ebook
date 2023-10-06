"use client";
import { LoginSocialGoogle } from "reactjs-social-login";
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
import {
  clearRegister,
  closeModelAuth,
  getAuthSlice,
  login,
  register,
} from "@/store/features/auth/slice";
import { setNotification } from "@/store/features/notification/slice";

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

const formInit = {
  username: "",
  full_name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function AuthFormModel() {
  const dispatch = useDispatch();
  const authSlice = useSelector(getAuthSlice);
  const { isOpen, login:userLogin, register:userRegister } = authSlice;  

  const [isSingin, setIsSingin] = useState<boolean>(true);
  const [user, setUser] = useState({ ...formInit });

  useEffect(() => {
    if (userLogin && userLogin?.access_token) {
      setUser({ ...formInit });
      hanldeCloseModel();
    }
  }, [userLogin]);

  useEffect(() => {
    if (userRegister && userRegister?._id) {
      dispatch(
        setNotification({ message: "Đăng ký thành công", type: "success" })
      );
      dispatch(clearRegister());
      setIsSingin(true);
    }
  }, [userRegister]);

  const hanldeCloseModel = () => {
    dispatch(closeModelAuth());
  };

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
      if (user.password != user.confirmPassword) {
        dispatch(
          setNotification({
            message: "Mật khẩu xác nhận không khớp",
            type: "error",
          })
        );
      } else {
        dispatch(register(data));
      }
    }
  };

  const changeForm = () => {
    setIsSingin(!isSingin);
    setUser({ ...formInit });
  };

  const hanldeGoogleLogin =(provider:any, data:any)=>{
    console.log("provider==>", provider, data);
    
  }

  if (!isOpen) return null;

  return (
    <Modal open={isOpen} onClose={hanldeCloseModel}>
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
              {isSingin ? "Đăng nhập" : "Đăng ký"}
            </p>
          </div>
          <div style={{ width: "90%", margin: "0px auto" }}>
            <input
              placeholder="Tên Đăng nhập"
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
                placeholder="Họ và tên"
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
              {isSingin ? "Đăng nhập" : "Đăng ký"}
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
          <LoginSocialGoogle
            client_id={"1082673185880-teesr0b5dc8c8kj1m24motld8aq7g4si.apps.googleusercontent.com"}
            scope="openid profile email"
            discoveryDocs="claims_supported"
            access_type="offline"
            onResolve={({ provider, data }) => {
                hanldeGoogleLogin(provider, data );
            }}
            onReject={(err) => {
              console.log("google login err",err);
            }}
          >
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
                Đăng nhập bằng Google
              </p>
            </div>
          </LoginSocialGoogle>

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
              Đăng nhập bang Facebook
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
            {isSingin ? "Bạn muốn đăng ký ?" : "Đăng nhập"}
          </p>
        </div>
      </Paper>
    </Modal>
  );
}
export default AuthFormModel;
