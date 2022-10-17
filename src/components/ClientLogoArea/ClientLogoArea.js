import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";

const styles = {
  containerFluid: {
    padding: "140px 0",
    backgroundColor: "#F4F4F4",
    height: "154px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  subTitle: {
    fontSize: "25px",
    textAlign: "center",
    fontFamily: "'Arimo', sans-serif",
  },
  clientContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "1176px",
    margin: "0 auto",
  },
  clientItem: {
    width: "25%",
    display: "flex",
    justifyContent: "center",
  }
};

function ClientLogoArea() {
  return (
    <>
      <Box className="container-fluid" style={styles.containerFluid}>
        <Typography className="sub-title" style={styles.subTitle}>
          We take care of more than 100k customers
        </Typography>
        <Box className="client-container" style={styles.clientContainer}>
          <Box className="client-item" style={styles.clientItem}>
            <CardMedia
              component="img"
              image={require("../../assets/clientLogoArea/1.png")}
              style={{
                objectFit: "none",
                width: "auto",
              }}
              alt="Paella dish"
            />
          </Box>
          <Box className="client-item" style={styles.clientItem}>
            <CardMedia
              component="img"
              image={require("../../assets/clientLogoArea/2.png")}
              style={{
                objectFit: "none",
                width: "auto",
              }}
              alt="Paella dish"
            />
          </Box>
          <Box className="client-item" style={styles.clientItem}>
            <CardMedia
              component="img"
              image={require("../../assets/clientLogoArea/3.png")}
              style={{
                objectFit: "none",
                width: "auto",
              }}
              alt="Paella dish"
            />
          </Box>
          <Box className="client-item" style={styles.clientItem}>
            <CardMedia
              component="img"
              image={require("../../assets/clientLogoArea/5.png")}
              style={{
                objectFit: "none",
                width: "auto",
              }}
              alt="Paella dish"
            />
          </Box>
          <Box className="client-item" style={styles.clientItem}>
            <CardMedia
              component="img"
              image={require("../../assets/clientLogoArea/6.png")}
              style={{
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
