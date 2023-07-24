import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";

const posts = [1, 2, 3, 4, 5, 6,];

export default function Home() {
  return (
    <main style={{minHeight:"100vh"}}>
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
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
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
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
            <Grid item lg={2} md={3} sm={3} xs={4}>
              <Paper style={{ height: "220px" }}>1</Paper>
            </Grid>
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
