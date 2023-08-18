import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@mui/material/Rating";
import { Lexend_Deca } from "next/font/google";

const posts = [1, 2, 3, 4, 5, 6];
const ebooks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13,14,15,16,17,18,19,20,21,22,23,24];
const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11 ,12];


const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});



export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Container maxWidth="lg">

        {/* category */}
        <div className={styles.section}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "20px",
            }}
          >
            <Typography fontSize="22px"  fontWeight="bold" className={lexendDeca.className} >
              Danh mục nổi bật
            </Typography>
            <Link
              href="/"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#1976d1",
              }}
            >
              {"Xem them >>"}
            </Link>
          </Box>
          <Grid container spacing={2}>
            {categories?.length &&
              categories.map((cate) => {
                return (
                  <Grid item lg={3} md={4} sm={6} xs={6} key={cate}>
                    <div className={styles.category} style={{  }}>
                      <img  className={styles.category_image} src="https://bloganchoi.com/wp-content/uploads/2020/07/tieu-thuyet-trinh-tham-viet-nam-0.jpg"/>
                      <div className={styles.category_intro}>
                        <p className={styles.category_name}>{"Danh mục nổi bật"}</p>
                      </div>
                    </div>
                  </Grid>
                );
              })}
           
          </Grid>
        </div>

        {/* Last test book */}
        <div className={styles.section}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "20px",
            }}
          >
            <Typography fontSize="22px"  fontWeight="bold" className={lexendDeca.className} >
              Sach duoc doc nhieu nhat
            </Typography>
            <Link
              href="/"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#1976d1",
              }}
            >
              {"Xem them >>"}
            </Link>
          </Box>
          <Grid container spacing={2}>
            {ebooks.map((book) => {
              return (
                <Grid item lg={2} md={3} sm={3} xs={6} key={book}>
                  <Paper className={styles.ebook}>
                    <img
                      className={styles.ebook_image}
                      src="https://static.8cache.com/cover/o/eJzLyTDW1zULTa4wdYuyiA8I1A8zytT1cDIwzfDy1HeEgoC0bH1j78QU55DEcnMzRw-TwjwPf3MXT0en7NzMdJNMt8x033Rn53z9YgMAsFUYBA==/nha-gia-kim-cau-chuyen-mot-giac-mo.jpg"
                      alt="Celestial Magic"
                    />
                    <p className={styles.ebook_name}>
                      OpenCoin được đổi tên thành Ripple Labs, sau đó được đổi
                      tên thành Ripple vào năm 2015.
                    </p>
                    <div className={styles.ebook_dowload_view}>
                      <div className={styles.ebook_dowload}>
                        <Rating max={1} value={0.7} precision={0.5} readOnly />
                        <Typography
                          style={{
                            marginLeft: "5px",
                            fontSize: "14px",
                            color: "gray",
                          }}
                        >
                          5/5
                        </Typography>
                      </div>
                      <div className={styles.ebook_view}>
                        <FontAwesomeIcon
                          icon={faEye}
                          color="gray"
                          fontSize="15px"
                        />
                        <Typography
                          style={{
                            marginLeft: "5px",
                            fontSize: "14px",
                            color: "gray",
                          }}
                        >
                          100
                        </Typography>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </div>

        {/* Review book */}
        <div className={styles.section} style={{margin:"70px 0px 100px"}}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "20px",
            }}
          >
            <Typography fontSize="22px"  fontWeight="bold" className={lexendDeca.className} >
              Review sach
            </Typography>
            <Link
              href="/review-sach"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#1976d1",
              }}
            >
              {"Xem them >>"}
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
                        The APE Foundation là cơ quan quản lý của ApeCoin bao
                        gồm những người nắm giữ APE token trong ApeCoin DAO.
                        Nhiệm vụ của tổ chức này là quản lý các quyết định của
                        ApeCoin DAO và chịu trách nhiệm quản lý dự án cũng như
                        các nhiệm vụ khác nhằm đảm bảo ý tưởng của cộng đồng
                        được hỗ trợ thực hiện. The APE Foundation sử dụng
                        Ecosystem Fund, được kiểm soát bởi một ví multisig, để
                        thanh toán các chi phí theo chỉ dẫn của ApeCoin DAO và
                        cung cấp cơ sở hạ tầng cho holder ApeCoin tham gia quá
                        trình quản trị của mình.
                      </p>
                      <div style={{ height: "20px" }}></div>
                    </Paper>
                  </Grid>
                );
              })}
          </Grid>
        </div>
      </Container>
    </main>
  );
}
