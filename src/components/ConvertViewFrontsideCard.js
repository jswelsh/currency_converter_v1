import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Typography, CardHeader, CardContent, IconButton } from '@material-ui/core';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
const useStyles = makeStyles(() => ({
    card: {
        color: '#fff',
        borderRadius: 12,
        margin: 'auto',
        minWidth: 600,
        minHeight: 296,
    },
    icon: {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 10
    }
}));
const ConvertViewFrontsideCard = ({ currency, symbol, amount, avatar, title, }) => {
    const classes = useStyles();
    console.log(title, symbol);
    return (React.createElement(Grid, { item: true, spacing: 3, key: currency, sm: 12, md: 12, lg: 6 },
        React.createElement(Card, { className: classes.card },
            React.createElement(CardHeader, { title: title, titleTypographyProps: { align: 'left', variant: "h4" }, subheader: currency, subheaderTypographyProps: { align: 'left' }, avatar: avatar, action: React.createElement(IconButton, { "aria-label": "settings" },
                    React.createElement(Typography, { variant: "h4", color: "secondary", className: classes.icon }, "Flip"),
                    React.createElement(ThreeDRotationIcon, { fontSize: 'large', className: classes.icon })) }),
            React.createElement(CardContent, null,
                React.createElement(Grid, { container: true, justify: "center", style: { marginTop: 40 } },
                    React.createElement(Grid, { item: true },
                        React.createElement(Typography, { component: "h2", variant: "h2", color: "secondary" }, symbol)),
                    React.createElement(Grid, { item: true },
                        React.createElement(Typography, { variant: "h2", color: "primary" }, amount)))))));
};
export { ConvertViewFrontsideCard };
//# sourceMappingURL=ConvertViewFrontsideCard.js.map