import { useRouter } from "next/navigation";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
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
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./drawer.module.css";

import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  weight: "300",
  subsets: ["vietnamese"],
});

interface IProps {
  open: boolean;
  hanleOpenCloseSideBar: () => void;
  pages: Array<any>;
}


function SideBarDrawer(props: IProps) {
  const { pages , open, hanleOpenCloseSideBar } = props;
  const router = useRouter();

  const [expandKey, setExpandKey] = useState<string>("");
  const [keyWord, setKeyWord] = useState<string>("");

  const handleExpand = (key: string, link: string, isDirect: boolean) => {
    const keyExpand = key === expandKey ? "" : key;
    setExpandKey(keyExpand);

    if (isDirect) {
      router.push(link);
      hanleOpenCloseSideBar && hanleOpenCloseSideBar()
    }
  };

  const handleChangePage = (slug: string) => {
    router.push(`/ebook?categories=${slug}`);
    hanleOpenCloseSideBar && hanleOpenCloseSideBar()
  };

  const handleChangeKeyWord = (event: any) => {
    setKeyWord(event.target.value);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      router.push(`/ebook?keyword=${keyWord}`);
      hanleOpenCloseSideBar()
    }
  };

  const handleSearch = () => {
    router.push(`/ebook?keyword=${keyWord}`);
    hanleOpenCloseSideBar()

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
              placeholder="Tìm kiếm..."
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
        <List>
          {pages.map((page: any) => (
            <Box key={page.key}>
              <ListItem key={page.key} disablePadding>
                <div
                  className={styles.menu_item}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    padding: "10px 20px",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "30px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleExpand(page.key, page.link, page.direct)}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <FontAwesomeIcon icon={page.icon} />
                    <Typography
                      className={lexendDeca.className}
                      style={{ marginLeft: "10px" }}
                    >
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
                </div>
              </ListItem>
              {page?.sub &&
                expandKey === page.key &&
                page?.sub.map((sub: any, indx: number) => {
                  return (
                    <ListItem
                      className={styles.sub_menu}
                      key={indx}
                      disablePadding
                    >
                      <div
                        className={styles.sub_menu_item}
                        style={{
                          textDecoration: "none",
                          color: "#e3f2fd",
                          padding: "10px 20px",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          height: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleChangePage(sub.slug)}
                      >
                        <Typography
                          className={lexendDeca.className}
                          style={{ marginLeft: "28px", fontSize: "13px" }}
                        >
                          {sub.name}
                        </Typography>
                      </div>
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
