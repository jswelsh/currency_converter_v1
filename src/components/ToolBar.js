import React from "react";

import { Link  } from 'react-router-dom';
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { 
  Drawer, 
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText 
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import History from "@material-ui/icons/Timeline";
import Converter from "@material-ui/icons/Transform";
import Compare from "@material-ui/icons/Sort";

import UserInputTab from "./UserInputTab";
import ConverterTab from "./ConverterTab";


/* import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'; */

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
  history : {
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function ListItemLink(props) {
  const { icon, primary, to, setModeHandler } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );
  const onClickHandler = () => {
    setModeHandler(primary)
  }

  return (
    <li>
      <ListItem
        button
        component={renderLink}
        onClick={onClickHandler}
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  setModeHandler: PropTypes.string.isRequired,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default function ToolBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [openDrawer, setDrawerOpen] = React.useState(false);
  /* const [calendarVisibility, calendarVisibility] = React.useState(false); */


  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

//maybe get rid of css baseline later
  return (
    <div className={classes.root}>
      <CssBaseline /> 
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: openDrawer
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: openDrawer
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
          [classes.drawerOpen]: openDrawer,
          [classes.drawerClose]: !openDrawer
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: openDrawer,
            [classes.drawerClose]: !openDrawer
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
          
        {/* maybe insert a header, for tools, or remove divider, kinda looks off?!  */}
        <Divider />
        {/*    <Route>
              {({ location }) => (
                <Typography gutterBottom>
                  Current route: {location.pathname}
                </Typography>
              )}
            </Route> */}
            
            <List aria-label="currency exchange views">
              <ListItemLink 
                setModeHandler={props.setModeHandler} 
                to={'Converter'} 
                primary="Converter" 
                icon={<Converter />} />
              <ListItemLink 
                setModeHandler={props.setModeHandler} 
                to={'History'} 
                primary="History" 
                icon={<History />} />
              <ListItemLink 
                setModeHandler={props.setModeHandler} 
                to={'Compare'} 
                primary="Compare" 
                icon={<Compare />} />
            </List>
          
          <Divider/>
          <div className={clsx({
                [classes.hide]: props.mode !== 'Converter'
              })}>
          </div>
{/*  <div className={clsx({
                [classes.hide]: props.mode !== 'History'
              })}> */}
            <UserInputTab
              convertHistoryHandler={props.convertHistoryHandler}
              currenciesList={props.currenciesList}
              mode={props.mode}
            />
{/*           </div> */}
          <div className={clsx({
                [classes.hide]: props.mode !== 'Compare'
              })}>
          </div>
          <Divider />  
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}