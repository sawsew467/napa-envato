import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";

const styles = {
  table: {
    marginTop: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "6px",
    border: "1px solid #dcdcdc",
    display: {
      xs: "flex",
      sm: "none",
    },
    flexDirection: "column",
    width: {
      xs: "366px",
    },
  },
  tbRow: {
    display: "flex",
    flexDirection: "column",
    lineHeight: "34px",
    width: "100%",
    backgroundColor: "#fff",
    "& > :nth-child(3)": {
      backgroundColor: "#F8F8F8",
    },
  },
  tbHead: {
    fontSize: "20px",
    fontWeight: "500",
    textAlign: "center",
    padding: "20px 12px 20px 15px",
    color: "#212529",
    backgroundColor: "#F8F8F8",
  },
  colLeft: {
    width: "50%",
    fontSize: "16px",
  },
  colRight: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
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

function MobileTable() {
  return (
    <>
      <Box className="table" sx={styles.table}>
        <Box sx={styles.tbRow}>
          <Box sx={styles.tbHead}>Guarenteed quality control</Box>
          <Box
            sx={{
              padding: "10px 20px",
              display: "flex",
            }}
          >
            <Box sx={styles.colLeft}>TerraMart</Box>
            <Box sx={styles.colRight}>
              <CheckIcon sx={styles.checkIcon}></CheckIcon>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px 20px",
              display: "flex",
            }}
          >
            <Box sx={styles.colLeft}>Other Agency #1</Box>
            <Box sx={styles.colRight}>
              <CloseIcon sx={styles.closeIcon}></CloseIcon>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px 20px",
              display: "flex",
            }}
          >
            <Box sx={styles.colLeft}>Other Agency #2</Box>
            <Box sx={styles.colRight}>
              <CheckIcon sx={styles.checkIcon}></CheckIcon>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.tbRow}>
          <Box sx={styles.tbHead}>Top quality service</Box>
          <Box
            sx={{
              padding: "10px 20px",
              display: "flex",
            }}
          >
            <Box sx={styles.colLeft}>TerraMart</Box>
            <Box sx={styles.colRight}>
              <CheckIcon sx={styles.checkIcon}></CheckIcon>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px 20px",
              display: "flex",
            }}
          >
            <Box sx={styles.colLeft}>Other Agency #1</Box>
            <Box sx={styles.colRight}>
              <CloseIcon sx={styles.closeIcon}></CloseIcon>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px 20px",
              display: "flex",
            }}
          >
            <Box sx={styles.colLeft}>Other Agency #2</Box>
            <Box sx={styles.colRight}>
              <CheckIcon sx={styles.checkIcon}></CheckIcon>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.tbRow}>
          <Box sx={styles.tbHead}>Best experts at your lease</Box>
          <Box
            sx={{
              padding: "10px 20px",
              display: "flex",
            }}
          >
            <Box sx={styles.colLeft}>TerraMart</Box>
            <Box sx={styles.colRight}>
              <CheckIcon sx={styles.checkIcon}></CheckIcon>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px 20px",
              display: "flex",
            }}
          >
            <Box sx={styles.colLeft}>Other Agency #1</Box>
            <Box sx={styles.colRight}>
              <CloseIcon sx={styles.closeIcon}></CloseIcon>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px 20px",
              display: "flex",
            }}
          >
            <Box sx={styles.colLeft}>Other Agency #2</Box>
            <Box sx={styles.colRight}>
              <CheckIcon sx={styles.checkIcon}></CheckIcon>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.tbRow}>
          <Box sx={styles.tbHead}>AI based data management</Box>
          <Box
            sx={{
              padding: "10px 20px",
              display: "flex",
            }}
          >
            <Box sx={styles.colLeft}>TerraMart</Box>
            <Box sx={styles.colRight}>
              <CheckIcon sx={styles.checkIcon}></CheckIcon>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px 20px",
              display: "flex",
            }}
          >
            <Box sx={styles.colLeft}>Other Agency #1</Box>
            <Box sx={styles.colRight}>
              <CloseIcon sx={styles.closeIcon}></CloseIcon>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px 20px",
              display: "flex",
            }}
          >
            <Box sx={styles.colLeft}>Other Agency #2</Box>
            <Box sx={styles.colRight}>
              <CheckIcon sx={styles.checkIcon}></CheckIcon>
            </Box>
          </Box>
        </Box>
        <Box sx={styles.tbRow}>
          <Box sx={styles.tbHead}>Pricing</Box>
          <Box
            sx={{
              padding: "10px 20px",
              display: "flex",
            }}
          >
            <Box sx={styles.colLeft}>TerraMart</Box>
            <Box sx={styles.colRight}>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px 20px",
              display: "flex",
            }}
          >
            <Box sx={styles.colLeft}>Other Agency #1</Box>
            <Box sx={{...styles.colRight, justifyContent: "end"}}>
              <Typography sx={
                {
                    fontSize: "25px",
                    fontWeight: "400",
                    color: "#212121"
                }

              }>$200.00</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "10px 20px",
              display: "flex",
            }}
          >
            <Box sx={styles.colLeft}>Other Agency #2</Box>
            <Box sx={{...styles.colRight, justifyContent: "end"}}>
              <Typography sx={
                {
                    fontSize: "25px",
                    fontWeight: "400",
                    color: "#212121"
                }

              }>$300.00</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MobileTable;
