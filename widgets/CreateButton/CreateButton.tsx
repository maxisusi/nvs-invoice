import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { FunctionComponent } from "react";
import Link from "next/link";

interface Props {
  urlPage: string;
}

export const CreateButton: FunctionComponent<Props> = ({
  urlPage,
  ...props
}) => {
  return (
    <Link href={urlPage} passHref>
      <Button
        variant="contained"
        color={"secondary"}
        sx={{
          position: "fixed",
          bottom: 100,
          right: 100,
          height: 80,
          width: 80,
          borderRadius: "100%",
        }}
      >
        <AddIcon fontSize="large" sx={{ color: "common.white" }} />
      </Button>
    </Link>
  );
};
