import React from "react";
import Link from "next/link";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

import { useRouter } from "next/router";
import { useHeader } from "./useHeader";
import { Container, Paper } from "@mui/material";

export const Header: React.FunctionComponent = ({ children }) => {
  const router = useRouter();
  const request = router.asPath;
  const theme = useTheme();
  const {
    AppBar,
    Drawer,
    DrawerHeader,
    menuItems,
    handleDrawerClose,
    handleDrawerOpen,
    open,
  } = useHeader();

  return (
    <Box sx={{ display: "flex", backgroundColor: "#F8F8F8", height: "100vh" }}>
      {/* Header */}
      <AppBar position="fixed" open={open} elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Nadine&apos;s Verbier Services
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <IconButton color="inherit" aria-label="open notifications">
              <NotificationsIcon />
            </IconButton>
            <Avatar alt="Max Balej" />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {/* Menu Items */}
        <List>
          {menuItems.map((menu) => (
            <Link key={menu.name} href={menu.link} passHref>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {router.asPath == menu.link
                    ? menu.iconFilled
                    : menu.iconOutlined}
                </ListItemIcon>
                <ListItemText
                  primary={menu.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Drawer>

      {/* Children components */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 5,
          mt: 10,
          width: "20px",
        }}
      >
        <Box
          sx={{
            width: "85%",
            height: "75vh",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
