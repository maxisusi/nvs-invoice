import { Box, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Props } from "./helper";

export const Label: FunctionComponent<Props> = ({
  firstTitle,
  lastTitle,
  firstElem,
  lastElem,
  isLast,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        borderBottom: () => {
          if (isLast) return;
          return "1px solid rgba(0, 0, 0, 0.12)";
        },
        pb: 1,
        pt: 2,
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",

            height: "30px",
            width: "600px",
          }}
        >
          <Typography
            sx={{
              width: "120px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
            color="text.secondary"
          >
            <strong>{firstTitle}</strong>
          </Typography>
          <Typography
            sx={{
              width: "300px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {firstElem}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", height: "30px" }}>
          <Typography
            color="text.secondary"
            sx={{
              width: "120px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <strong>{lastTitle && lastTitle}</strong>
          </Typography>
          <Typography
            sx={{
              width: "300px",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {lastElem && lastElem}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
