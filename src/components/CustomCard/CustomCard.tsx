import React from "react";
import { CATEGORIES } from "@/config";
import { Stack, Typography } from "@mui/material";
import styles from "./CustomCard.module.css";
import CodeComponent from "../Code/CodeComponent";
import { useThemeState } from "@/context/ThemeContext";

function CustomCard() {
  const { theme } = useThemeState();

  const code = `function() {
    var code = "This is a code displayed in pre tag";

    return string;
    
  }`;

  const language = "javascript";

  return (
    <Stack
      className={styles.cardContainter}
      sx={{ backgroundColor: theme === "dark" ? "rgb(28,27,34)" : "#f1f1f1" }}
    >
      <Stack sx={{ padding: "10px" }}>
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "16px", md: "18px" },
            textAlign: "left",
            color: theme === "dark" ? "#f1f1f1" : "rgb(28,27,34)",
          }}
        >
          Heading
        </Typography>
        <Stack className={styles.hashTags}>
          {CATEGORIES.map((item, key) => {
            return (
              <Typography
                key={key}
                className={styles.hashTagsText}
                color={theme === "dark" ? "#f1f1f1" : "rgb(28,27,34)"}
              >
                {"#" + item.toLowerCase()}
              </Typography>
            );
          })}
        </Stack>
        <Stack width={{ xs: "95%", sm: "100%" }}>
          <CodeComponent code={code} language={language} />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default CustomCard;
