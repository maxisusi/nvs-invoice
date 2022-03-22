import React, { FunctionComponent } from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { TitleInfo } from "./helper";

export const TitleApp: FunctionComponent<TitleInfo> = ({ title, info }) => {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="subtitle1">{info}</Typography>
    </Box>
  );
};
