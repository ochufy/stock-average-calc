import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function SideFooter(){
  const theme1 = createTheme(
    {
      typography: {
        fontFamily: "Indie Flower",
        fontSize: 18
      }
    }
  );

  return(
    <Box>
      <ThemeProvider theme={theme1}>
        <Typography
          variant="body1"
          sx={{
            bottom:15,
            left:15,
            position: "fixed"
          }}
        >
          Made with 💗 by Roshan
        </Typography>
      </ThemeProvider>
    </Box>
  );
}

export default SideFooter;
