import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { Lexend_Deca } from "next/font/google";

interface IProps {
  posts: Array<any>;
  isLoading: boolean;
}

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

function PostHomePage(props: IProps) {
  const { posts = [], isLoading } = props;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: "20px",
        }}
      >
        <Typography
          fontSize="22px"
          fontWeight="bold"
          className={lexendDeca.className}
        >
          Review sách
        </Typography>
        <Link
          href="/review-sach"
          style={{
            cursor: "pointer",
            textDecoration: "none",
            color: "#1976d1",
          }}
        >
          {"Xem thêm >>"}
        </Link>
      </Box>
      <Grid container spacing={2}>
        {posts?.length &&
          posts.map((post) => {
            return (
              <Grid item lg={4} md={6} sm={6} xs={12} key={post}>
                <Paper className={styles.post} style={{}}>
                  <div className={styles.post_day}>
                    <p className={styles.post_day_date}>24</p>
                    <p className={styles.post_day_line}></p>
                    <p className={styles.post_day_date}>08</p>
                  </div>
                  <Image
                    className={styles.post_image}
                    src="https://blogapp-320606.web.app/static/media/sand-ads.d62cdd9da061919a9c45.webp"
                    width={100}
                    height={100}
                    alt={"post name"}
                  />
                  <p className={styles.post_title}>
                    Ripple là một hệ thống thanh toán tổng hợp theo thời gian
                    thực, mạng trao đổi tiền tệ và chuyển tiền được phát hành
                    vào năm 2012 bởi Ripple Labs Inc ( trước đó là Open Coin){" "}
                  </p>
                  <p className={styles.post_content}>
                    The APE Foundation là cơ quan quản lý của ApeCoin bao gồm
                    những người nắm giữ APE token trong ApeCoin DAO. Nhiệm vụ
                    của tổ chức này là quản lý các quyết định của ApeCoin DAO và
                    chịu trách nhiệm quản lý dự án cũng như các nhiệm vụ khác
                    nhằm đảm bảo ý tưởng của cộng đồng được hỗ trợ thực hiện.
                    The APE Foundation sử dụng Ecosystem Fund, được kiểm soát
                    bởi một ví multisig, để thanh toán các chi phí theo chỉ dẫn
                    của ApeCoin DAO và cung cấp cơ sở hạ tầng cho holder ApeCoin
                    tham gia quá trình quản trị của mình.
                  </p>
                  <div style={{ height: "20px" }}></div>
                </Paper>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default PostHomePage;
