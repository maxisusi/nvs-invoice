import {
  Box,
  Button,
  ButtonGroup,
  Container,
  IconButton,
  Stack,
} from "@mui/material";
import React from "react";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import AddIcon from "@mui/icons-material/Add";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export const SideBar = () => {
  return (
    <Box
      color={"secondary"}
      sx={{
        backgroundColor: "default",
        color: "secondary.contrastText",
        height: "100vh",
        width: "25vh",
        pt: 8,
      }}
    >
      <Stack spacing={2} direction="column">
        {/* Client Menu */}
        <ButtonGroup
          variant="text"
          size="large"
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Button sx={{ flexGrow: 1 }} startIcon={<RecentActorsIcon />}>
            Clients
          </Button>
          <Button>
            <AddIcon />
          </Button>
        </ButtonGroup>

        {/* Invoice Menu */}
      </Stack>
    </Box>
  );
};
