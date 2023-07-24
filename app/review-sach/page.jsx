import Image from "next/image";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";

const category = [
  1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
];

export default function ReviewPage() {
  return (
    <main style={{ minHeight:"100vh"}}>
      <Container maxWidth="lg">
        {/* category */}
        <Box sx={{ margin: "50px 0px"  }}>
          <Typography fontSize="20px" fontWeight="bold" align="center" marginBottom="30px">
            Review sach
          </Typography>
          <Grid container spacing={2}>
            {category?.length &&
              category.map((cate) => {
                return (
                  <Grid item lg={4} md={6} sm={6} xs={12}>
                    <Paper style={{ height: "200px" }}>{cate}</Paper>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Container>
    </main>
    )
}