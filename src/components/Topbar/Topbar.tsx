"use client";
import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Tooltip,
  styled,
  Typography,
} from "@mui/material";
import Link from "next/link";

const CustomButton = styled("button")({
  color: "white",
  backgroundColor: "green",
  padding: 15,
  borderRadius: 4,
  border: "none",
  "&:hover": {
    backgroundColor: "#41a317",
    cursor: "pointer",
  },
});

const Topbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "rgb(28,27,34)" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "flex-end" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography>ItsIndianGuy Blog</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              gap={2}
            ></Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Topbar;
