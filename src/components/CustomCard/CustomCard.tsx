import React from "react";
import { CATEGORIES } from "@/config";
import { Stack, Typography } from "@mui/material";
import styles from "./CustomCard.module.css";
import CodeComponent from "../Code/CodeComponent";

function CustomCard() {
  const code = `function() {
    var code = "This is a code displayed in pre tag";

    return string;
    
  }`;

  const language = "javascript";

  return (
    <Stack className={styles.cardContainter}>
      <Stack sx={{ padding: "10px" }}>
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "16px", md: "18px" },
            textAlign: "left",
          }}
        >
          Heading
        </Typography>
        <Stack className={styles.hashTags}>
          {CATEGORIES.map((item, key) => {
            return (
              <Typography key={key} className={styles.hashTagsText}>
                {"#" + item.toLowerCase()}
              </Typography>
            );
          })}
        </Stack>
        <Stack width={"50%"}>
          <CodeComponent code={code} language={language} />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default CustomCard;
