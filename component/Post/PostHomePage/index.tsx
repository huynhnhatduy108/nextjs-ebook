import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { Lexend_Deca } from "next/font/google";
import { getDay, getMonth, htmlToPlainText } from "@/utils/helper";

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
        {posts.map((post) => {
          return (
            <Grid item lg={4} md={6} sm={6} xs={12} key={post._id}>
               <Link
                  href={`/review-sach/${post.slug}`}
                  style={{textDecoration: "none" }}
                >
              <Paper className={styles.post} style={{}}>
                <div className={styles.post_day}>
                  <p className={styles.post_day_date}>{getDay(post.updated_at)}</p>
                  <p className={styles.post_day_line}></p>
                  <p className={styles.post_day_date}>{getMonth(post.updated_at)}</p>
                </div>
                <Image
                  className={styles.post_image}
                  src={post.thumbnail}
                  width={100}
                  height={100}
                  alt={post.name}
                />
                <p className={styles.post_title}>
                  {post.name}
                </p>
                <p className={styles.post_content}>
                  {htmlToPlainText(post.content)}
                </p>
                <div style={{ height: "20px" }}></div>
              </Paper>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default PostHomePage;
