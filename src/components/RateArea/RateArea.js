import { Box, CardMedia, Container, Rating, Typography } from "@mui/material";
import React from "react";

const styles = {
  containerFluid: {
    backgroundColor: "#212121",
    paddingTop: {
      xs: "80px",
      sm: "150px",
      md: "50px",
    },
    paddingBottom: {
      xs: "80px",
      md: "100px",
    },
    position: "relative",
    zIndex: 1,
  },
  container: {
    width: {
      xs: "366px",
      sm: "696px",
      md: "1176px",
    },
    margin: "0 auto",
    padding: {
      xs: "40px 30px !important",
      md: "30px 30px !important",
    },
    backgroundColor: "#181818",
    border: "2px dashed #333",
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
    },
    alignItems: "center",
    zIndex: "3",
    position: "relative",
  },
  rateList: {
    width: "100%",
    backgroundColor: "#181818",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flex: 1,
    rowGap: "15px",
    marginTop: {
      xs: "28px",
      md: "0",
    },
    "& > :not(:last-child)": {
      borderRight: {
        xs: "none",
        sm: "1px solid #535353",
      },
    },
  },
  rateItem: {
    boxSizing: "border-box",
    width: {
      xs: "50%",
      sm: "25%",
    },
    backgroundColor: "#181818",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    // flex: 1,
  },
};

function RateArea() {
  const rates = [
    {
      image: "capterra",
      star: 4.5,
    },
    {
      image: "trustpilot",
      star: 5,
    },
    {
      image: "getapp",
      star: 4.5,
    },
    {
      image: "clutch",
      star: 5,
    },
  ];
  return (
    <>
      <Box className="container-fluid" sx={styles.containerFluid}>
        <Container sx={styles.container}>
          <Typography
            sx={{
              textAlign: {
                xs: "center",
                md: "start",
              },
              fontSize: "20px",
              color: "#fff",
              fontFamily: "'Arimo', sans-serif",
              width: {
                xs: "100%",
                md: "auto",
              },
              letterSpacing: "0",
            }}
          >
            4.8 out of 5 star based<br></br>
            on 1200 reviews
          </Typography>
          <Box sx={styles.rateList}>
            {rates.map((item, index) => (
              <Box key={index} sx={styles.rateItem} className="rate-item">
                <CardMedia
                  component="img"
                  image={require("../../assets/rate/" + item.image + ".png")}
                  sx={{
                    objectFit: "none",
                    width: "auto",
                  }}
                  alt="Paella dish"
                />
                <Rating
                  name="read-only"
                  value={item.star}
                  readOnly
                  size="small"
                  sx={{ paddingTop: "14px" }}
                />
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "14px",
                    fontFamily: "'Arimo', sans-serif",
                    marginTop: "6px",
                  }}
                >
                  {item.star}/5
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
        <CardMedia
          component="img"
          image={require("../../assets/clientLogoArea/zigzag.png")}
          sx={{
            position: "absolute",
            objectFit: "none",
            width: "auto",
            right: "0",
            bottom: "110px",
            zIndex: 2
          }}
          alt="Paella dish"
        />
      </Box>
    </>
  );
}

export default RateArea;
