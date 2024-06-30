"use client";
import StepsComponent from "@/components/CustomCard/StepComponent";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { data } from "@/utils/utils";
import { Stack } from "@mui/material";

const Page = () => {
   const [stepData, setStepData] = useState<any[]>([]); // Initialize with empty array
   const pathname = usePathname();
   const id = Number(pathname.split("/")[2]);

   useEffect(() => {
      const filteredData = data.filter((item) => item.id === id);
      setStepData(filteredData);
   }, [id]);

   console.log("Data", stepData);

   return (
      <Stack sx={{ marginTop: { xs: "60px", sm: "65px", md: "62px" } }}>
         {stepData.length > 0 && (
            <StepsComponent data={stepData} title={stepData[0].title} />
         )}
      </Stack>
   );
};

export default Page;
