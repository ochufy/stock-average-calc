import {useState, useRef} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function SharePriceBox(){

  var textInput1 = useRef(null);
  var textInput2 = useRef(null);

  function clearInitial(){
    textInput1.current.value = "";
    textInput2.current.value = "";
  }

  const theme = createTheme(
    {
      palette: {
        primary: {
          main: "#000"
        },
        text: {
          primary: "#000",
          secondary: "#000"
        }
      },
      typography: {
        fontSize: 18
      }
    }
  );

  var shares = [];
  var prices = [];

  function handleShares(e){
    shares.push(e.target.value);
    console.log(shares);
    console.log(e.target.value);
    textInput1 = e.target.value;

  }

  function handlePrice(e){
    prices.push(e.target.value);
    console.log(prices);
    textInput2 = e.target.value;
  }

  return(
    <Box
      display="flex"
      justifyContent="center"
    >
      <Box p={1} mt={2}>
        <ThemeProvider theme={theme}>
          <TextField
            variant="outlined"
            color="primary"
            focused
            helperText="Shares Bought"
            size="small"
            onChange={handleShares}
            inputRef={textInput1}
          />
        </ThemeProvider>
      </Box>
      <Box p={1} mt={2}>
        <ThemeProvider theme={theme}>
          <TextField
            variant="outlined"
            color="primary"
            focused
            helperText="Purchase Price"
            size="small"
            onChange={handlePrice}
            inputRef={textInput2}
          />
        </ThemeProvider>
      </Box>
    </Box>
  );
}

export default SharePriceBox;
