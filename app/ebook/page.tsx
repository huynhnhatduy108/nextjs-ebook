"use client";
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import styles from "./page.module.css";
import Rating from "@mui/material/Rating";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { covertQuerySearch, splitString } from "@/utils/helper";

const ebookState = {
  items: [],
  page: 1,
  page_size: 20,
  total_record: 0,
  total_page: 0,
};

const EbookPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = searchParams?.get("page")
    ? Number(searchParams?.get("page"))
    : 1;
  const keyword = searchParams?.get("keyword") ?? "";
  const categories = searchParams?.get("categories") ?? "";

  const [ebookData, setEbookData] = useState({ ...ebookState });
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    if (page) {
      const getBooks = async (
        page: number = 1,
        page_size: number = 20,
        keyword: string = "",
        categories: string = ""
      ) => {
        try {
          const res = await fetch(
            `http://localhost:8000/ebook/?page=${page}&page_size=${page_size}&keyword=${keyword}&categories=${categories}`
          );
          if (res.status === 200) {
            const data = await res.json();
            setEbookData({ ...data });
          }
        } catch (err) {
          console.log("getBooks", err);
        }
      };

      const getCategories = async () => {
        try {
          const res = await fetch(`http://localhost:8000/category/full`);
          if (res.status === 200) {
            const data = await res.json();
            setCategoryData(data);
          }
        } catch (err) {
          console.log("getCategories", err);
        }
      };
      getBooks(page, 20, keyword, categories);
      getCategories();
    }
  }, [page, keyword, categories]);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    const path = covertQuerySearch({ page, keyword });
    router.replace(path);
  };

  const handleChangeCategory = (slug: string) => {
    if (splitString(categories).includes(slug)) {
      const newCateParams = splitString(categories).filter(
        (item: string) => item != slug
      );
      const path = covertQuerySearch({
        page,
        keyword,
        categories: newCateParams,
      });
      router.replace(path);
    } else {
      const newCateParams = categories + "," + slug;
      const path = covertQuerySearch({
        page,
        keyword,
        categories: newCateParams,
      });
      router.replace(path);
    }
  };

  return (
    <main style={{ minHeight: "100vh" }}>
      <Container maxWidth="lg">
        <Box sx={{ margin: "50px 0px" }}>
          <Grid container spacing={2}>
            <Grid item lg={8} md={12} sm={12} xs={12}>
              {/* Ebook */}
              <Box sx={{}}>
                <Grid container spacing={2}>
                  {ebookData.items.length
                    ? ebookData.items.map((ebook: any) => {
                        return (
                          <Grid
                            item
                            lg={3}
                            md={3}
                            sm={3}
                            xs={6}
                            key={ebook._id}
                          >
                            <Paper
                              className={styles.ebook}
                              onClick={() => router.push(`ebook/${ebook.slug}`)}
                            >
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
                                  <Rating
                                    max={1}
                                    value={0.7}
                                    precision={0.5}
                                    readOnly
                                  />
                                  <Typography
                                    style={{
                                      marginLeft: "5px",
                                      fontSize: "14px",
                                      color: "gray",
                                    }}
                                  >
                                    5/5
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
                                    {ebook.views}
                                  </Typography>
                                </div>
                              </div>
                            </Paper>
                          </Grid>
                        );
                      })
                    : ""}
                </Grid>
              </Box>
              {/* Pagination */}
              {ebookData.total_page > 1 ? (
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
                    onChange={handleChangePage}
                    page={ebookData.page}
                    count={ebookData.total_page}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                  />
                </Box>
              ) : (
                ""
              )}
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
                    margin: "0px",
                  }}
                >
                  Danh mục sách
                </p>
                <ul style={{ margin: "0px", padding: "20px 20px" }}>
                  {categoryData.slice(0, 25).map((cate: any) => {
                    return (
                      <li
                        key={cate._id}
                        style={{
                          listStyle: "none",
                          padding: "2px 0px",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "14px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleChangeCategory(cate.slug)}
                      >
                        <Checkbox
                          size="small"
                          checked={splitString(categories).includes(cate.slug)}
                        />
                        <div
                          style={{
                            textDecoration: "none",
                            color: "#1976d1",
                            fontSize: "14px",
                          }}
                        >
                          {cate.name}
                        </div>
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
};

export default EbookPage;
