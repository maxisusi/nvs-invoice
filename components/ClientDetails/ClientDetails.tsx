import React, { FunctionComponent } from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { useClientDetails } from "./useClientDetails";
import { CardParent } from "./CardParent";

export const ClientDetails: FunctionComponent = () => {
  return (
    <>
      <Box>
        <Box>
          <Card variant="outlined">
            <CardParent />
          </Card>
        </Box>
      </Box>
    </>
  );
};
