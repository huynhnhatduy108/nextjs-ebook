import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  Paper,
  Rating,
} from "@mui/material";
import {
  faDownload,
  faBookOpen,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./page.module.css";
import { htmlToPlainText } from "@/utils/helper";
import { faTag, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

// import Comment from "@/component/Comment";
import EbookNotFound from "@/component/Ebook/NotFound";
import EbookRelate from "@/component/Ebook/EbookRelate";
import { API_BASE_URL } from "@/utils/api";

const ShareIcon = dynamic(() => import("@/component/ShareIcon"));
const Comment = dynamic(() => import("@/component/Comment/Ebook").then((mod)=>mod.default));

type Params = {
  params: {
    slug: string;
  };
};


export async function generateMetadata({
  params: { slug },
}: Params){
  const res = await fetch(`${API_BASE_URL}/ebook/slug/${slug}`);
  const ebookDetail = await res.json();
  if (ebookDetail){
    const metadata: Metadata = {
      title: ebookDetail.name,
      description: `This is the page of ${slug}`,
    };
    return metadata;
  }
  return null;
  
}

const getBook = async (slug: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/ebook/slug/${slug}`);
    if (res.status === 200) return await res.json();
    return null;
  } catch (err) {
    console.log(err);
  }
};

const getCategories = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/category/full`);
    if (res.status === 200) return await res.json();
    return [];
  } catch (err) {
    console.log(err);
  }
};

