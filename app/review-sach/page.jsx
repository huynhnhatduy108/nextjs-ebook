import Image from "next/image";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper, Button, Pagination, InputBase } from "@mui/material";
import {
  faMagnifyingGlass, 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./page.module.css";


const posts = [
  1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
];

export default function ReviewPage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* category */}
        <Box sx={{ margin: "50px 0px" }}>
          <Typography
            fontSize="20px"
            fontWeight="bold"
            align="center"
            // marginBottom="0px"
          >
            Review sach
          </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "45px",
                borderRadius: "5px",
                // backgroundColor: "#448ad9",
                margin:"40px 0px",
                // border:"1px solid gray",
                boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);"
              }}
            >
              <InputBase
                sx={{
                  flex: 1,
                  color: "gray",
                  height: "45px",
                  paddingLeft: "15px",
                  borderRadius: "5px",
                }}
                placeholder="Search..."
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                fontSize="20px"
                color="gray"
                width="40px"
                height="40px"
                style={{
                  cursor: "pointer",
                }}
              />
            </Box>

          <Grid container spacing={2}>
            {posts?.length &&
              posts.map((post) => {
                return (
                  <Grid item lg={4} md={6} sm={6} xs={12} key={post}>
                    <Paper className={styles.post} style={{ }}>
                      <div className={styles.post_day}>
                        <p className={styles.post_day_date}>24</p>
                        <p className={styles.post_day_line}></p>
                        <p className={styles.post_day_date}>08</p>

                      </div>
                      <img
                        className={styles.post_image}
                        src="https://blogapp-320606.web.app/static/media/sand-ads.d62cdd9da061919a9c45.webp"
                      />
                      <p className={styles.post_title}>
                        Ripple là một hệ thống thanh toán tổng hợp theo thời
                        gian thực, mạng trao đổi tiền tệ và chuyển tiền được
                        phát hành vào năm 2012 bởi Ripple Labs Inc ( trước đó là
                        Open Coin){" "}
                      </p>
                      <p className={styles.post_content}>
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
                      <div style={{height:"20px"}}></div>
                    </Paper>
                  </Grid>
                );
              })}
          </Grid>
          <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  height: "100px",
                  marginTop: "20px",
                }}
              >
                <Pagination
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                  count={10}
                  variant="outlined"
                  shape="rounded"
                  color="primary"
                />
              </Box>
        </Box>
      </Container>
    </main>
  );
}
