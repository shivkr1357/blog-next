import { Stack, Typography } from "@mui/material";
import CodeComponent from "../Code/CodeComponent";
import { useThemeState } from "@/context/ThemeContext";
import HTMLRenderer from "../HTMLRenderer/HTMLRenderer";
interface StepsComponentProps {
   data: any[];
   title: string; // Assuming title is a string based on your usage
}

const StepsComponent = ({ data, title }: StepsComponentProps) => {
   const { theme } = useThemeState();
   return (
      <Stack
         sx={{
            backgroundColor: theme === "dark" ? "rgb(28,27,34)" : "#f1f1f1",
            color: theme === "dark" ? "#f1f1f1" : "rgb(28,27,34)",
         }}
      >
         <Typography
            variant='h4'
            component='h1'
            sx={{
               display: "flex",
               justifyContent: { xs: "center", sm: "center", md: "flex-start" },
               paddingLeft: { xs: "10px", sm: "20px", md: "40px" },
               paddingTop: { xs: "10px", sm: "20px", md: "40px" },
            }}
         >
            {title}
         </Typography>
         {data.map((item: any, index: number) => (
            <Stack key={index} sx={{ width: "80%" }}>
               {Object.keys(item.item.steps).map((stepKey, idx) => {
                  const stepNumber = idx + 1;
                  const headingKey = `heading${stepNumber}`;
                  const codeKey = `code${stepNumber}`;

                  return (
                     <Stack
                        key={idx}
                        sx={{
                           paddingLeft: { xs: "10px", sm: "20px", md: "50px" },
                           paddingTop: { xs: "10px", sm: "20px", md: "50px" },
                        }}
                     >
                        <Typography variant='h5' component='h2'>
                           Step {stepNumber}: {item.item.headings[headingKey]}
                        </Typography>
                        <Stack
                           sx={{
                              paddingLeft: "20px",
                              paddingTop: "20px",
                              paddingBottom: "20px",
                           }}
                        >
                           <HTMLRenderer content={item.item.steps[stepKey]} />
                        </Stack>

                        {item.item.code[codeKey] && (
                           <CodeComponent
                              code={item.item.code[codeKey]}
                              language={"javascript"}
                           />
                        )}
                     </Stack>
                  );
               })}
               <Typography
                  variant='h5'
                  component='h3'
                  sx={{
                     paddingLeft: { xs: "10px", sm: "20px", md: "50px" },
                     paddingTop: { xs: "10px", sm: "20px", md: "30px" },
                  }}
               >
                  Conclusion
               </Typography>
               <Typography
                  variant='body1'
                  component='h4'
                  sx={{
                     paddingLeft: { xs: "10px", sm: "20px", md: "70px" },
                     paddingTop: { xs: "10px", sm: "20px", md: "20px" },
                     paddingBottom: { xs: "10px", sm: "20px", md: "50px" },
                  }}
               >
                  {item.item.conclusion}
               </Typography>
            </Stack>
         ))}
      </Stack>
   );
};

export default StepsComponent;
