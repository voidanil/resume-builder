import "./App.css";
import { useState } from "react";
import { Box, HStack, Switch, Text, Tooltip } from "@chakra-ui/react";
import PersonalDetails from "./components/PersonalDetails";
import { StepperNav } from "./components/StepperNav";
import { useContext } from "react";
import AppContext from "./Context/AppContext";
import EductationDetails from "./components/EductationDetails";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import PreviewMode from "./components/PreviewMode";
import Projects from "./components/Projects";
import { RiInformationFill } from "react-icons/ri";

// screens
const screens = [
  <PersonalDetails />,
  <EductationDetails />,
  <Experience />,
  <Projects />,
  <Skills />,
  <Hobbies />,
];

function App() {
  const { stepperIndex, dataToggler } = useContext(AppContext);
  const [preview, setPreview] = useState(false);

  return (
    <Box px="150px" py={"50px"}>
      <HStack mb={"10"} gap={"10"}>
        <Text
          fontSize={"3xl"}
          fontWeight={"bold"}
          textDecoration={"underline"}
          textDecorationThickness={"4px"}
        >
          Preview Resume
        </Text>
        <Tooltip
          hasArrow
          isDisabled={dataToggler}
          label={
            <HStack>
              <RiInformationFill />
              <Text>Editing mode is off for mock data</Text>
            </HStack>
          }
          placement="top-start"
          closeOnClick={false}
        >
          <Box>
            <Switch
              size="lg"
              onChange={() => {
                dataToggler ? setPreview(!preview) : "";
              }}
              isChecked={preview}
            />
          </Box>
        </Tooltip>
      </HStack>

      {!preview ? (
        <HStack alignItems={"start"} gap={"125px"} w="100%">
          <Box>
            <Text
              mb={"30px"}
              fontSize={"2xl"}
              fontWeight={"bold"}
              textDecoration={"underline"}
              textDecorationThickness={"2px"}
            >
              Form Index
            </Text>
            <StepperNav />
          </Box>
          <Box
            flexGrow={"1"}
            bg={"blackAlpha.100"}
            p="20px"
            borderRadius={"5px"}
          >
            {screens.map(
              (screen, i) => i === stepperIndex && <Box key={i}>{screen}</Box>,
            )}
          </Box>
        </HStack>
      ) : (
        <PreviewMode />
      )}
    </Box>
  );
}

export default App;
