import { CardMedia, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

const styles = {
  containerFluid: {
    padding: "0 60px",
    backgroundColor: "#f4f4f4",
  },
  board: {
    maxWidth: "100%",
    paddingTop: "140px",
    paddingBottom: "100px",
    margin: "0",
    backgroundColor: "#eaecf1",
    borderRadius: "10px",
    position: "relative",
  },
  container: {
    width: "1180px",
    margin: "0 auto",
    padding: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginTop: "20px",
    fontSize: "18px",
    color: "#494949",
    lineHeight: "30px",
    fontWeight: "400",
    fontFamily: "'Arimo', sans-serif",
  },
  featureList: {
    width: "calc(100% - 500px)",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  featureItem: {
    display: "flex",
    flexDirection: "column",
    width: "calc(50% - 50px)",
    marginLeft: "50px",
    marginBottom: "45px",
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
      <Box className="container-fluid" style={styles.containerFluid}>
        <Box style={styles.board}>
          <Container style={styles.container}>
            <Box
              sx={{
                width: "428px",
              }}
            >
              <Typography sx={styles.heading}>
                We offer&nbsp;
                <Typography
                  sx={{
                    display: "inline",
                    fontSize: "50px",
                    color: "#FC6B75",
                    fontFamily: "'Fraunces', serif",
                    position: "relative",
                    lineHeight: "1.1",
                    marginBottom: "20px",
                    fontWeight: "500",
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
                <br></br>that are unique only to us
              </Typography>
              <Typography sx={styles.subHeading}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text .
              </Typography>
            </Box>
            <Box container className="feature-list" style={styles.featureList}>
              {features.map((feature) => (
                <Box
                  item
                  xs={6}
                  className="feature-item"
                  style={styles.featureItem}
                >
                  <CardMedia
                    component="img"
                    image={require("../../assets/featureArea/" +
                      feature.img +
                      ".png")}
                    style={{
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
                    style={{
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
            style={{
              width: "auto",
              position: "absolute",
              bottom: "0",
              left: "0",
            }}
            alt="Paella dish"
          ></CardMedia>
          <CardMedia
            component="img"
            image={require("../../assets/featureArea/leaf_bottom.png")}
            style={{
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
            style={{
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
            style={{
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
