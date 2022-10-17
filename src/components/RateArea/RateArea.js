import { Box, CardMedia, Container, Rating, Typography } from "@mui/material";
import React from "react";

const styles = {
  containerFluid: {
    backgroundColor: "#212121",
    paddingTop: "50px",
    paddingBottom: "100px",
    position: "relative",
  },
  container: {
    width: "1176px",
    margin: "0 auto",
    padding: "50px 10px 50px 70px",
    backgroundColor: "#181818",
    border: "2px dashed #333",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    zIndex: "1",
    position: "relative",
  },
  rateList: {
    backgroundColor: "#181818",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
    "& > :not(:last-child)": {
      borderRight: "1px solid #535353",
    },
  },
  rateItem: {
    backgroundColor: "#181818",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
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
      <Box className="container-fluid" style={styles.containerFluid}>
        <Container style={styles.container}>
          <Typography
            sx={{
              fontSize: "20px",
              color: "#fff",
              fontFamily: "'Arimo', sans-serif",
            }}
          >
            4.8 out of 5 star based<br></br>
            on 1200 reviews
          </Typography>
          <Box sx={styles.rateList}>
            {rates.map((item, index) => (
              <Box sx={styles.rateItem} className="rate-item">
                <CardMedia
                  component="img"
                  image={require("../../assets/rate/" + item.image + ".png")}
                  style={{
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
      </Box>
    </>
  );
}

export default RateArea;
