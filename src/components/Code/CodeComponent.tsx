"use client";
import React, { useEffect } from "react";
import styles from "./CodeComponent.module.css";
import { Box, Button, Stack } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Prism from "prismjs";

export default function CodeComponent({ code, language }: any) {
   useEffect(() => {
      Prism.highlightAll();
   }, []);
   return (
      <Stack
         className={styles.mainCode}
         sx={{ width: { xs: "100%", sm: "100%", md: "50%" } }}
      >
         <Box className={styles.copyIcon}>
            <Button
               sx={{ alignSelf: "flex-end", color: "white", cursor: "pointer" }}
               onClick={() => navigator.clipboard.writeText(code)}
            >
               <ContentCopyIcon />
            </Button>
         </Box>
         <Stack className={styles.code}>
            <pre>
               <code className={`language-${language}`}>{code}</code>
            </pre>
         </Stack>
      </Stack>
   );
}
