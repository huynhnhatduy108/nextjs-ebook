import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { Lexend_Deca } from "next/font/google";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@mui/material/Rating";
import { abbreviateNumber } from "@/utils/helper";

interface IProps {
  ebooks: Array<any>;
  isLoading: boolean;
}

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

function EbookHomePage(props: IProps) {
  const { ebooks = [], isLoading } = props;

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
          Sách được đọc nhiều nhất
        </Typography>
        <Link
          href="/ebook"
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
        {ebooks?.length &&
          ebooks?.map((ebook: any) => {
            return (
              <Grid item lg={2} md={3} sm={3} xs={6} key={ebook._id}>
                <Link
                  href={`/ebook/${ebook.slug}`}
                  style={{textDecoration: "none" }}
                >
                  <Paper className={styles.ebook}>
                    <Image
                      className={styles.ebook_image}
                      src={ebook.img_url}
                      alt={ebook.name}
                      width={100}
                      height={100}
                    />
                    <p className={styles.ebook_name}>{ebook.name}</p>
                    <div className={styles.ebook_dowload_view}>
                      <div className={styles.ebook_dowload}>
                        <Rating max={1} value={ebook.average_rate??0} precision={0.2} readOnly />
                        <Typography
                          style={{
                            marginLeft: "5px",
                            fontSize: "14px",
                            color: "gray",
                          }}
                        >
                         {`${ebook.average_rate}/5`}
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
                          {abbreviateNumber(ebook.views)}
                        </Typography>
                      </div>
                    </div>
                  </Paper>
                </Link>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default EbookHomePage;
