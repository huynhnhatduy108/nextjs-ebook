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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                <Paper style={{ height: "100vh" }}>
                  <Box sx={{ display: "flex" }}>
                    <Box sx={{ width: "30%", padding: "20px" }}>
                      <img
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        src="https://static.8cache.com/cover/o/eJzLyTDW1zULTa4wdYuyiA8I1A8zytT1cDIwzfDy1HeEgoC0bH1j78QU55DEcnMzRw-TwjwPf3MXT0en7NzMdJNMt8x033Rn53z9YgMAsFUYBA==/nha-gia-kim-cau-chuyen-mot-giac-mo.jpg"
                      />
                    </Box>
                    <Box sx={{ flex: 1, padding: "10px 0px" }}>
                      <Typography
                        style={{
                          fontWeight: "bold",
                          fontSize: "25px",
                          color: "#1976D1",
                        }}
                      >
                        Nha gia kim
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography style={{}}>Tác giả:</Typography>
                        <Typography
                          style={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          Tony De Saulles
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography style={{}}>Thể loại:</Typography>
                        <Typography
                          style={{ fontWeight: "bold", marginLeft: "10px" }}
                        >
                          Khoa Học - Kỹ Thuật
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography style={{}}>Review:</Typography>
                        <Rating name="no-value" value={null} />
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Box
                          sx={{
                            padding: "8px 15px",
                            backgroundColor: "#1976D1",
                            color: "white",
                            borderRadius:"5px"
                          }}
                        >
                          PDF
                        </Box>
                        <Box
                          sx={{
                            padding: "8px 15px",
                            backgroundColor: "red",
                            color: "white",
                            borderRadius:"5px",
                            marginLeft:"15px"

                          }}
                        >
                          Read Online
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Paper>
              </Box>
              {/* Comment */}
              <Box sx={{ marginTop: "50px" }}>Comment</Box>
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <Paper style={{ height: "100vh" }}>{"Helele "}</Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </main>
  );
}
