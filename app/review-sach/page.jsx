import Image from "next/image";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper, Button } from "@mui/material";
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
            marginBottom="30px"
          >
            Review sach
          </Typography>
          <Grid container spacing={2}>
            {posts?.length &&
              posts.map((post) => {
                return (
                  <Grid item lg={4} md={6} sm={6} xs={12} key={cate}>
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
          <Box style={{textAlign:"center", marginTop:"30px"}}>
             <Button variant="contained" >Xem them</Button>
          </Box>
        </Box>
      </Container>
    </main>
  );
}
