import { CATEGORIES } from "@/config";
import { Stack, Typography } from "@mui/material";
import React from "react";

const Sidebar = () => {
  return (
    <Stack
      sx={{
        width: { xs: "0px", sm: "22%", md: "16%" },
        height: "100%",
        maxHeight: "80vh",
        backgroundColor: "rgb(28,27,34)",
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
              color: "#bbb",
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
