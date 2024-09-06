import { styled, Toolbar } from "@mui/material";

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    minHeight: '32px',
    [theme.breakpoints.up('sm')]: {
      minHeight: '32px',
    },
}));