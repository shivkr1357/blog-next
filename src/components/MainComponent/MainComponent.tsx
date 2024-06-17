import { Stack } from "@mui/material";
import React from "react";
import CustomCard from "../CustomCard/CustomCard";

function MainComponent() {
  return (
    <Stack
      display={"flex"}
      justifyContent={"space-between"}
      // border={"1px solid blue"}
      width={{ xs: "95%", sm: "90%", md: "80%" }}
      alignItems={{ xs: "flex-start", sm: "center", md: "flex-start" }}
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
