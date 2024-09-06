import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StyledToolbar } from './HeadBarStyle';


export default function HeadBar() {

  return (
    <Box sx={{ position: 'fixed', zIndex: 1300 }}>
      <AppBar>
        <StyledToolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
    );
}
