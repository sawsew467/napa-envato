import { Box, CardMedia, Container, Link, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    width: "900px",
    marginTop: "170px",
    display: "inline",
    fontSize: "80px",
    color: "#fff",
    fontFamily: "'Fraunces', serif",
    textAlign: "center",
    lineHeight: "78px",
  },
  subTitle: {
    fontSize: "20px",
    color: "#fff",
    lineHeight: "78px",
    fontFamily: "'Arimo', sans-serif",
  },
  buttonContained: {
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#FF824C",
    textDecoration: "none",
    padding: "13px 33px",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    transition: "all 0.3s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e56934",
    },
  },
  buttonText: {
    fontSize: "18px",
    color: "#fff",
    textDecoration: "none",
    margin: "13px 33px",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    transition: "all 0.3s",
    cursor: "pointer",
    "&:hover": {
      color: "#e56934",
    },
  },
  marketingImg: {
    position: "relative",
    width: "1080px",
  },
  dashBoard: {
    margin: "0 auto",
    display: "block",
    width: "auto",
  },
  card1: {
    display: "block",
    position: "absolute",
    width: "200px",
    left: "-87px",
    top: "-42px",
  },
  card2: {
    display: "block",
    position: "absolute",
    width: "200px",
    right: "-48px",
    top: "-172px",
  },
};

function MaketingArea() {
  return (
    <>
      <Box className="container-fluid" style={{ backgroundColor: "#212121" }}>
        <Container style={styles.container}>
          <Typography style={styles.title} className="title">
            Transform the way you think about&nbsp;
            <Typography
              style={{
                display: "inline",
                fontSize: "80px",
                color: "#FC6B75",
                fontFamily: "'Fraunces', serif",
                position: "relative",
                lineHeight: "78px",

                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#FC6B75",
                  bottom: "18px",
                },
              }}
            >
              marketing
            </Typography>
          </Typography>
          <Typography style={styles.subTitle} className="subTitle">
            You said I'd feel better if I just worked hard without lifting my
            head up
          </Typography>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "24px",
              marginBottom: "80px",
            }}
          >
            <Link style={styles.buttonContained} color="inherit">
              <ArrowDownwardIcon></ArrowDownwardIcon>
              Try for free
            </Link>
            <Link style={styles.buttonText} color="inherit">
              <PlayArrowIcon></PlayArrowIcon>
              Watch video
            </Link>
          </Box>
          <Box style={styles.marketingImg}>
            <CardMedia
              component="img"
              style={styles.dashBoard}
              image={require("../../assets/maketingArea/dashbord_img.png")}
              alt="Paella dish"
            />
            <CardMedia
              component="img"
              style={styles.card1}
              image={require("../../assets/maketingArea/card.png")}
              alt="Paella dish"
            />
            <CardMedia
              component="img"
              style={styles.card2}
              image={require("../../assets/maketingArea/card-2.png")}
              alt="Paella dish"
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default MaketingArea;
