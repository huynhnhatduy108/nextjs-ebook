import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
  Rating,
} from "@mui/material";
import {
  faComment,
  faEye,
  faEnvelope,
  faDownload,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./page.module.css";
import Comment from "@/component/comment";
import EbookSlick from "@/component/EbookSlick";
import EbookRelate from "@/component/EbookRelate";

import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});

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

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const metadata: Metadata = {
    title: slug,
    description: `This is the page of ${slug}`,
  };
  return metadata;
}

export default async function EbookDetail({ params: { slug } }: Params) {
  return (
    <main style={{ minHeight: "100vh" }}>
      <Container maxWidth="lg">
        {/* category */}
        <Box sx={{ margin: "50px 0px" }}>
          <Grid container spacing={2}>
            <Grid item lg={8} md={12} sm={12} xs={12}>
              {/* Info */}
              <Box>
                <Paper style={{ minHeight: "100vh", position: "relative" }}>
                  <Box className={styles.ebook_intro} sx={{ display: "flex" }}>
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
                        alt={"eboook thumnail"}
                        src="https://static.8cache.com/cover/o/eJzLyTDW1zULTa4wdYuyiA8I1A8zytT1cDIwzfDy1HeEgoC0bH1j78QU55DEcnMzRw-TwjwPf3MXT0en7NzMdJNMt8x033Rn53z9YgMAsFUYBA==/nha-gia-kim-cau-chuyen-mot-giac-mo.jpg"
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
                        Nha gia kim
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
                          Tony De Saulles
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
                          Khoa Học - Kỹ Thuật
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
                          Luot xem:
                        </p>
                        <p style={{ margin: "0px" }}>1238</p>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "10px",
                        }}
                      >
                        <p style={{ width: "100px", margin: "0px" }}>
                          Luot tai:
                        </p>
                        <p style={{ margin: "0px" }}>568</p>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "10px",
                        }}
                      >
                        <p style={{ width: "100px", margin: "0px" }}>Review:</p>
                        <Rating name="no-value" value={null} />
                        <p
                          style={{
                            marginLeft: "5px",
                            color: "gray",
                            margin: "0px",
                          }}
                        >
                          {`(${0})`}
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
                      Gioi thieu sach
                    </p>
                    <p>
                      Nếu như bạn mong muốn giao tiếp tiếng Anh thành thạo,
                      chuyên nghiệp từ 3 tới 6 tháng thì cuốn sách này sẽ làm
                      bạn thất vọng. Thực tế cho thấy chưa có ai mới bắt đầu học
                      tiếng Anh có thể giao tiếp được trôi chảy trong thời gian
                      từ 3 – 6 tháng. Đó là ảo tưởng. Nhưng nếu như bạn đang tìm
                      kiếm làm như thế nào có thể sử dụng tiếng Anh giao tiếp
                      thành thạo, chuyên nghiệp trong 1 năm tới thì xin chúc
                      mừng bạn. Tôi tin rằng những bí mật được tiết lộ trong
                      cuốn sách này sẽ làm bạn thỏa mãn với điều đó. Có rất
                      nhiều người học tiếng Anh lâu năm nhưng vẫn không giao
                      tiếp được. Có những người học tiếng Anh tại các trung tâm
                      khác nhau nhưng vẫn không giao tiếp được. Hầu hết chúng ta
                      học ngoại ngữ gần 12 năm cũng không giao tiếp được. Phải
                      chăng có điều gì đó mà những người chúng ta còn thiếu?
                      Cuốn sách này sẽ chỉ ra cho bạn thấy yếu tố then chốt để
                      thành công với tiếng Anh. Nó không phải là phương pháp
                      học, nó cũng không phải là môi trường, cũng không phải là
                      đối tác .. Tuy nhiên trong bất kỳ cuộc thi hay cuộc chơi
                      nào cũng vậy cả, thường chỉ có 5% là những người xuất sắc
                      vượt trội và đạt được những thành tích đáng ngưỡng mộ.
                      Chính vì vậy bạn có quyền lựa chọn, ở khu vực 95% hay 5%
                      là do bạn quyết định. Rất nhiều người đọc cuốn sách này.
                      Nhưng 95% mọi người không đọc hết nó và đó chính là cách
                      mà những người đó đã thất bại. Bởi vì cách mà họ bỏ cuộc
                      trong một cuộc thi nhỏ là đọc hết một cuốn sách này thì đó
                      cũng chính là cách họ bỏ cuộc trong hành trình học tiếng
                      anh. Nhưng tôi tin, bạn sẽ lựa chọn đứng vào top 5% những
                      người xuất sắc nhất, phải không nào? Nếu như bạn đã sẵn
                      sàng để sử dụng tiếng Anh trong 1 năm tới thì tôi tin chắc
                      rằng đây chính là quyển sách quan trọng nhất mà bạn cần
                      đọc. Hãy đọc, tin tưởng và thực hành. Tôi tin rằng bạn sẽ
                      đạt được kết quả kỳ diệu trong 1 năm tới.
                    </p>
                  </div>
                  {/* gap */}
                  <Box sx={{ height: "40px" }}></Box>
                  {/* share book  */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "20px",
                      left: "20px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <p>Chia se:</p>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginLeft: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          height: "34px",
                          minWidth: "45px",
                          backgroundColor: "#3b5998",
                          color: "white",
                          borderRadius: "4px",
                          marginRight: "10px",
                          position: "relative",
                        }}
                      >
                        <svg
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            color: "white",
                            transform: "translate(-50%,-50%)",
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="white"
                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                          />
                        </svg>
                      </Box>
                      <Box
                        sx={{
                          height: "34px",
                          minWidth: "45px",
                          backgroundColor: "#00acee",
                          color: "white",
                          borderRadius: "4px",
                          marginRight: "10px",
                          position: "relative",
                        }}
                      >
                        <svg
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            color: "white",
                            transform: "translate(-50%,-50%)",
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="white"
                            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                          />
                        </svg>
                      </Box>
                      <Box
                        sx={{
                          height: "34px",
                          minWidth: "45px",
                          backgroundColor: "#e60000",
                          color: "white",
                          borderRadius: "4px",
                          marginRight: "10px",
                          position: "relative",
                        }}
                      >
                        <svg
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            color: "white",
                            transform: "translate(-50%,-50%)",
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="white"
                            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                          />
                        </svg>
                      </Box>
                      <Box
                        sx={{
                          height: "34px",
                          minWidth: "45px",
                          backgroundColor: "#0a66c2",
                          color: "white",
                          borderRadius: "4px",
                          marginRight: "10px",
                          position: "relative",
                        }}
                      >
                        <svg
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            color: "white",
                            transform: "translate(-50%,-50%)",
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="white"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          />
                        </svg>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Box>
              {/* Comment */}
              <Box sx={{ marginTop: "50px" }}>
                <Comment />
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
                  {categories.map((cate) => {
                    return (
                      <li
                        style={{
                          listStyle: "none",
                          padding: "8px 0px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Link
                          href={"/"}
                          style={{
                            textDecoration: "none",
                            color: "#1976d1",
                            fontSize: "14px",
                          }}
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
        {/* <EbookSlick/> */}
        <EbookRelate />
      </Container>
    </main>
  );
}
