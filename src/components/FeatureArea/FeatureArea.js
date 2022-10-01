import { CardMedia, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

const styles = {
  containerFluid: {
    padding: {
      xs: "0 15px",
      sm: "0 60px",
    },
    backgroundColor: "#f4f4f4",
  },
  board: {
    maxWidth: "100%",
    paddingTop: {
      xs: "80px",
      md: "140px",
    },
    paddingBottom: {
      sm: "50px",
      md: "100px",
    },
    margin: "0",
    backgroundColor: "#eaecf1",
    borderRadius: "10px",
    position: "relative",
  },
  container: {
    width: {
      xs: "366px",
      sm: "674px",
      md: "1176px",
    },
    margin: "0 auto",
    padding: {
      xs: "0 12px",
      sm: "0 !important",
    },
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    justifyContent: "space-between",
  },
  heading: {
    fontSize: {
      xs: "44px",
      sm: "50px",
    },
    color: "#212121",
    fontFamily: "'Fraunces', serif",
    fontWeight: "600",
    lineHeight: "60px",
    letterSpacing: "-0.5px",
    display: "inline",
  },
  subHeading: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#494949",
    lineHeight: "30px",
    fontWeight: "400",
    fontFamily: "'Arimo', sans-serif",
  },
  featureList: {
    width: {
      xs: "100%",
      md: "calc(100% - 500px)",
    },
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: "15px",
    marginTop: {
      xs: "75px",
      md: "0px",
    },
  },
  featureItem: {
    display: "flex",
    flexDirection: "column",
    width: {
      xs: "100%",
      sm: "calc(50% - 50px)",
    },
    marginLeft: {
      xs: "0",
      md: "50px",
    },
    marginBottom: "30px",
  },
};

function FeatureArea() {
  const features = [
    {
      img: "flower",
      title: "Reliable",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
    {
      img: "flexible",
      title: "Reliable",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
    {
      img: "Union",
      title: "Reliable",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
    {
      img: "scalable",
      title: "Reliable",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
  ];
  return (
    <>
      <Box className="container-fluid" sx={styles.containerFluid}>
        <Box sx={styles.board}>
          <Container sx={styles.container}>
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "476px",
                },
              }}
            >
              <Typography sx={styles.heading}>
                We offer&nbsp;
                <Typography
                  sx={{
                    display: "inline",
                    fontSize: {
                      xs: "44px",
                      sm: "50px",
                    },
                    color: "#FC6B75",
                    fontFamily: "'Fraunces', serif",
                    position: "relative",
                    lineHeight: "60px",
                    marginBottom: "20px",
                    fontWeight: "600",
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
                  benefits
                </Typography>
                &nbsp;that are unique only to us
              </Typography>
              <Typography sx={styles.subHeading}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text .
              </Typography>
            </Box>
            <Box container className="feature-list" sx={styles.featureList}>
              {features.map((feature, index) => (
                <Box
                  item
                  key={index}
                  xs={6}
                  className="feature-item"
                  sx={styles.featureItem}
                >
                  <CardMedia
                    component="img"
                    image={require("../../assets/featureArea/" +
                      feature.img +
                      ".png")}
                    sx={{
                      width: "fit-content",
                    }}
                    alt="Paella dish"
                  ></CardMedia>
                  <Typography
                    sx={{
                      fontSize: "22px",
                      marginTop: "15px",
                      marginBottom: "8px",
                      fontFamily: "'Arimo', sans-serif",
                    }}
                  >
                    Reliable
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      marginBottom: "16px",
                      fontFamily: "'Arimo', sans-serif",
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting.
                  </Typography>
                  <ArrowForwardIcon
                    sx={{
                      width: "20px",
                      height: "20px",
                    }}
                  ></ArrowForwardIcon>
                </Box>
              ))}
            </Box>
          </Container>
          <CardMedia
            component="img"
            image={require("../../assets/featureArea/success_img.png")}
            sx={{
              width: "auto",
              position: "absolute",
              bottom: "0",
              left: "0",
              display: {
                xs: "none",
                md: "block",
              },
            }}
            alt="Paella dish"
          ></CardMedia>
          <CardMedia
            component="img"
            image={require("../../assets/featureArea/leaf_bottom.png")}
            sx={{
              width: "auto",
              position: "absolute",
              bottom: "0",
              right: "0",
            }}
            alt="Paella dish"
          ></CardMedia>
          <CardMedia
            component="img"
            image={require("../../assets/featureArea/leaf_top.png")}
            sx={{
              width: "auto",
              position: "absolute",
              top: "0",
              right: "0",
            }}
            alt="Paella dish"
          ></CardMedia>
          <CardMedia
            component="img"
            image={require("../../assets/featureArea/dot.png")}
            sx={{
              width: "auto",
              position: "absolute",
              bottom: "125px",
              left: "35%",
            }}
            alt="Paella dish"
          ></CardMedia>
        </Box>
      </Box>
    </>
  );
}

export default FeatureArea;
