import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import {
  faDownload,
  faEye
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@mui/material/Rating";

const posts = [1, 2, 3, 4, 5, 6];
const ebooks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* Last test book */}
        <Box sx={{ margin: "20px 0px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "20px",
            }}
          >
            <Typography fontSize="20px" fontWeight="bold">
              Sach moi cap nhat
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
                          src="https://manybooks.net/sites/default/files/styles/220x330sc/public/2023-08/51NmhibPg%2BL.jpg?itok=AUurEj_q"
                          alt="Celestial Magic"
                        />
                        <p className={styles.ebook_name}>
                          OpenCoin được đổi tên thành Ripple Labs, sau đó được
                          đổi tên thành Ripple vào năm 2015.
                        </p>
                        <div className={styles.ebook_dowload_view}>
                          <div className={styles.ebook_dowload}>
                              <Rating max={1} value={0.7} precision={0.5} readOnly/>
                              <Typography style={{marginLeft:"5px", fontSize:'14px',color:"gray"}}>5/5</Typography>
                          </div>
                          <div className={styles.ebook_view}>
                              <FontAwesomeIcon icon={faEye} color="gray" fontSize="15px"/>
                              <Typography  style={{marginLeft:"5px", fontSize:'14px', color:"gray"}}>100</Typography>
                          </div>
                        </div>
                      </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* category */}
        <Box sx={{ margin: "20px 0px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "20px",
            }}
          >
            <Typography fontSize="20px" fontWeight="bold">
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
            <Grid item lg={3} md={4} sm={6} xs={6}>
              <Paper style={{ height: "120px" }}>1</Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={6}>
              <Paper style={{ height: "120px" }}>2</Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={6}>
              <Paper style={{ height: "120px" }}>3</Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={6}>
              <Paper style={{ height: "120px" }}>3</Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={6}>
              <Paper style={{ height: "120px" }}>5</Paper>
            </Grid>

            <Grid item lg={3} md={4} sm={6} xs={6}>
              <Paper style={{ height: "120px" }}>5</Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={6}>
              <Paper style={{ height: "120px" }}>7</Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={6}>
              <Paper style={{ height: "120px" }}>8</Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={6}>
              <Paper style={{ height: "120px" }}>1</Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={6}>
              <Paper style={{ height: "120px" }}>2</Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={6}>
              <Paper style={{ height: "120px" }}>3</Paper>
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={6}>
              <Paper style={{ height: "120px" }}>3</Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Last test book */}
        <Box sx={{ margin: "20px 0px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "20px",
            }}
          >
            <Typography fontSize="20px" fontWeight="bold">
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
                          OpenCoin được đổi tên thành Ripple Labs, sau đó được
                          đổi tên thành Ripple vào năm 2015.
                        </p>
                        <div className={styles.ebook_dowload_view}>
                          <div className={styles.ebook_dowload}>
                              <Rating max={1} value={0.7} precision={0.5} readOnly/>
                              <Typography style={{marginLeft:"5px", fontSize:'14px',color:"gray"}}>5/5</Typography>
                          </div>
                          <div className={styles.ebook_view}>
                              <FontAwesomeIcon icon={faEye} color="gray" fontSize="15px"/>
                              <Typography  style={{marginLeft:"5px", fontSize:'14px', color:"gray"}}>100</Typography>
                          </div>
                        </div>
                      </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Review book */}
        <Box sx={{ margin: "20px 0px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: "20px",
            }}
          >
            <Typography fontSize="20px" fontWeight="bold">
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
            {posts.map((post) => {
              return (
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <Paper style={{ height: "220px" }}>{post}</Paper>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
