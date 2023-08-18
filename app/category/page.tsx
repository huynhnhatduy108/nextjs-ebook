import Image from "next/image";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import styles from "./page.module.css";

const categories = [
  "Ẩm thực - Nấu ăn",
  "Học Ngoại Ngữ",
  "Khoa Học - Kỹ Thuật",
  "Kinh Tế - Quản Lý",
  "Nông - Lâm - Ngư",
  "Tài Liệu Học Tập",
  "Thư Viện Pháp Luật",
  "Triết Học",
  "Truyện Ma - Truyện Kinh Dị Truyện Ma - Truyện Kinh Dị",
  "Truyện Tran Truyện Ma",
  "Văn Học Việt Nam",
  "Cổ Tích - Thần Thoại",
  "Hồi Ký - Tuỳ Bút",
  "Kiếm Hiệp - Tiên Hiệp",
  "Ẩm thực - Nấu ăn",
  "Học Ngoại Ngữ",
  "Khoa Học - Kỹ Thuật",
  "Kinh Tế - Quản Lý",
  "Nông - Lâm - Ngư",
  "Tài Liệu Học Tập",
  "Thư Viện Pháp Luật",
  "Triết Học",
  "Truyện Ma - Truyện Kinh Dị  Truyện Kinh Dị Truyện Ma - Truyện Kinh Dị",
  "Truyện Tranh",
  "Văn Học Việt Nam",
  "Cổ Tích - Thần Thoại",
  "Hồi Ký - Tuỳ Bút",
  "Kiếm Hiệp - Tiên Hiệp",
];

export default function CategoryPage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* category */}
        <Box sx={{ margin: "50px 0px" }}>
          <p
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "center",
              margin: "0px 0px 30px 0px ",
            }}
          >
            Danh mục sach
          </p>
          <Grid container spacing={2}>
            {categories?.length &&
              categories.map((cate, index) => {
                return (
                  <Grid item lg={3} md={4} sm={6} xs={6} key={index}>
                    <Paper className={styles.category} style={{}}>
                      <p className={styles.category_name}>{cate}</p>
                    </Paper>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
