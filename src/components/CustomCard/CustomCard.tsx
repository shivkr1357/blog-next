import React from "react";
import { Stack, Typography } from "@mui/material";
import styles from "./CustomCard.module.css";
import { useThemeState } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";
import moment from "moment";

function CustomCard({ headingTitle, category, author, timestamp, id }: any) {
   const { theme } = useThemeState();
   const router = useRouter();

   return (
      <Stack
         className={styles.cardContainter}
         sx={{
            backgroundColor: theme === "dark" ? "rgb(28,27,34)" : "#f1f1f1",
            cursor: "pointer",
         }}
         onClick={() => {
            router.push(`/blogs/${id}`);
         }}
      >
         <Stack sx={{ padding: "10px" }}>
            <Typography
               sx={{
                  fontSize: { xs: "16px", sm: "16px", md: "18px" },
                  textAlign: "left",
                  color: theme === "dark" ? "#f1f1f1" : "rgb(28,27,34)",
               }}
            >
               <strong>{headingTitle}</strong>
            </Typography>
            <Stack className={styles.hashTags}>
               <Typography
                  className={styles.hashTagsText}
                  color={theme === "dark" ? "#f1f1f1" : "rgb(28,27,34)"}
               >
                  {"#" + category.toLowerCase()}
               </Typography>
            </Stack>
            <Stack direction={"row"}>
               <Typography
                  color={theme === "dark" ? "#f1f1f1" : "rgb(28,27,34)"}
               >
                  <small>{author}</small>
               </Typography>
               <Typography
                  color={theme === "dark" ? "#f1f1f1" : "rgb(28,27,34)"}
               >
                  <small>&nbsp; {"|"} &nbsp; </small>
               </Typography>
               <Typography
                  color={theme === "dark" ? "#f1f1f1" : "rgb(28,27,34)"}
               >
                  <small>{moment(timestamp).fromNow()}</small>
               </Typography>
            </Stack>
         </Stack>
      </Stack>
   );
}

export default CustomCard;
