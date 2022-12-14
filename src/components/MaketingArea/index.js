import { Box, CardMedia, Container, Link, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: {
      xs: "696px",
      sm: "720px",
      md: "1200px",
    },
    padding: "0 12px !important",
    position: "relative",
  },
  title: {
    maxWidth: "900px",
    marginTop: {
      xs: "130px",
      sm: "170px",
    },
    marginBottom: "18px",
    display: "inline-block",
    fontSize: {
      xs: "48px !important",
      sm: "48px !important",
      md: "80px !important",
    },
    fontWeight: "500",
    color: "#fff",
    fontFamily: "'Fraunces', serif",
    textAlign: "center",
    lineHeight: {
      xs: "1.2",
      sm: "72px",
      md: "96px",
    },
  },
  subTitle: {
    textAlign: "center",
    fontSize: {
      xs: "20px",
      sm: "20px",
      md: "24px",
    },
    color: "#fff",
    lineHeight: {
      xs: "30px",
      md: "30px",
    },
    fontFamily: "'Arimo', sans-serif",
    marginBottom: "24px",
  },
  buttonContained: {
    display: "flex",
    justifyContent: "center",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#FF824C",
    textDecoration: "none",
    padding: {
      xs: "8px 35px",
      sm: "8px 33px",
      md: "8px 35px",
    },
    lineHeight: "40px",
    borderRadius: "3px",
    alignItems: "center",
    transition: "all 0.3s",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e56934",
    },
    width: {
      xs: "100%",
      sm: "auto",
    },
    boxSizing: "border-box",
  },
  buttonText: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "18px",
    color: "#fff",
    textDecoration: "none",
    padding: {
      xs: "8px 35px",
      sm: "8px 33px",
      md: "8px 35px",
    },
    lineHeight: "40px",
    borderRadius: "3px",
    alignItems: "center",
    transition: "all 0.3s",
    cursor: "pointer",
    "&:hover": {
      color: "#e56934",
    },
    width: {
      xs: "100%",
      sm: "auto",
    },
    boxSizing: "border-box",
  },
  marketingImg: {
    position: "relative",
    padding: {
      xs: "0",
      sm: "0 50px",
    },
  },
  dashBoard: {
    margin: "0 auto",
    display: "block",
  },
  card1: {
    display: {
      xs: "none",
      sm: "block",
    },
    position: "absolute",
    width: {
      xs: "200px",
      md: "auto",
    },
    left: {
      xs: "-38px",
      md: "-400px",
    },
    top: {
      sm: "-40px",
      md: "-137px",
    },
  },
  card2: {
    display: {
      xs: "none",
      sm: "block",
    },
    position: "absolute",
    width: {
      xs: "200px",
      md: "auto",
    },
    right: {
      sm: "-100px",
      md: "-260px",
    },
    top: "-172px",
  },
};

function MaketingArea() {
  return (
    <>
      <Box
        className="container-fluid"
        sx={{ backgroundColor: "#212121", overflow: "hidden" }}
      >
        <Container sx={styles.container}>
          <CardMedia
            component="img"
            sx={{
              width: "auto",
              position: "absolute",
              left: "24px",
              top: "170px",
            }}
            image={require("../../assets/maketingArea/start.png")}
            alt="Paella dish"
          />
          <CardMedia
            component="img"
            sx={{
              width: "auto",
              position: "absolute",
              right: "24px",
              top: "200px",
            }}
            image={require("../../assets/maketingArea/flower.png")}
            alt="Paella dish"
          />
          <Typography sx={styles.title} className="title">
            Transform the way you think about&nbsp;
            <Typography
              sx={{
                display: "inline-block",
                fontSize: {
                  xs: "48px !important",
                  sm: "48px !important",
                  md: "80px !important",
                },
                color: "#FC6B75",
                fontFamily: "'Fraunces', serif",
                position: "relative",
                fontWeight: "500",
                lineHeight: {
                  xs: "1.2",
                  sm: "72px",
                  md: "96px",
                },

                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "3px",
                  backgroundColor: "#FC6B75",
                  bottom: {
                    xs: "10px",
                    sm: "17px",
                    md: "17px",
                  },
                },
              }}
            >
              marketing
            </Typography>
          </Typography>
          <Typography sx={styles.subTitle} className="subTitle">
            You said I'd feel better if I just worked hard without lifting my
            head up
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              alignItems: "center",
              marginTop: "24px",
              marginBottom: {
                xs: "20px",
                sm: "80px",
              },
              width: {
                xs: "100%",
                sm: "500px",
              },
            }}
          >
            <Link sx={styles.buttonContained} color="inherit">
              <ArrowDownwardIcon></ArrowDownwardIcon>
              Try for free
            </Link>
            <Link sx={styles.buttonText} color="inherit">
              <PlayArrowIcon></PlayArrowIcon>
              Watch video
            </Link>
          </Box>
          <Box sx={styles.marketingImg}>
            <CardMedia
              component="img"
              sx={styles.dashBoard}
              image={require("../../assets/maketingArea/dashbord_img.png")}
              alt="Paella dish"
            />
            <CardMedia
              component="img"
              sx={styles.card1}
              image={require("../../assets/maketingArea/card.png")}
              alt="Paella dish"
            />
            <CardMedia
              component="img"
              sx={styles.card2}
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
