import { Box, CardMedia, Link, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const styles = {
  table: {
    marginTop: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "6px",
    border: "1px solid #dcdcdc",
    display: {
      xs: "none",
      sm: "flex",
    },
    flexDirection: "column",
    width: {
      xs: "366px",
      sm: "696px",
      md: "1176px",
    },
    position: "relative",
  },
  tbHead: {
    paddingTop: "30px",
    paddingBottom: "30px",
    width: "25%",
    fontSize: "18px",
    color: "#212121",
    fontWeight: 500,
    color: "#212121",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8eee1",
    fontFamily: "'Arimo', sans-serif",
  },
  priceItem: {
    paddingTop: "25px",
    paddingBottom: "25px",
    paddingLeft: "35px",
    width: "calc(25% - 35px)",
    fontSize: "18px",
    fontWeight: "500",
    color: "#212121",
    display: "flex",
    alignItems: "center",
  },
  hightLightItem: {
    paddingTop: "25px",
    paddingBottom: "25px",
    width: "25%",
    fontSize: "27px",
    fontWeight: "500",
    backgroundColor: "#212121",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  normalItem: {
    paddingTop: "25px",
    paddingBottom: "25px",
    width: "25%",
    fontSize: "18px",
    color: "#212121",
    fontWeight: 400,
    color: "#212121",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryItem: {
    paddingTop: "25px",
    paddingBottom: "25px",
    width: "25%",
    fontSize: "25px",
    color: "#212121",
    fontWeight: 500,
    color: "#212121",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  checkIcon: {
    width: "30px",
    height: "30px",
    color: "#56c28c",
  },
  closeIcon: {
    width: "30px",
    height: "30px",
    color: "#e42e1b",
  },
};
function DesktopTable() {
  return (
    <>
      <Box className="table" sx={styles.table}>
        <CardMedia
          component="img"
          image={require("../../assets/priceArea/price-bg-shap.png")}
          sx={{
            width: {
              sm: "0",
              md: "auto",
            },
            position: "absolute",
            left: "-146px",
            bottom: "0",
          }}
          alt="Paella dish"
        ></CardMedia>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              paddingTop: "30px",
              paddingBottom: "30px",
              paddingLeft: "35px",
              width: "calc(25% - 35px)",
              fontSize: "30px",
              fontWeight: "600",
              color: "#2c264a",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f8eee1",
            }}
          >
            Overview
          </Box>
          <Box
            sx={{
              paddingTop: "30px",
              paddingBottom: "30px",
              width: "25%",
              fontSize: "27px",
              fontWeight: "500",
              color: "#fff",
              backgroundColor: "#212121",
              display: "flex",
              flexDirection: {
                sm: "column",
                md: "row",
              },
              justifyContent: "center",
              alignItems: "center",
              ColumnGap: "8px",
            }}
          >
            <img src={require("../../assets/priceArea/bell-price.png")}></img>
            &nbsp;TerraMart
          </Box>
          <Box sx={styles.tbHead}>
            Other Agency #1
            <Typography
              sx={{
                fontSize: "14px",
                color: "#4C4C63",
                line: "28px",
                marginTop: "4px",
              }}
            >
              I just worked hard
            </Typography>
          </Box>
          <Box sx={styles.tbHead}>
            Other Agency #2
            <Typography
              sx={{
                fontSize: "14px",
                color: "#4C4C63",
                lineHeight: "28px",
                marginTop: "4px",
              }}
            >
              I just worked hard
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            borderTop: "1px solid #3f3f3f",
          }}
        >
          <Box sx={styles.priceItem}>Guarenteed quality control</Box>
          <Box sx={styles.hightLightItem}>
            <CheckIcon sx={styles.checkIcon}></CheckIcon>
          </Box>
          <Box sx={styles.normalItem}>
            <CloseIcon sx={styles.closeIcon}></CloseIcon>
          </Box>
          <Box sx={styles.normalItem}>
            <CheckIcon sx={styles.checkIcon}></CheckIcon>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            borderTop: "1px solid #3f3f3f",
          }}
        >
          <Box sx={styles.priceItem}>Top quality service</Box>
          <Box sx={styles.hightLightItem}>
            <CheckIcon sx={styles.checkIcon}></CheckIcon>
          </Box>
          <Box sx={styles.normalItem}>
            <CloseIcon sx={styles.closeIcon}></CloseIcon>
          </Box>
          <Box sx={styles.normalItem}>
            <CheckIcon sx={styles.checkIcon}></CheckIcon>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            borderTop: "1px solid #3f3f3f",
          }}
        >
          <Box sx={styles.priceItem}>Best experts at your lease</Box>
          <Box sx={styles.hightLightItem}>
            <CheckIcon sx={styles.checkIcon}></CheckIcon>
          </Box>
          <Box sx={styles.normalItem}>
            <CloseIcon sx={styles.closeIcon}></CloseIcon>
          </Box>
          <Box sx={styles.normalItem}>
            <CheckIcon sx={styles.checkIcon}></CheckIcon>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            borderTop: "1px solid #3f3f3f",
          }}
        >
          <Box sx={styles.priceItem}>AI based data management</Box>
          <Box sx={styles.hightLightItem}>
            <CheckIcon sx={styles.checkIcon}></CheckIcon>
          </Box>
          <Box sx={styles.normalItem}>
            <CloseIcon sx={styles.closeIcon}></CloseIcon>
          </Box>
          <Box sx={styles.normalItem}>
            <CheckIcon sx={styles.checkIcon}></CheckIcon>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            borderTop: "1px solid #3f3f3f",
          }}
        >
          <Box
            sx={{
              paddingTop: "25px",
              paddingBottom: "25px",
              paddingLeft: "35px",
              width: "calc(25% - 35px)",
              fontSize: "18px",
              fontWeight: "500",
              color: "#212121",
              display: "flex",
              alignItems: "center",
            }}
          >
            Pricing
          </Box>
          <Box
            sx={{
              paddingTop: "25px",
              paddingBottom: "25px",
              width: "25%",
              fontSize: "25px",
              fontWeight: "500",
              color: "#fff",
              backgroundColor: "#212121",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            $100.00
          </Box>
          <Box sx={styles.secondaryItem}>$200.00</Box>
          <Box sx={styles.secondaryItem}>$300.00</Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            borderTop: "1px solid #3f3f3f",
          }}
        >
          <Box
            sx={{
              paddingTop: "25px",
              paddingBottom: "25px",
              paddingLeft: "35px",
              width: "calc(25% - 35px)",
              fontSize: "18px",
              fontWeight: "500",
              color: "#212121",
              display: "flex",
              alignItems: "center",
            }}
          ></Box>
          <Box
            sx={{
              paddingTop: "25px",
              paddingBottom: "25px",
              width: "25%",
              fontSize: "18px",
              fontWeight: "500",
              color: "#fff",
              backgroundColor: "#212121",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            Get started&nbsp;
            <div>
              <img src={require("../../assets/priceArea/arrow1.png")}></img>
            </div>
          </Box>
          <Box sx={styles.secondaryItem}>
            <Link
              sx={{
                color: "#868686",
                fontSize: "17px",
              }}
              color="inherit"
            >
              Show full comparion
            </Link>
          </Box>
          <Box sx={styles.secondaryItem}>
            <Link
              sx={{
                color: "#868686",
                fontSize: "17px",
              }}
              color="inherit"
            >
              Show full comparion
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default DesktopTable;
