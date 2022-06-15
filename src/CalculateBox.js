import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CalculateBox({handleReset}){
  return(
    <Box
      sx={{
        width:"20%",
        height:"auto",
        backgroundColor:"#5F9959",
        bottom:"28rem",
        right:"10rem",
        position:"fixed",
        borderRadius: 4
      }}
    >
      <Box p={2}>
        <Typography variant="h6" p={1}>
          Average Price =
        </Typography>
        <Typography variant="h6" p={1}>
          Total Stocks =
        </Typography>
        <Typography variant="h6" p={1}>
          Total Amount =
        </Typography>
      </Box>
      <Button variant="contained" sx={{position: "fixed", marginTop:2, }}>Calculate</Button>
      <Button onClick={()=>{handleReset()}} variant="contained" color="error" sx={{position: "fixed", marginTop:2, marginLeft:29}}>Reset</Button>
    </Box>
  );
}

export default CalculateBox;
