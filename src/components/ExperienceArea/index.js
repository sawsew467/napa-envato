import { Box, CardMedia, Container, Link, Typography } from "@mui/material";
import React from "react";

const styles = {
  containerFluid: {
    paddingTop: "140px",
    paddingBottom: {
      xs: "70px",
      md: "180px"
    },
    backgroundColor: "#F4F4F4",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    paddingLeft: {
      xs: "12px",
      md: "0",
    },
    paddingRight: {
      xs: "12px",
      md: "0",
    },
  },
  container: {
    width: {
      xs: "366px",
      sm: "696px",
      md: "1176px",
    },
    margin: "0 auto",
    padding: {
      xs: "0",
      sm: "0 12px !important",
    },
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    justifyContent: "space-between",
    position: "relative",
  },
  exAppImg: {
    width: {
      xs: "100%",
      sm: "700px",
    },
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  roundSharp: {
    width: {
      xs: "320px",
      sm: "515px",
    },
    height: {
      xs: "320px",
      sm: "515px",
    },
    borderRadius: "50%",
    backgroundColor: "#d3c3fc",
    position: "relative",
    zIndex: "1",
    overflow: "hidden",
  },
  content: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: {
      xs: "0",
      md: "120px",
    },
    width: {
      xs: "100%",
      md: "476px",
    },
  },
  heading: {
    marginTop: {
      xs: "30px",
      md: "0",
    },
    fontSize: {
      xs: "43px",
      sm: "43px",
      md: "50px",
    },
    lineHeight: "1.1",
    color: "#212121",
    fontFamily: "'Fraunces', serif",
    fontWeight: "500",
    letterSpacing: "-0.43px",
    display: "inline",
  },
  subHeading: {
    fontSize: "16px",
    lineHeight: "30px",
    color: "#414141",
    marginBottom: "17px",
    marginTop: "20px",
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
      <Box className="container-fluid" sx={styles.containerFluid}>
        <CardMedia
          component="img"
          image={require("../../assets/experienceArea/bell.png")}
          sx={{
            width: "auto",
            position: "absolute",
            right: "40px",
            top: "40px",
            zIndex: "1",
          }}
          alt="Paella dish"
        ></CardMedia>
        <Container sx={styles.container}>
          <CardMedia
            component="img"
            image={require("../../assets/experienceArea/dash_board.png")}
            sx={{
              width: {
                xs: "376px",
                sm: "auto",
              },
              position: "absolute",
              left: {
                xs: "-26px",
                sm: "-46px",
              },
              top: "32px",
              zIndex: "2",
            }}
            alt="Paella dish"
          ></CardMedia>
          <CardMedia
            component="img"
            image={require("../../assets/experienceArea/mobile.png")}
            sx={{
              width: {
                xs: "180px",
                sm: "auto",
              },
              position: "absolute",
              left: {
                xs: "167px",
                sm: "459px",
              },
              top: {
                xs: "33px",
                sm: "152px",
              },
              zIndex: "2",
            }}
            alt="Paella dish"
          ></CardMedia>
          <Box className="ex-app-img" sx={styles.exAppImg}>
            <CardMedia
              component="img"
              image={require("../../assets/experienceArea/zigzag-three.png")}
              sx={{
                width: "auto",
                position: "absolute",
                bottom: "-155px",
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
              alt="Paella dish"
            ></CardMedia>
            <Box className="round-sharp" sx={styles.roundSharp}>
              <CardMedia
                component="img"
                image={require("../../assets/experienceArea/app_bg.png")}
                alt="Paella dish"
              ></CardMedia>
            </Box>
          </Box>
          <Box className="content" sx={styles.content}>
            <Typography sx={styles.heading}>
              We deliver the better&nbsp;
              <Typography
                sx={{
                  display: "inline-block",
                  fontSize: {
                    xs: "43px",
                    sm: "43px",
                    md: "50px",
                  },
                  lineHeight: "1.1",
                  color: "#FC6B75",
                  fontFamily: "'Fraunces', serif",
                  position: "relative",
                  letterSpacing: "-0.43px",
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
              experiences .
            </Typography>
            <Typography sx={styles.subHeading}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has.
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
