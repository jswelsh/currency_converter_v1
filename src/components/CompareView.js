import React from 'react';
import clsx from 'clsx';
import {
  makeStyles
} from '@material-ui/core/styles';
import {
  CompareListItem
} from '../components/CompareListItem';
import {
  Grid,
  List
} from '@material-ui/core';
const drawerWidth = 280;
const drawerClosed = 100;
const useStyles = makeStyles((theme) => ({
  drawerClose: {
    //marginLeft: drawerClosed,
    marginRight: 'min(100px, 15%)',
    marginLeft: 'min(100px, 15%)',
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
  },
  ListItem: {
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: '#212121',
    minHeight: 100
  },
  symbol: {
    marginRight: 16
  }
}));
const CompareView = ({
  setFromCurrency,
  fromCurrency,
  compareList,
  opendrawer,
  setAmount
}) => {
  const currencySelectHandler = (currency) => {
    setFromCurrency(currency);
  };
  const classes = useStyles();
  return (React.createElement(List, {
      className: clsx({
        [classes.drawerOpen]: opendrawer,
        [classes.drawerClose]: !opendrawer
      })
    },
    React.createElement(Grid, {
      container: true,
      spacing: 2,
      alignItems: "center"
    }, compareList.map(({
      currency,
      value
    }) => (React.createElement(Grid, {
        item: true,
        xs: 12,
        md: opendrawer ? 12 : 6,
        lg: opendrawer ? 6 : 4,
        key: currency
      },
      React.createElement(CompareListItem, {
        currencySelectHandler: currencySelectHandler,
        fromCurrency: fromCurrency,
        currency: currency,
        primary: value,
        setAmount: setAmount
      })))))));
};
export {
  CompareView
};
//# sourceMappingURL=CompareView.js.map