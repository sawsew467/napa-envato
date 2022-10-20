import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";

const styles = {
  containerFluid: {
    padding: {
      xs: "80px 0",
      sm: "140px 0",
    },
    backgroundColor: "#F4F4F4",
    // height: "154px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },
  subTitle: {
    fontSize: "25px",
    lineHeight: "30px",
    color: "#2C2C2C",
    textAlign: "center",
    fontFamily: "'Arimo', sans-serif",
    marginBottom: "70px",
  },
  clientContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    rowGap: "15px",
    justifyContent: "space-around",
    width: {
      sm: "696px",
      md: "1176px",
    },
    margin: "0 auto",
  },
  clientItem: {
    width: {
      xs: "50%",
      sm: "25%",
      md: "20%",
    },
    display: "flex",
    justifyContent: "center",
  },
};

function ClientLogoArea() {
  return (
    <>
      <Box className="container-fluid" sx={styles.containerFluid}>
        <CardMedia
          component="img"
          image={require("../../assets/clientLogoArea/star.png")}
          sx={{
            position: "absolute",
            objectFit: "none",
            width: "auto",
            left: {
              md: "120px"
            },
            top: {
              xs: "220px",
              sm: "210px",
              md: "152px"
            },
          }}
          alt="Paella dish"
        />
        <Typography className="sub-title" sx={styles.subTitle}>
          We take care of more than 100k customers
        </Typography>
        <Box className="client-container" sx={styles.clientContainer}>
          <Box className="client-item" sx={styles.clientItem}>
            <CardMedia
              component="img"
              image={require("../../assets/clientLogoArea/1.png")}
              sx={{
                objectFit: "none",
                width: "auto",
              }}
              alt="Paella dish"
            />
          </Box>
          <Box className="client-item" sx={styles.clientItem}>
            <CardMedia
              component="img"
              image={require("../../assets/clientLogoArea/2.png")}
              sx={{
                objectFit: "none",
                width: "auto",
              }}
              alt="Paella dish"
            />
          </Box>
          <Box className="client-item" sx={styles.clientItem}>
            <CardMedia
              component="img"
              image={require("../../assets/clientLogoArea/3.png")}
              sx={{
                objectFit: "none",
                width: "auto",
              }}
              alt="Paella dish"
            />
          </Box>
          <Box className="client-item" sx={styles.clientItem}>
            <CardMedia
              component="img"
              image={require("../../assets/clientLogoArea/6.png")}
              sx={{
                objectFit: "none",
                width: "auto",
              }}
              alt="Paella dish"
            />
          </Box>
          <Box className="client-item" sx={styles.clientItem}>
            <CardMedia
              component="img"
              image={require("../../assets/clientLogoArea/5.png")}
              sx={{
                objectFit: "none",
                width: "auto",
              }}
              alt="Paella dish"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ClientLogoArea;
