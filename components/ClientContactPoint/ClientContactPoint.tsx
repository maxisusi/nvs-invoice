import React, { FunctionComponent } from "react";

import Card from "@mui/material/Card";
import { CardParent } from "./CardParent";

export const ClientContactPoint: FunctionComponent = () => {
  return (
    <>
      <Card variant="outlined">
        <CardParent />
      </Card>
    </>
  );
};
