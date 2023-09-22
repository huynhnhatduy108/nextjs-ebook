import Image from "next/image";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import styles from "./page.module.css";

const getCategory = async () => {
  try {
    const res = await fetch(`http://localhost:8000/category/full`);
    if (res.status === 200) return await res.json();
    return [];
  } catch (err) {
    console.log(err);
  }
};

export default async function CategoryPage() {
  const categories = await getCategory();

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
            Danh mục sách
          </p>
          <Grid container spacing={2}>
            {categories?.length &&
              categories.map((cate: any) => {
                return (
                  <Grid item lg={3} md={4} sm={6} xs={6} key={cate._id}>
                    <Link href={`/ebook?categories=${cate.slug}`} style={{textDecoration:"none"}}>
                      <Paper className={styles.category} style={{}}>
                        <p className={styles.category_name}>{cate.name}</p>
                      </Paper>
                    </Link>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
