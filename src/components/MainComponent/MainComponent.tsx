import { Stack } from "@mui/material";
import React from "react";
import CustomCard from "../CustomCard/CustomCard";
import { data } from "@/utils/utils";

function MainComponent() {
   return (
      <Stack
         display={"flex"}
         justifyContent={"space-between"}
         width={{ xs: "90%", sm: "98%", md: "80%" }}
         alignItems={{ xs: "flex-start", sm: "center", md: "flex-start" }}
         padding={{ xs: "2%", sm: "2%", md: "1%" }}
         alignSelf={"flex-start"}
         height={"100%"}
         top={"900px"}
      >
         {data.map((item, index) => (
            <Stack key={index} sx={{ width: "100%" }}>
               <CustomCard
                  headingTitle={item.headingTitle}
                  category={item.category}
                  author={item.authour}
                  timestamp={item.timeStamp}
                  id={item.id}
               />
            </Stack>
         ))}
      </Stack>
   );
}

export default MainComponent;
