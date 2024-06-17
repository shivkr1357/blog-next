"use client";
import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  styled,
  Typography,
  ToggleButton,
} from "@mui/material";
import { useThemeState } from "@/context/ThemeContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";

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
  const { theme, toggleTheme } = useThemeState();

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
            >
              <ToggleButton
                value="check"
                selected={theme === "light"}
                onChange={() => {
                  toggleTheme();
                }}
              >
                {theme === "light" ? (
                  <>
                    <DarkModeIcon />
                  </>
                ) : (
                  <>
                    <WbSunnyIcon sx={{ color: "white" }} />
                  </>
                )}
              </ToggleButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Topbar;
