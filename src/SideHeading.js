import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function SideHeading(){
  const theme2 = createTheme(
    {
      typography: {
        fontFamily: "Lobster",
        fontSize: 60,
        body1: {
          color: "#ef5c2f",
          opacity: 0.8
        }
      }
    }
  );

  return(
    <Box>
      <ThemeProvider theme={theme2}>
        <Typography
          sx={{
            top:150,
            left:100,
            position: "fixed",
            width: "20%"
          }}
        >
          Stock Average Calculator
        </Typography>
      </ThemeProvider>
    </Box>
  );
}

export default SideHeading;