export default async function EbookDetail({ params: { slug } }: Params) {
  const eBookDetail = await getBook(slug);
  const categories = await getCategories();

  console.log("bookDetail==>", eBookDetail);
  

  return (
    <main style={{ minHeight: "100vh" }}>
      {eBookDetail ? (
        <Container maxWidth="lg">
          {/* category */}
          <Box sx={{ margin: "50px 0px" }}>
            <Grid container spacing={2}>
              <Grid item lg={8} md={12} sm={12} xs={12}>
                {/* Info */}
                <Box>
                  <Paper style={{ minHeight: "100vh", position: "relative" }}>
                    <Box
                      className={styles.ebook_intro}
                      sx={{ display: "flex" }}
                    >
                      <Box
                        className={styles.ebook_image}
                        sx={{ width: "30%", padding: "20px" }}
                      >
                        <Image
                          className={styles.ebook_image_thumbnail}
                          style={{
                            borderRadius: "5px",
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                          }}
                          width={100}
                          height={100}
                          alt={eBookDetail?.name}
                          src={eBookDetail.img_url}
                        />
                      </Box>
                      <Box
                        className={styles.ebook_info}
                        sx={{ width: "70%", padding: "10px 20px 0px 0px" }}
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: "25px",
                            color: "#1976D1",
                            margin: "0px",
                          }}
                        >
                          {eBookDetail.name}
                        </p>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            marginTop: "10px",
                          }}
                        >
                          <p style={{ width: "100px", margin: "0px" }}>
                            Tác giả:
                          </p>
                          <p style={{ fontWeight: "500", margin: "0px" }}>
                            {eBookDetail.auth_name}
                          </p>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "10px",
                          }}
                        >
                          <p style={{ width: "100px", margin: "0px" }}>
                            Thể loại:
                          </p>
                          <p style={{ fontWeight: "500", margin: "0px" }}>
                            {eBookDetail.categories.length?eBookDetail.categories[0].name:"---"}
                          </p>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "10px",
                          }}
                        >
                          <p style={{ width: "100px", margin: "0px" }}>
                            Lượt xem:
                          </p>
                          <p style={{ margin: "0px" }}>{eBookDetail.views}</p>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "10px",
                          }}
                        >
                          <p style={{ width: "100px", margin: "0px" }}>
                            Lượt tải:
                          </p>
                          <p style={{ margin: "0px" }}>
                            {eBookDetail.downloads}
                          </p>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "10px",
                          }}
                        >
                          <p style={{ width: "100px", margin: "0px" }}>
                          Đánh giá:
                          </p>
                          <Rating name="no-value" value={eBookDetail.rate.average_rate??0} readOnly precision={0.5}/>
                          <p
                            style={{
                              marginLeft: "6px",
                              color: "gray",
                              margin: "0px",
                            }}
                          >
                            {`(${eBookDetail.rate.average_rate??0}/5)`}
                          </p>
                        </Box>
                        <Box
                          sx={{
                            padding: "10px 10px",
                            backgroundColor: "#14a288",
                            color: "white",
                            marginTop: "10px",
                            borderRadius: "4px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faDownload}
                            style={{ width: "60px", fontSize: "14px" }}
                          />
                          <p style={{ margin: "0px", fontSize: "14px" }}>
                            Vui lòng chọn định dạng file để tải hoặc đọc online.
                          </p>
                        </Box>

                        {/* download file */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                            marginTop: "10px",
                          }}
                        >
                          <div
                            className={styles.download_file}
                            style={{
                              backgroundColor: "#3379b7",
                            }}
                          >
                            PDF
                          </div>
                          <div
                            className={styles.download_file}
                            style={{
                              backgroundColor: "#c9302c",
                            }}
                          >
                            AWZ
                          </div>
                          <div
                            className={styles.download_file}
                            style={{
                              backgroundColor: "#5cb95b",
                            }}
                          >
                            EPUB
                          </div>
                          <div
                            className={styles.download_file}
                            style={{
                              backgroundColor: "#3379b7",
                            }}
                          >
                            MOBI
                          </div>
                          <div
                            className={styles.download_file}
                            style={{
                              backgroundColor: "#c9302c",
                            }}
                          >
                            PRC
                          </div>
                        </div>
                        {/* read file */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          <Link href={`/read-online/${eBookDetail.slug}`} style={{textDecoration:"none"}} >
                          <div
                            style={{
                              backgroundColor: "#f0ae4d",
                            }}
                            className={styles.download_file}
                          >
                            <FontAwesomeIcon
                              icon={faBookOpen}
                              style={{ marginRight: "5px" }}
                            />
                            Đọc online
                          </div>
                          </Link>
                        </div>

                      </Box>
                    </Box>
                    {/* Line */}
                    <Box
                      sx={{
                        width: "90%",
                        height: "1px",
                        backgroundColor: "gray",
                        margin: "30px auto 0px",
                      }}
                    ></Box>
                    {/* Intro content */}
                    <div
                      className={styles.ebook_content}
                      style={{ padding: "20px" }}
                    >
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "600",
                          textAlign: "left",
                          margin: "0px",
                        }}
                      >
                        Giới thiệu sách
                      </p>
                      <p>{htmlToPlainText(eBookDetail.intro)}</p>
                    </div>
                    {/* gap */}
                    <Box sx={{ height: "40px" }}></Box>
                    {/* share book  */}
                    <ShareIcon url="" title="" tags={[]}/>                
                  </Paper>
                </Box>
               
                {/* Comment */}
                <Box sx={{ marginTop: "50px" }}>
                  <Comment id={eBookDetail?._id} />
                </Box>
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <Paper style={{ borderRadius: "5px" }}>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      padding: "13px 0px",
                      backgroundColor: "#1976d1",
                      borderTopRightRadius: "5px",
                      borderTopLeftRadius: "5px",
                      color: "white",
                      margin: "0px",
                    }}
                  >
                    Danh mục sách
                  </p>
                  <ul style={{ margin: "0px", padding: "20px 40px" }}>
                    {categories.slice(0, 25).map((cate: any) => {
                      return (
                        <li
                          style={{
                            listStyle: "none",
                            padding: "8px 0px",
                            display: "flex",
                            alignItems: "center",
                          }}
                          key={cate._id}
                        >
                          <Link
                            href={`/ebook?categories=${cate.slug}`}
                            style={{
                              textDecoration: "none",
                              color: "#1976d1",
                              fontSize: "14px",
                              display:"flex",
                              alignItems:"center"
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faCaretRight}
                              style={{
                                marginRight: "10px",
                                color: "#1976d1",
                                fontSize: "16px",
                              }}
                            />
                            {cate.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <EbookRelate id={eBookDetail?._id} categoriesId={eBookDetail?.categories}/>
        </Container>
      ) : (
        <EbookNotFound />
      )}
    </main>
  );
}
