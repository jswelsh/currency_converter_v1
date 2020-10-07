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

import CalendarComponent from './CalendarComponent'
import CurrencyForm from './CurrencyForm'

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
/*   iconHidden : {
    margin: theme.spacing(1,3)
  }, */
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem
        button
        component={renderLink}
        onClick={()=> null}
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

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

/*   const handleChange = (nextView) => {
    
    if(nextView === "History") {
      console.log("ji")
      props.convertHistoryHandler()
    } 
  }; */

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
              <ListItemLink to={'Converter'} primary="Converter" icon={<Converter />} />
              <ListItemLink to={'History'} primary="History" icon={<History />} />
              <ListItemLink to={'Compare'} primary="Compare" icon={<Compare />} />
            </List>
          {/* <Divider/> */}

     {/*        <CurrencyForm 
              convertHistoryHandler={props.convertHistoryHandler}
              selectHandler={props.selectHandler}
              fromCurrency={props.fromCurrency}
              toCurrency={props.toCurrency}
              currenciesList={props.currenciesList}
            /> */}

          <Divider />
        
          <CalendarComponent />

        {/* <List>
          <ListItem 
          button 
          key={Converter} 
          component={Link} 
          to={'Converter'}  
         >
            <ListItemIcon>
              <Converter />
            </ListItemIcon>
            <ListItemText primary={'Converter'} />
          </ListItem>

          <ListItem button 
          key={History} 
          component={Link} 
          to={'History'} 

          onClick={() => handleChange("History")}>  
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
          </ListItem>
          </List> */}
{/*         <Divider />
        <List>
          <ListItem 
          button 
          key={Converter} 
          component={Link} 
          to={'Converter'} 
          disabled={view === "Converter"} 
         >
             
            <ListItemIcon>
              <Converter />
            </ListItemIcon>
            <ListItemText primary={'Converter'} />
          </ListItem>

          <ListItem button 
          key={History} 
          component={Link} 
          to={'History'} 
          disabled={view === "History"} 
          onClick={/* () => handleChange("History")}>  
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
          </ListItem>
          </List> */}
        
{/*         <Divider />
        <ToggleButtonGroup value={view} orientation="vertical" exclusive onChange={handleChange}>
        <List>
          {["Converter", "History", "Compare"].map((text, index) => (
            <div className={classes.icon}>
            {text === "History" ? (
                <ToggleButton value={text} button key={text} component={Link} to={`/${text}` } >
                  <ListItemIcon><History /></ListItemIcon>
                  <ListItemText primary={text} />
                </ToggleButton>
              ) : text === "Converter" ? (
                <ToggleButton value={text} button key={text} component={Link} to={`/${text}` } >
                  <ListItemIcon><Converter /></ListItemIcon>
                  <ListItemText primary={text} />
                </ToggleButton>
              ) : (
              <ToggleButton value={text} key={text} button component={Link} to={`/${text}`}>
                <ListItemIcon><Compare /></ListItemIcon>
                <ListItemText primary={text} />
              </ToggleButton>
              )}
              </div>
            ))}
        </List>
          </ToggleButtonGroup>

 */}
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
        {/* </List> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  );
}
