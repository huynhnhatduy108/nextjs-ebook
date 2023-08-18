"use client";
import React, { useEffect, useRef, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {
  faBars,
  faMagnifyingGlass,
  faHouse,
  faCopy,
  faList,
  faChevronDown,
  faChevronUp,
  faBook
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputBase from "@mui/material/InputBase";
import SideBarDrawer from "../SideBarDrawer";
import Link from "next/link";
import { ListItem, ListItemButton } from "@mui/material";
import styles from "./header.module.css";

import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  weight: "300",
  subsets: ["vietnamese"],
});

const pages = [
  
  {
    name: "The loai sach",
    key: "categories",
    icon: faList,
    link: "/category",
    sub: [
      "Ẩm thực - Nấu ăn",
      "Học Ngoại Ngữ",
      "Khoa Học - Kỹ Thuật",
      "Kinh Tế - Quản Lý",
      "Nông - Lâm - Ngư",
      "Tài Liệu Học Tập",
      "Thư Viện Pháp Luật",
      "Triết Học",
      "Truyện Ma - Truyện Kinh Dị",
      "Truyện Tranh",
      "Văn Học Việt Nam",
      "Cổ Tích - Thần Thoại",
      "Hồi Ký - Tuỳ Bút",
      "Kiếm Hiệp - Tiên Hiệp",
    ],
  },
  { name: "Ebook", key: "ebook", icon: faBook, link: "/ebook" },
  { name: "Review sach", key: "reivew", icon: faCopy, link: "/review-sach" },
];
const login = ["Logout"];
const logout = ["Login"];

function ResponsiveAppBar() {
  const subMenuRef = useRef<HTMLDivElement>(null);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [isShowSideBar, setIsShowSideBar] = useState<boolean | undefined>(
    false
  );
  const [expandKey, setExpandKey] = useState<string>("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        subMenuRef.current &&
        !subMenuRef.current.contains(event.target as Node)
      ) {
        handleExpand("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [subMenuRef]);

  const handleExpand = (key: string) => {
    const keyExpand = key === expandKey ? "" : key;
    setExpandKey(keyExpand);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const hanleOpenCloseSideBar = () => {
    setIsShowSideBar(!isShowSideBar);
  };

  return (
    <AppBar position="static" className={lexendDeca.className}>
      <SideBarDrawer
        open={isShowSideBar}
        hanleOpenCloseSideBar={hanleOpenCloseSideBar}
      />
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
            href=""
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
              <Link
                href={page.link}
                key={page.name}
                style={{
                  marginRight: "15px",
                  color: "white",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
                onClick={() => handleExpand(page.key)}
              >
                <Typography className={lexendDeca.className}>{page.name}</Typography>
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
                    page?.sub.map((subs, indx) => {
                      return (
                        <ListItem key={indx} disablePadding>
                          <Link
                            className={`${lexendDeca.className} ${styles.sub_menu_item}`}
                            href="/"
                            style={{
                              textDecoration: "none",
                              color: "#e3f2fd",
                              padding: "8px 20px",
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              height: "30px",
                            }}
                          >
                            <Typography className={lexendDeca.className} style={{ fontSize: "14px" }}>
                              {subs}
                            </Typography>
                          </Link>
                        </ListItem>
                      );
                    })}
                </Box>
              </Link>
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
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                fontSize="20px"
                width="40px"
                height="40px"
                style={{
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
          {/*  Avatar */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Nhat Duy" src="/static/images/avatar/2.jpg" />
            </IconButton>      
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
