import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function AddButton({handleClick}){
  return(
    <Box display="flex" justifyContent="right">
      <Button
        variant="contained"
        color="success"
        endIcon={<AddIcon />}
        sx={{
          borderRadius: 4,
          margin: 1
        }}
        onClick={handleClick}
      >
        Add
      </Button>
    </Box>
  );
}

export default AddButton;
