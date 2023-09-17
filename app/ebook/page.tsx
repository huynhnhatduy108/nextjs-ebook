import Image from "next/image";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import styles from "./page.module.css";
import Rating from "@mui/material/Rating";
import {
    faDownload,
    faEye
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useRouter } from "next/navigation";


const categories = [
  "Ẩm thực - Nấu ăn",
  "Học Ngoại Ngữ",
  "Khoa Học - Kỹ Thuật",
  "Kinh Tế - Quản Lý",
  "Nông - Lâm - Ngư",
  "Tài Liệu Học Tập",
  "Thư Viện Pháp Luật",
  "Triết Học",
  "Truyện Ma - Truyện Kinh Dị",
  "Truyện Tranh",
  "Văn Học Việt Nam",
  "Cổ Tích - Thần Thoại",
  "Hồi Ký - Tuỳ Bút",
  "Kiếm Hiệp - Tiên Hiệp",
];

const eBook = [
  1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const getBooks = async (page:number =1, page_size:number=20) => {
	try {
		const res = await fetch(`http://localhost:8000/ebook/?page=${1}&page_size=${20}`);
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};
const EbookPage = async ()=> {  


  const ebookPaging = await getBooks()
  const {items:ebooks, page, page_size, total_record, total_page} = ebookPaging;

  

  return (
    <main style={{ minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Box sx={{ margin: "50px 0px" }}>
          <Grid container spacing={2}>
            <Grid item lg={8} md={12} sm={12} xs={12}>
              {/* Ebook */}
              <Box sx={{}}>
                <Grid container spacing={2}>
                  {ebooks.length  && ebooks.map((ebook:any) => {
                    return (
                      <Grid item lg={3} md={3} sm={3} xs={6} key={ebook._id}>
                        <Paper className={styles.ebook}>
                          <Image
                            className={styles.ebook_image}
                            src={ebook.img_url}
                            alt={ebook.name}
                            width={100} height={100}
                          />
                          <p className={styles.ebook_name}>
                               {ebook.name}
                          </p>
                          <div className={styles.ebook_dowload_view}>
                            <div className={styles.ebook_dowload}>
                                <Rating max={1} value={0.7} precision={0.5} readOnly/>
                                <Typography style={{marginLeft:"5px", fontSize:'14px',color:"gray"}}>5/5</Typography>
                            </div>
                            <div className={styles.ebook_view}>
                                <FontAwesomeIcon icon={faEye} color="gray" fontSize="15px"/>
                                <Typography  style={{marginLeft:"5px", fontSize:'14px', color:"gray"}}>{ebook.views}</Typography>
                            </div>
                          </div>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
              {/* Pagination */}
              <Box
                sx={{
                  width: "100%",
                  position: "relative",
                  height: "100px",
                  marginTop: "20px",
                }}
              >
                <Pagination
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                  page={page}
                  count={total_page}
                  variant="outlined"
                  shape="rounded"
                  color="primary"
                />
              </Box>
            </Grid>
            {/* Category */}
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <Paper style={{ minHeight: "100vh", borderRadius: "5px" }}>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    padding: "13px 0px",
                    backgroundColor: "#1976d1",
                    borderTopRightRadius: "5px",
                    borderTopLeftRadius: "5px",
                    color: "white",
                    margin:"0px"
                  }}
                >
                  Danh mục sách
                </p>
                <ul style={{ margin: "0px", padding: "20px 20px" }}>
                  {categories.map((cate, index) => {
                    return (
                      <li
                        key={index}
                        style={{
                          listStyle: "none",
                          padding: "2px 0px",
                          display: "flex",
                          alignItems: "center",
                          fontSize:"14px",
                        }}
                      >
                        <Checkbox size="small" style={{}} />
                        <Link
                          href={"/"}
                          style={{ textDecoration: "none", color: "#1976d1", fontSize:"14px"  }}
                        >
                          {cate}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
}

export default EbookPage;

// export async function getStaticProps() {
//   const coffeeJson = await fetch('https://exampleapi.com/coffelist');
//    return {
//        props: {
//            coffeeJson
//        }
//    }
// }

