import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import SvgIcon from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";

export const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: "primary.light" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              justifyContent: "space-between",
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Icon SVG */}
            <Link href={"/"} passHref>
              <IconButton>
                <SvgIcon>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon>
              </IconButton>
            </Link>

            {/* User Avatar */}
            <Avatar
              alt="Max Balej"
              src={`https://avatars.dicebear.com/api/pixel-art/${Math.round(
                Math.random() * 100
              )}.svg`}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
