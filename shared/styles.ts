import { Theme } from "@mui/material";

// Styling the Data grid
export const useStyles = (theme: Theme) => ({
  root: {
    "& .MuiDataGrid-iconSeparator": {
      display: "none",
    },
    "& .MuiDataGrid-main": {
      backgroundColor: "white",
    },
    "& .MuiDataGrid-cell:focus": {
      outline: "none",
    },
    "& .MuiDataGrid-row:hover": {
      cursor: "pointer",
    },
  },
});
