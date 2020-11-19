import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { iconHandler } from '../helpers/compareHelper';
import { Grid, Card, ListItem, ListItemText, Typography, } from '@material-ui/core';
var data = require('../helpers/currency.json'); // forward slashes will depend on the file location
var useStyles = makeStyles(function (theme) { return ({
    selectedSymbol: {
        marginRight: 16,
        color: 'red'
    },
    notSelectedSymbol: {
        marginRight: 16,
    },
    Card: {
        borderRadius: 12,
    },
    ListItem: {
        backgroundColor: '#212121',
        padding: theme.spacing(1),
        textAlign: 'center',
        minHeight: 136,
        "&:hover": {
            textDecoration: "none",
            backgroundColor: "#ff8cb0",
        }
    },
    selected: {
        backgroundColor: '#009868',
        color: '#212121',
    },
}); });
var gridBuilder = function (props) {
    return React.createElement(Grid, { item: true, xs: 3 },
        " ",
        props,
        " ");
};
var CompareListItem = function (_a) {
    var _b;
    var currencySelectHandler = _a.currencySelectHandler, fromCurrency = _a.fromCurrency, currency = _a.currency, primary = _a.primary;
    var classes = useStyles();
    var CurrencySymbol = function (currency) {
        return (React.createElement(Typography, { variant: 'h5', color: fromCurrency !== currency && 'secondary' || 'primary' }, data[currency]['symbol_native']));
    };
    return (React.createElement(Card, { className: classes.Card },
        React.createElement(ListItem, { button: true, onClick: function () { return currencySelectHandler(currency); }, className: clsx(classes.ListItem, (_b = {},
                _b[classes.selected] = (fromCurrency === currency),
                _b)) },
            React.createElement(Grid, { container: true, spacing: 1, direction: "row", justify: "space-around" },
                gridBuilder(iconHandler('compare', currency)),
                gridBuilder(React.createElement(ListItemText, null,
                    React.createElement(Typography, { variant: 'h5' }, currency),
                    React.createElement(Typography, null, data[currency]['name']))),
                gridBuilder(React.createElement("div", null,
                    CurrencySymbol(currency),
                    React.createElement(ListItemText, { primary: primary })))))));
};
export { CompareListItem };
//# sourceMappingURL=CompareListItem.js.map