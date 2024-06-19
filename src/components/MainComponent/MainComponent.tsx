import { Stack } from "@mui/material";
import React from "react";
import CustomCard from "../CustomCard/CustomCard";

function MainComponent() {
  return (
    <Stack
      display={"flex"}
      justifyContent={"space-between"}
      // border={"1px solid blue"}
      width={{ xs: "90%", sm: "98%", md: "80%" }}
      alignItems={{ xs: "flex-start", sm: "center", md: "flex-start" }}
      padding={{ xs: "2%", sm: "2%", md: "1%" }}
      alignSelf={"flex-start"}
      height={"100%"}
      top={"900px"}
    >
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
    </Stack>
  );
}

export default MainComponent;
