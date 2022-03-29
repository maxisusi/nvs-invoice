import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { closedMixin, drawerWidth, openedMixin } from "./Helper";

import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaidIcon from "@mui/icons-material/Paid";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import React from "react";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const useHeader = () => {
  // Drawer White Background Header
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  // Header Animation
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  //   Drawer Component
  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  //   Menu items
  const menuItems = [
    {
      name: "Dashboard",
      iconOutlined: <DashboardOutlinedIcon />,
      iconFilled: <DashboardIcon color="primary" />,
      link: "/",
    },
    {
      name: "Clients",
      iconOutlined: <AccountCircleOutlinedIcon />,
      iconFilled: <AccountCircleIcon color="primary" />,
      link: "/clients",
    },
    {
      name: "Invoices",
      iconOutlined: <InsertDriveFileOutlinedIcon />,
      iconFilled: <InsertDriveFileIcon color="primary" />,
      link: "/invoices",
    },
    {
      name: "Recieved Payments",
      iconOutlined: <PaidOutlinedIcon />,
      iconFilled: <PaidIcon color="primary" />,
      link: "",
    },
  ];

  //   Open or close the drawer
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return {
    open,
    setOpen,
    handleDrawerOpen,
    handleDrawerClose,
    AppBar,
    Drawer,
    DrawerHeader,
    menuItems,
  };
};
