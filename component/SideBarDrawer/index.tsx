import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
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
import Link from "next/link";
import { useState } from "react";
import styles from "./drawer.module.css";

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
    link: "/",
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

function SideBarDrawer(props: any) {
  const { open, hanleOpenCloseSideBar } = props;
  const [expandKey, setExpandKey] = useState<string>("");

  const handleExpand = (key: string) => {
    const keyExpand = key === expandKey ? "" : key;
    setExpandKey(keyExpand);
  };

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={hanleOpenCloseSideBar}
      onOpen={hanleOpenCloseSideBar}
    >
      <Box
        sx={{
          width: "80vw",
          height: "100vh",
          backgroundColor: "#01579b",
          color: "white",
        }}
      >
        <Box
          sx={{
            padding: "0px 20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "40px",
              borderRadius: "5px",
              backgroundColor: "#448ad9",
              marginTop: "50px",
              "&:hover": {
                // backgroundColor: "#01579b",
              },
            }}
          >
            <InputBase
            className={lexendDeca.className}
              sx={{
                flex: 1,
                width: "100%",
                color: "white",
                height: "40px",
                backgroundColor: "#448ad9",
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
        <List>
          {pages.map((page) => (
            <Box>
              <ListItem key={page.key} disablePadding>
                <Link
                  className={styles.menu_item}
                  href={page.link}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    padding: "10px 20px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "30px",
                  }}
                  onClick={() => handleExpand(page.key)}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FontAwesomeIcon icon={page.icon} />
                    <Typography className={lexendDeca.className} style={{ marginLeft: "10px" }}>
                      {page.name}
                    </Typography>
                  </Box>
                  {page?.sub && (
                    <FontAwesomeIcon
                      fontSize="12px"
                      icon={
                        expandKey === page.key ? faChevronUp : faChevronDown
                      }
                    />
                  )}
                </Link>
              </ListItem>
              {page?.sub &&
                expandKey === page.key &&
                page?.sub.map((sub, indx) => {
                  return (
                    <ListItem className={styles.sub_menu} key={indx} disablePadding>
                      <Link
                        className={styles.sub_menu_item}
                        href="/"
                        style={{
                          textDecoration: "none",
                          color: "#e3f2fd",
                          padding: "10px 20px",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          height: "30px",
                          // backgroundColor:
                          //   "#2962ff                            ",
                        }}
                      >
                        <Typography
                          className={lexendDeca.className}
                          style={{ marginLeft: "28px", fontSize: "13px" }}
                        >
                          {sub}
                        </Typography>
                      </Link>
                    </ListItem>
                  );
                })}
            </Box>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
}

export default SideBarDrawer;
