import { Box, CardMedia, Container, Link, Typography } from "@mui/material";
import React from "react";

const styles = {
  containerFluid: {
    paddingTop: "140px",
    paddingBottom: "180px",
    backgroundColor: "#F4F4F4",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  container: {
    width: "1180px",
    margin: "0 auto",
    padding: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
  },
  exAppImg: {
    width: "700px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  roundSharp: {
    width: "515px",
    height: "515px",
    borderRadius: "50%",
    backgroundColor: "#d3c3fc",
    position: "relative",
    overflow: "hidden",
  },
  content: {
    width: "calc(100% - 748px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    fontSize: "50px",
    color: "#212121",
    fontFamily: "'Fraunces', serif",
    fontWeight: "500",
    lineHeight: "1.1",
    letterSpacing: "-0.01em",
    display: "inline",
  },
  subHeading: {
    fontSize: "16px",
    marginBottom: "20px",
    color: "#414141",
    marginTop: "16px",
    fontFamily: "'Arimo', sans-serif",
  },
  link: {
    fontSize: "17px",
    fontWeight: "500",
    marginBottom: "20px",
    color: "#868686",
    fontStyle: "italic",
    lineHeight: "22px",
  },
};

function ExperienceArea() {
  return (
    <>
      <Box className="container-fluid" style={styles.containerFluid}>
        <CardMedia
          component="img"
          image={require("../../assets/experienceArea/bell.png")}
          style={{
            width: "auto",
            position: "absolute",
            right: "40px",
            top: "40px",
            zIndex: "1",
          }}
          alt="Paella dish"
        ></CardMedia>
        <Container style={styles.container}>
          <CardMedia
            component="img"
            image={require("../../assets/experienceArea/dash_board.png")}
            style={{
              width: "auto",
              position: "absolute",
              left: "-38px",
              top: "32px",
              zIndex: "1",
            }}
            alt="Paella dish"
          ></CardMedia>
          <CardMedia
            component="img"
            image={require("../../assets/experienceArea/mobile.png")}
            style={{
              width: "auto",
              position: "absolute",
              left: "462px",
              top: "147px",
              zIndex: "1",
            }}
            alt="Paella dish"
          ></CardMedia>
          <Box className="ex-app-img" style={styles.exAppImg}>
            <CardMedia
              component="img"
              image={require("../../assets/experienceArea/zigzag-three.png")}
              style={{
                width: "auto",
                position: "absolute",
                bottom: "-155px",
              }}
              alt="Paella dish"
            ></CardMedia>
            <Box className="round-sharp" style={styles.roundSharp}>
              <CardMedia
                component="img"
                image={require("../../assets/experienceArea/app_bg.png")}
                alt="Paella dish"
              ></CardMedia>
            </Box>
          </Box>
          <Box className="content" style={styles.content}>
            <Typography sx={styles.heading}>
              We deliver the <br></br> better&nbsp;
              <Typography
                sx={{
                  display: "inline",
                  fontSize: "50px",
                  color: "#FC6B75",
                  fontFamily: "'Fraunces', serif",
                  position: "relative",
                  lineHeight: "1.1",
                  marginBottom: "20px",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    height: "2px",
                    backgroundColor: "#FC6B75",
                    bottom: "4px",
                  },
                }}
              >
                customer
              </Typography>
              <br></br>experiences .
            </Typography>
            <Typography sx={styles.subHeading}>
              Lorem Ipsum is simply dummy text of the printing and <br></br>
              typesetting industry. Lorem Ipsum has.
            </Typography>
            <Link sx={styles.link} color="inherit">
              Learn more
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ExperienceArea;
