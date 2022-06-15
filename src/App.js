import {useState} from "react";
import Box from '@mui/material/Box';
import SharePriceBox from "./SharePriceBox.js";
import SideHeading from "./SideHeading.js";
import SideFooter from "./SideFooter.js";
import CalculateBox from "./CalculateBox.js";
import AddButton from "./AddButton.js";

function App() {
  const [inputList, setInputList] = useState([]);

  function handleClick(e){
    setInputList(inputList.concat(<SharePriceBox />));
  }

  function handleReset(){
    setInputList([]);
  }

  return(
    <Box>
      <SideHeading />
      <Box
        sx={{
          width: "27%",
          backgroundColor: "#FFBC42",
          margin: "5rem auto",
          borderRadius: 4,
          opacity: 0.4
        }}
      >
        <SharePriceBox />
        <SharePriceBox />
        {inputList}
        <AddButton handleClick={handleClick}/>
        <CalculateBox handleReset={handleReset}/>
      </Box>
      <SideFooter />
    </Box>
  );
}

export default App;
