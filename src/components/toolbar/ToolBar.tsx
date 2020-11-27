import React, {FC} from 'react';
import clsx from 'clsx';
import { IToolBarProps } from '../types'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { 
  Drawer, 
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { TabSelector } from './TabSelector';
import { UserInputTab } from './UserInputTab';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.light
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen})},
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen})},
  menuButton: {
    marginRight: 36},
  hide: {
    display: "none"},
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"},
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen})},
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen}),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1}},
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar},
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)},
}));

const ToolBar: FC<IToolBarProps> = ({
  convertHistoryHandler,
  compareListHandler,
  currenciesList,
  convertHandler,
  setDrawerOpen,
  setFromCurrency,
  setToCurrency,
  fromCurrency,
  toCurrency,
  modeHandler,
  opendrawer,
  mode,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

//maybe get rid of css baseline later
return (
  <>
    <CssBaseline /> 
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: opendrawer
      })}
    >
      <Toolbar >
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.icon, classes.menuButton, {
            [classes.hide]: opendrawer})}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          CurrExC
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: opendrawer,
        [classes.drawerClose]: !opendrawer})}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: opendrawer,
          [classes.drawerClose]: !opendrawer}),}}
    >
        <div className={classes.toolbar}>
          <IconButton
            className={classes.icon}
            onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <TabSelector
          modeHandler={modeHandler}
          mode={mode}
        /> 
        <Divider/>
        
        <div className={clsx({
              [classes.hide]: mode !== 'Converter'
            })}>
        </div>
        {mode !== 'SignUp' && mode !== 'SignIn' && <UserInputTab
            convertHistoryHandler={convertHistoryHandler}
            compareListHandler={compareListHandler}
            currenciesList={currenciesList}
            convertHandler={convertHandler}
            setFromCurrency={setFromCurrency}
            setToCurrency={setToCurrency}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            opendrawer={opendrawer}
            mode={mode}/>
        }
        <div 
          className={clsx({
            [classes.hide]: mode !== 'Compare'})}
        >
        </div>
        <Divider />  
    </Drawer>
    <main className={classes.content}>
      <div className={classes.toolbar} />
    </main>
  </>
);}
export { ToolBar }