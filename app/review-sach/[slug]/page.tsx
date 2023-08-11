import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper, Avatar } from "@mui/material";
import {
  faComment,
  faEye,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./page.module.css";

{
  /* <FontAwesomeIcon icon={faLinkedin} /> */
//   <FontAwesomeIcon icon={faFacebook} />
}
const tags = ["asdsadassa", "sacascsacsa", "sacascsac"];

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const metadata: Metadata = {
    title: slug,
    description: `This is the page of ${slug}`,
  };
  return metadata;
}

export default async function UserPage({ params: { slug } }: Params) {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* category */}
        <Box sx={{ margin: "50px 0px" }}>
          <Grid container spacing={2}>
            <Grid item lg={8} md={12} sm={12} xs={12}>
              <Box>
                {/* <Paper style={{}}> */}
                {/* Title */}
                <h1 style={{ margin: "0px" }}>
                  Apecoin (APE) là gì? Thông tin chi tiết về tiền điện tử APE
                </h1>
                {/* Auth time */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "15px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Avatar>ND</Avatar>
                    <Typography fontWeight="bold" marginLeft="10px">
                      Nhat Duy
                    </Typography>
                    <Typography marginLeft="10px" color="gray" fontSize="16px">
                      24/07/2022 | 23:05
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                      }}
                    >
                      <FontAwesomeIcon
                        style={{
                          fontSize: "16px",
                          color: "gray",
                          marginRight: "4px",
                        }}
                        icon={faComment}
                      />
                      <Typography color="gray" fontSize="16px">
                        10
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        marginLeft: "10px",
                      }}
                    >
                      <FontAwesomeIcon
                        style={{
                          fontSize: "16px",
                          color: "gray",
                          marginRight: "4px",
                        }}
                        icon={faEye}
                      />
                      <Typography color="gray" fontSize="16px">
                        97
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {/* Thumnail  */}
                <Box
                  sx={{
                    margin: "20px 0px",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "350px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                    src="https://www.totolink.vn/public/uploads/img_post/ebook-la-gi-co-gi-noi-troi-so-voi-sach-thuong-lam-sao-de-xem-duoc-ebook-1.png"
                  />
                </Box>
                {/* content */}
                <p>
                  The APE Foundation là cơ quan quản lý của ApeCoin bao gồm
                  những người nắm giữ APE token trong ApeCoin DAO. Nhiệm vụ của
                  tổ chức này là quản lý các quyết định của ApeCoin DAO và chịu
                  trách nhiệm quản lý dự án cũng như các nhiệm vụ khác nhằm đảm
                  bảo ý tưởng của cộng đồng được hỗ trợ thực hiện. The APE
                  Foundation sử dụng Ecosystem Fund, được kiểm soát bởi một ví
                  multisig, để thanh toán các chi phí theo chỉ dẫn của ApeCoin
                  DAO và cung cấp cơ sở hạ tầng cho holder ApeCoin tham gia quá
                  trình quản trị của mình.
                </p>

                {/* tag */}
                <Box sx={{ display: "flex", marginTop: "30px" }}>
                  {tags.length &&
                    tags.map((tag) => {
                      return (
                        <Typography
                          style={{
                            border: "1px solid black",
                            padding: "5px 25px",
                            borderRadius: "5px",
                            marginRight: "10px",
                          }}
                        >
                          #{tag}
                        </Typography>
                      );
                    })}
                </Box>

                {/* </Paper> */}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <Typography>Share:</Typography>
                {/* Button */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box>
                    <FontAwesomeIcon
                      style={{
                        fontSize: "16px",
                        color: "gray",
                        marginRight: "4px",
                      }}
                      icon={faEnvelope}
                    />
                  </Box>
                  <Box>
                    {" "}
                    <FontAwesomeIcon
                      style={{
                        fontSize: "16px",
                        color: "gray",
                        marginRight: "4px",
                      }}
                      icon={faEnvelope}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Comment */}
              <Box sx={{ marginTop: "50px" }}>Comment</Box>
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <Paper style={{ height: "100vh" }}>{"Helele "}</Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
