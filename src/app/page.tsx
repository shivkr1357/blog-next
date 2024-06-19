"use client";
import MainComponent from "@/components/MainComponent/MainComponent";
import styles from "./page.module.css";
import { Stack } from "@mui/material";
import { useThemeState } from "@/context/ThemeContext";

export default function Home() {
  const { theme } = useThemeState();
  return (
    <main>
      <Stack
        className={styles.main}
        sx={{
          backgroundColor: theme === "light" ? "#f2f2f2" : "black",
          marginTop: { xs: "3rem", sm: "3rem", md: "4rem" },
        }}
      >
        <MainComponent />
      </Stack>
    </main>
  );
}
