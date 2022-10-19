import React from "react";
import DesktopTable from "./DesktopTable";
import { Box, Link, Typography } from "@mui/material";
import MobileTable from "./MobileTable";

const styles = {
  containerFluid: {
    paddingTop: "120px",
    backgroundColor: "#f4f4f4",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    width: {
      xs: "366px",
      sm: "696px",
      md: "1176px",
    },
    margin: "0 auto",
    display: "inline",
    fontSize: {
      xs: "38px",
      sm: "58px",
      md: "60px",
    },
    color: "#212121",
    fontFamily: "'Fraunces', serif",
    textAlign: "center",
    lineHeight: {
      xs: "1.2",
      md: "78px"
    },
    fontWeight: "500",
    letterSpacing: "-0.01em",
  },
  subHeading: {
    fontSize: "18px",
    color: "#494949",
    marginBottom: "16px",
    marginTop: "20px",
    fontFamily: "'Arimo', sans-serif",
    textAlign: "center",
  },
};
function PriceArea() {
  return (
    <>
      <Box className="container-fluid" sx={styles.containerFluid}>
        <Typography sx={styles.heading}>
          We are&nbsp;
          <Typography
            sx={{
              display: "inline",
              fontSize: {
                xs: "38px",
                sm: "58px",
                md: "60px",
              },
              color: "#FC6B75",
              fontFamily: "'Fraunces', serif",
              position: "relative",
              lineHeight: {
                xs: "38px",
                md: "78px"
              },
              marginBottom: "20px",
              fontWeight: "500",
              letterSpacing: "-0.01em",
              "&::before": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "2px",
                backgroundColor: "#FC6B75",
                bottom: "0px",
              },
            }}
          >
            better
          </Typography>
          &nbsp;than<br></br>
          our competitors
        </Typography>
        <Typography sx={styles.subHeading}>
          You said I'd feel better if I just worked hard without lifting me up
        </Typography>
        <DesktopTable></DesktopTable>
        <MobileTable></MobileTable>
      </Box>
    </>
  );
}

export default PriceArea;
