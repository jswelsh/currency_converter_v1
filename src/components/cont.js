import React from "react";
import { Link } from 'react-router-dom';
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import History from "@material-ui/icons/Timeline";
import Converter from "@material-ui/icons/Transform";
import Compare from "@material-ui/icons/Sort";

import { ToggleButton } from '@material-ui/lab';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#222222"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
//maybe get rid of css baseline later
  return (
    <div className={classes.root}>
      <CssBaseline /> 
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Currency Exchange
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        {/* maybe insert a header, for tools, or remove divider, kinda looks off?! */}
{/*         <Divider />
        <List>
          <ListItem button key={Converter} component={Link} to={'Converter'}>  
            <ListItemIcon>
              <Converter />
            </ListItemIcon>
            <ListItemText primary={'Converter'} />
          </ListItem>

          <ListItem button key={History} component={Link} to={'History'} onClick={() => props.convertHistoryHandler()}>  
            <ListItemIcon>
              <History />
            </ListItemIcon>
            <ListItemText primary={'History'} />
          </ListItem>

          <ListItem button key={Compare} component={Link} to={'Compare'}>  
            <ListItemIcon>
              <Compare />
            </ListItemIcon>
            <ListItemText primary={'Compare'} />
          </ListItem> */}
        
        <Divider />
        <List>
          {["Converter", "History", "Compare"].map((text, index) => (
            <div>
              {text === "History" ? (
                <ListItem button key={text} exclusive component={Link} to={`/${text}` } >
                <ListItemIcon><History /></ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
              ) : text === "Converter" ? (
                <ListItem button key={text} exclusive component={Link} to={`/${text}`}>
                <ListItemIcon><Converter /></ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
              ) : (
                <ListItem button key={text} exclusive component={Link} to={`/${text}`}>
                <ListItemIcon><Compare /></ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
              )}
              </div>
          ))}



         {/*  {["Converter", "History", "Compare"].map((text, index) => ( */}
{/*             <Link to = {`/${text}`}>
              <ListItem button key={text}>
                <ListItemIcon>
                  {text === "Converter" ? (
                    <Converter />
                  ) : text === "History" ? (
                    <Hisotry />
                  ) : (
                    <Compare />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
                  </Link> */}
{/*             <div>
            {text === "History" ? (
              <ListItem button key={text} component={Link} to={`/${text}`} onClick={() => props.convertHistoryHandler()}>  
              ) : ( 
              <ListItem button key={text} component={Link} to={`/${text}`}> 
              </div>
            )}
            <ListItemIcon>
              {text === "Converter" ? (
                <Converter />
                ) : text === "History" ? (
                  <Hisotry />
                  ) : (
                    <Compare />
                    )}
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
          ))} */}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
