import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { iconHandler } from '../helpers/compareHelper';
import { Grid, } from '@material-ui/core';
import { ConvertViewIntroCard } from '../components/ConvertViewIntroCard';
import { ConvertViewFrontsideCard } from '../components/ConvertViewFrontsideCard';
import { ConvertViewBacksideCard } from '../components/ConvertViewBacksideCard';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
const drawerWidth = 240;
const drawerClosed = 100;
const data = require('../helpers/currency.json'); // forward slashes will depend on the file location
const useStyles = makeStyles((theme) => ({
card: {
  borderRadius: 12,
  margin: 'auto',
  minWidth: 400,
},
cardHeader: {
  backgroundColor: 'secondary'
},
avatar: {
  width: 60,
  height: 60,
  margin: 'auto',
},
heading: {
  fontSize: 18,
  fontWeight: 'bold',
  letterSpacing: '0.5px',
  marginTop: 8,
  marginBottom: 0,
},
drawerClose: {
  marginLeft: drawerClosed,
  width: `calc(95% - ${drawerClosed}px)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
},
drawerOpen: {
  marginLeft: drawerWidth,
  width: `calc(95% - ${drawerWidth}px)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  })
}
}));
const ConvertView = ({ opendrawer, fromCurrency, toCurrency, toStart, converted, fromIntro, toIntro, recentRateHistory }) => {
const classes = useStyles();
return (React.createElement(React.Fragment, null,
  React.createElement(Grid, { container: true, justify: 'center', className: clsx({
    [classes.drawerOpen]: opendrawer,
    [classes.drawerClose]: !opendrawer
  }) }, [
  [fromCurrency, toStart],
  [toCurrency, converted]
  ].map(([currency, amount]) => (React.createElement(Flippy, { flipOnHover: false, flipOnClick: true, flipDirection: "horizontal" },
    "  ",
    React.createElement(FrontSide, null,
      React.createElement(ConvertViewFrontsideCard, { currency: currency, data: data, amount: amount, avatar: iconHandler('converter', currency) })),
    React.createElement(BackSide, null,
      React.createElement(ConvertViewBacksideCard, { currency: currency, data: data, recentRateHistory: recentRateHistory, converted: converted, avatar: iconHandler('converter', currency) })))))),
  React.createElement(Grid, { container: true, justify: 'center', className: clsx({
    [classes.drawerOpen]: opendrawer,
    [classes.drawerClose]: !opendrawer
  }) },
    React.createElement(Flippy, { flipOnHover: false, flipOnClick: true, flipDirection: "vertical" },
      "  ",
    React.createElement(FrontSide, null,
      React.createElement(ConvertViewIntroCard, { currency: fromCurrency, intro: fromIntro, data: data, avatar: iconHandler('converter', fromCurrency) })),
    React.createElement(BackSide, null,
      React.createElement(Grid, { container: true, justify: 'center' },
        React.createElement(ConvertViewIntroCard, { currency: toCurrency, intro: toIntro, data: data, avatar: iconHandler('converter', toCurrency) })))))));
};
export { ConvertView };
//# sourceMappingURL=ConvertView.js.map