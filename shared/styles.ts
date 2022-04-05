import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Styling the Data grid
export const useStyles = makeStyles((theme: Theme) => ({
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
}));
