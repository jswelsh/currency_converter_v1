import React from 'react';
import { ConvertViewCardTable } from './ConvertViewCardTable';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, CardHeader, CardContent, IconButton, Typography } from '@material-ui/core';
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
const ConvertViewBacksideCard = ({ recentRateHistory, converted, currency, avatar, name, }) => {
    const classes = useStyles();
    return (React.createElement(Card, { className: classes.card },
        React.createElement(CardHeader, { title: currency && name, titleTypographyProps: { align: 'left', variant: "h4" }, subheader: currency, subheaderTypographyProps: { align: 'left' }, avatar: avatar, action: React.createElement(IconButton, { "aria-label": "settings" },
                React.createElement(Typography, { variant: "h4", color: "secondary", className: classes.icon }, "Flip"),
                React.createElement(ThreeDRotationIcon, { fontSize: 'large', className: classes.icon })) }),
        React.createElement(CardContent, null,
            React.createElement(Grid, { container: true, justify: "center" },
                React.createElement(Grid, { item: true },
                    React.createElement(ConvertViewCardTable, { recentRateHistory: recentRateHistory, converted: converted }))))));
};
export { ConvertViewBacksideCard };
//# sourceMappingURL=ConvertViewBacksideCard.js.map