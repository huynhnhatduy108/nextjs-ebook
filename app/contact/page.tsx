import Image from "next/image";
import Link from "next/link";
import { Box, Container, Grid, Typography, Paper, TextField, Button } from "@mui/material";
import styles from "./page.module.css";
import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  subsets: ["vietnamese"],
});


export default function Contact() {
  //throw new Error('Not today!')
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
            Liên hệ
          </p>
          <Paper style={{  maxWidth:"700px", margin:"0px auto" }}>
            <div style={{width:"90%", margin:"0px auto"}}><input placeholder="Ten cua ban" className={`${styles.contact_input} ${lexendDeca.className}`} /></div>
            <div style={{width:"90%", margin:"0px auto"}}><input placeholder="Email" className={`${styles.contact_input} ${lexendDeca.className}`} /></div>
            <div style={{width:"90%", margin:"0px auto"}}><input placeholder="Tieu de" className={`${styles.contact_input} ${lexendDeca.className}`} /></div>
            <div style={{width:"90%", margin:"0px auto"}}><textarea placeholder="Noi dung" className={`${styles.contact_area} ${lexendDeca.className}`}/></div>
            <div style={{width:"90%", textAlign:"right", margin:"auto"}}> <Button className={`${styles.contact_btn} ${lexendDeca.className}`} variant="contained">Gui</Button></div>

          </Paper>
        </Box>
      </Container>
    </main>
  );
}
