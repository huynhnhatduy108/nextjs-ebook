"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import {
  faBars,
  faMagnifyingGlass,
  faHouse,
  faCopy,
  faList,
  faChevronDown,
  faChevronUp,
  faBook,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputBase from "@mui/material/InputBase";
import SideBarDrawer from "../SideBarDrawer";
import { ListItem, ListItemButton } from "@mui/material";
import styles from "./header.module.css";

import { Lexend_Deca } from "next/font/google";
import AuthFormModel from "../AuthForm";
import { getLocalItem, removeLocalItem } from "@/utils/helper";
import { clearLogin, getAuthSlice, openModelAuth } from "@/store/features/auth/slice";
import { useDispatch, useSelector } from "react-redux";
import { getListCategoryFull, getListCategoryFullSlice } from "@/store/features/category/slice";

const lexendDeca = Lexend_Deca({
  weight: "300",
  subsets: ["vietnamese"],
});



const userToken: any = getLocalItem("userToken");

function ResponsiveAppBar() {
  
  const router = useRouter();
  const dispatch = useDispatch();

  const subMenuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  
  const authStore = useSelector(getAuthSlice);
  const categoryFull = useSelector(getListCategoryFullSlice);
  const userSignin = authStore.login;

  const [userMenu, setUserMenu] = useState<boolean>(false);
  const [isShowSideBar, setIsShowSideBar] = useState<boolean>(false);
  const [expandKey, setExpandKey] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [keyWord, setKeyWord] = useState<string>("");
  const [userLocal, setUserLocal] = useState<any>({});

  const pages = [
    {
      name: "Thể loại sách",
      key: "categories",
      icon: faList,
      link: "/",
      direct: false,
      sub: categoryFull?.slice(0, 15),
    },
    { name: "Sách", key: "ebook", icon: faBook, link: "/ebook", direct: true },
    {
      name: "Review sách",
      key: "reivew",
      icon: faCopy,
      link: "/review-sach",
      direct: true,
    },
  ];
  

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target as Node)
      ) {
        // handleExpand("", "/", false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        handleCloseUserMenu()
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [subMenuRef]);

  // set user from localStroge
  useEffect(() => {
    if (userToken.access_token || userSignin?.access_token) {
      setUserLocal({ ...userLocal, ...userToken, ...userSignin });
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [userToken, userSignin]);

  useEffect(()=>{
    dispatch(getListCategoryFull({}));
  }, [])

  const handleExpand = (key: string, link: string, isDirect: boolean) => {
    const keyExpand = key === expandKey ? "" : key;
    setExpandKey(keyExpand);

    if (isDirect) {
      router.push(link);
    }
  };

  const handleChangePage = (slug: string) => {
    router.push(`/ebook?categories=${slug}`);
    
  };

  const hanleOpenCloseSideBar = () => {
    setIsShowSideBar(!isShowSideBar);
  };

  const handleChangeKeyWord = (event: any) => {
    setKeyWord(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      router.push(`/ebook?keyword=${keyWord}`);
    }
  };

  const handleSearch = () => {
    router.push(`/ebook?keyword=${keyWord}`);
  };

  const handleOpenUserMenu =()=>{
    setUserMenu(true);
  }

  const handleCloseUserMenu =()=>{
    setUserMenu(false);
  }

  const hanldleLogout =() =>{
    removeLocalItem("userToken");
    setUserMenu(false);
    window.location.reload()
    
  }

  return (
    <AppBar position="static" className={lexendDeca.className}>
      {/* Side bar */}
      <SideBarDrawer
        pages={pages}
        open={isShowSideBar}
        hanleOpenCloseSideBar={hanleOpenCloseSideBar}
      />

      {/* Main header */}
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "0.2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            eBook
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={hanleOpenCloseSideBar}
              color="inherit"
            >
              <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faBars} />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            eBook
          </Typography>
          {/* Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <div
                key={page.name}
                style={{
                  marginRight: "15px",
                  color: "white",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  cursor: "pointer",
                }}
                onClick={() => handleExpand(page.key, page.link, page.direct)}
              >
                <Typography className={lexendDeca.className}>
                  {page.name}
                </Typography>
                {page?.sub && (
                  <FontAwesomeIcon
                    fontSize="12px"
                    style={{
                      marginLeft: "5px",
                    }}
                    icon={expandKey === page.key ? faChevronUp : faChevronDown}
                  />
                )}
                <Box
                  ref={subMenuRef}
                  sx={{
                    position: "absolute",
                    top: "35px",
                    left: 0,
                    width: "220px",
                    backgroundColor: "#448ad9",
                    zIndex: 10,
                    borderRadius: "5px",
                  }}
                >
                  {page?.sub &&
                    expandKey === page.key &&
                    page?.sub.map((subs:any, indx:number) => {
                      return (
                        <ListItem key={indx} disablePadding>
                          <div
                            className={`${lexendDeca.className} ${styles.sub_menu_item}`}
                            style={{
                              textDecoration: "none",
                              color: "#e3f2fd",
                              padding: "8px 20px",
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              height: "30px",
                            }}
                            onClick={() => handleChangePage(subs.slug)}
                          >
                            <Typography
                              className={lexendDeca.className}
                              style={{ fontSize: "14px" }}
                            >
                              {subs.name}
                            </Typography>
                          </div>
                        </ListItem>
                      );
                    })}
                </Box>
              </div>
            ))}
          </Box>

          {/* search */}
          <Box sx={{ flexGrow: 0, mr: 2, display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "40px",
                borderRadius: "5px",
                backgroundColor: "#448ad9",
                // "&:hover": {
                //   backgroundColor: "#01579b",
                // },
              }}
            >
              <InputBase
                className={lexendDeca.className}
                sx={{
                  width: "350px",
                  color: "white",
                  height: "40px",
                  paddingLeft: "15px",
                  borderRadius: "5px",
                }}
                placeholder="Search..."
                value={keyWord}
                onChange={handleChangeKeyWord}
                onKeyPress={handleKeyPress}
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                fontSize="20px"
                width="40px"
                height="40px"
                style={{
                  cursor: "pointer",
                }}
                onClick={handleSearch}
              />
            </Box>
          </Box>
          {/*  Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            {isLogin ? (
              <div style={{ position: "relative" }}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={userLocal?.full_name}
                    src={userLocal?.avatar_url}
                  />
                </IconButton>
               {userMenu? <div
                  ref={userMenuRef}
                  style={{
                    position: "absolute",
                    top: "42px",
                    right: 0,
                    width: "202px",
                    height: "40px",
                    backgroundColor: "#448ad9",
                    zIndex: 10,
                    borderRadius: "5px",
                    cursor:"pointer"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      display:"flex",
                      alignItems:"center"
                    }}
                    onClick={hanldleLogout}
                  >
                    <p style={{ margin: "0px", textAlign: "center" }}>
                      Dang xuat
                    </p>
                    <FontAwesomeIcon icon={faRightFromBracket} style={{paddingLeft:"5px"}} />
                  </div>
                </div>:""}
              </div>
            ) : (
              <Box
                sx={{
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
                onClick={() =>dispatch(openModelAuth())}
              >
                Login
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
