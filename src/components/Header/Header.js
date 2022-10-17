import {
  AppBar,
  CardMedia,
  Link,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import React from "react";

const styles = {
  appBar: {
    backgroundColor: "#212121",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    zIndex: "5",
    boxShadow: "none",
  },
  toolbar: {
    padding: "0 60px",
    height: "104px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "40px",
  },
  listItem: {
    padding: "0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "16px",
    color: "#fff",
    gap: "3px",
    height: "104px",
    cursor: "pointer",
    transition: "color 0.3s",
    "&:hover": {
      color: "#FF824C",
    },
    ":hover .child": {
      visibility: "visible",
    },
    position: "relative",
  },
  buttonText: {
    fontSize: "18px",
    lineHeight: "1.5",
    color: "#fff",
    textDecoration: "none",
    fontFamily: "'Arimo', sans-serif",
    cursor: "pointer",
    transition: "color 0.3s",
    "&:hover": {
      color: "#FF824C",
    },
  },
  buttonOutline: {
    fontSize: "18px",
    lineHeight: "1.5",
    color: "#fff",
    textDecoration: "none",
    padding: "13px 33px",
    border: "1px solid #fff",
    borderRadius: "3px",
    marginLeft: "24px",
    fontFamily: "'Arimo', sans-serif",
    cursor: "pointer",
    transition: "all 0.3s",
    "&:hover": {
      color: "#FF824C",
      backgroundColor: "#fff",
    },
  },
  Typography: {
    fontFamily: "'Arimo', sans-serif",
    // color: "#ddd",
  },
  KeyboardArrowDownIcon: {
    width: "14px",
    height: "14px",
  },
};

function Header() {
  const list = ["Home", "Pages", "Porfolio", "Blog", "Contact"];
  return (
    <>
      <AppBar style={styles.appBar}>
        <Toolbar style={styles.toolbar}>
          <CardMedia
            component="img"
            style={{
              width: "145px",
            }}
            image={require("../../assets/logo_4.png")}
            alt="Paella dish"
          />
          <List style={styles.list}>
            {list.map((listItem) => (
              <ListItem style={styles.listItem}>
                <Typography style={styles.Typography}>{listItem}</Typography>
                <KeyboardArrowDownIcon
                  style={styles.KeyboardArrowDownIcon}
                ></KeyboardArrowDownIcon>
              </ListItem>
            ))}
          </List>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link style={styles.buttonText} variant="text" color="inherit">
              Login
            </Link>
            <Link
              style={styles.buttonOutline}
              variant="outlined"
              color="inherit"
            >
              Sign up
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
