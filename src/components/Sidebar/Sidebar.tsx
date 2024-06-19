"use client";
import { CATEGORIES } from "@/config";
import { Stack, Typography } from "@mui/material";
import React from "react";
import styles from "./Sidebar.module.css";
import { useThemeState } from "@/context/ThemeContext";

const Sidebar = () => {
  const { theme } = useThemeState();
  return (
    <Stack
      className={styles.mainContainer}
      sx={{
        width: { xs: "0px", sm: "22%", md: "16%" },
        height: "100%",
        maxHeight: "80vh",
        backgroundColor: theme === "dark" ? "rgb(28,27,34)" : "#f2f2f2",
        margin: "10px",
        display: { xs: "none", sm: "none", md: "flex" },
        borderRadius: "10px",
        position: "fixed",
        top: "80px",
        right: 2,
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 3,
          fontSize: "20px",
          color: theme === "light" ? "black" : "#f2f2f2",
        }}
      >
        Categories
      </Typography>

      {CATEGORIES.map((item, key) => {
        return (
          <Typography
            key={key}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 3,
              color: "#888",
              cursor: "pointer",
            }}
          >
            {item}
          </Typography>
        );
      })}
    </Stack>
  );
};

export default Sidebar;
