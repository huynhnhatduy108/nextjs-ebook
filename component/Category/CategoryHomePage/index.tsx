import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { Lexend_Deca } from "next/font/google";

interface IProps {
  categories: Array<any>;
  isLoading: boolean;

}

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

function CategoryHomePage(props: IProps){
  const {categories=[], isLoading}= props;

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
          Danh mục nổi bật
        </Typography>
        <Link
          href="/category"
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
        {categories?.length &&
          categories.map((cate: any) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={6} key={cate._id}>
                <div className={styles.category} style={{}}>
                  <Image
                    className={styles.category_image}
                    src="https://vnn-imgs-f.vgcloud.vn/2020/01/18/13/nhung-cuon-sach-dang-nghien-ngam-cho-fan-trinh-tham-mua-tet.jpg"
                    width={100}
                    height={100}
                    alt={cate.name}
                  />
                  <div className={styles.category_intro}>
                    <p className={styles.category_name}>{cate.name}</p>
                  </div>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default CategoryHomePage;
