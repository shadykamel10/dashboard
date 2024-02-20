import {
  styled,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  Avatar,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MuiDrawer from "@mui/material/Drawer";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";

import {
  AccountCircleOutlined,
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  MenuBookOutlined,
  PeopleAltOutlined,
  PieChartOutlineOutlined,
  ReceiptOutlined,
  ShowChartOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(
  // @ts-ignore
  ({ theme, open }) => ({
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
  })
);

// eslint-disable-next-line react/prop-types
const Sidebar = ({ open, handleDrawerClose }) => {
  const navigate = useNavigate();
  const loction =useLocation()
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));
  const theme = useTheme();

  const Array1 = [
    { text: "dashboard", icon: <HouseOutlinedIcon />, path: "/" },
    { text: "mangeTeam", icon: <PeopleAltOutlined />, path: "/team" },
    {
      text: "Contacts information",
      icon: <ContactsOutlined />,
      path: "/contact",
    },
    { text: "Invoices Balance", icon: <ReceiptOutlined />, path: "/invoices" },
  ];

  const Array2 = [
    { text: "profile team", icon: <AccountCircleOutlined />, path: "/" },
    { text: "mangeTeam", icon: <PeopleAltOutlined />, path: "/form" },
    { text: "calender", icon: <CalendarTodayOutlined />, path: "/calender" },
    { text: "Faq page", icon: <HelpOutlineOutlined />, path: "/faq" },
  ];
  const Array3 = [
    { text: "Bar chart", icon: <BarChartOutlined />, path: "/bar" },
    { text: "pie chart", icon: <PieChartOutlineOutlined />, path: "/pie" },
    { text: "line chart", icon: <ShowChartOutlined />, path: "/line" },
    {
      text: "geoghraphy chart",
      icon: <MenuBookOutlined />,
      path: "/geoghraphy",
    },
  ];
  return (
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

      <Avatar
        sx={{ mx: "auto", my: 1, transition: 0.25 }}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
      />
      <Typography
        align="center"
        variant="body1"
        component="h2"
        sx={{ fontSize: open ? "15px" : "0", transition: 0.25 }}
      >
        shady
      </Typography>
      <Typography
        align="center"
        variant="body1"
        component="h2"
        sx={{
          fontSize: open ? "15px" : "0",
          transition: 0.25,
          color: theme.palette.primary.main,
        }}
      >
        admin
      </Typography>

      <Divider />

      <List>
        {Array1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
            onClick={() => {
              navigate(item.path);
            }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:loction.pathname===item.path?"gray":null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:loction.pathname===item.path?"gray":null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {Array3.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:loction.pathname===item.path?"gray":null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
