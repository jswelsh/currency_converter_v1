import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@material-ui/core';
const ConvertViewCardTable = ({ recentRateHistory, converted }) => {
    const cellConstructor = (value) => {
        //styling the delta of previous days to being green +, white =, red -
        const delta = (parseInt(value) > 0) ?
            React.createElement(Typography, { color: 'secondary' }, '+' + value + '%') : (parseInt(value) < 0) ?
            React.createElement(Typography, { color: 'error' }, value + '%') :
            React.createElement(Typography, { color: 'primary' }, value + '%');
        return delta;
    };
    return (React.createElement(TableContainer, { component: Paper },
        React.createElement(Table, { size: "small", "aria-label": "a dense table" },
            React.createElement(TableHead, null,
                React.createElement(TableRow, { key: 'date' },
                    React.createElement(TableCell, { component: "th", scope: "column" }, 'date'),
                    recentRateHistory && recentRateHistory.map(({ date }) => {
                        return React.createElement(TableCell, { align: "right" }, date);
                    }))),
            React.createElement(TableBody, null,
                React.createElement(TableRow, { key: 'value' },
                    React.createElement(TableCell, { component: "th", scope: "row" }, 'value'),
                    recentRateHistory && recentRateHistory.map(({ value }) => {
                        return React.createElement(TableCell, { align: "right" }, value);
                    })),
                React.createElement(TableRow, { key: 'delta' },
                    React.createElement(TableCell, { component: "th", scope: "row" }, 'the ∆'),
                    recentRateHistory && recentRateHistory.map(({ value }) => {
                        return (React.createElement(TableCell, { align: "right" }, cellConstructor(((parseFloat(value) - parseFloat(converted.toString())) / (converted) * 100).toFixed(3))));
                    }))))));
};
export { ConvertViewCardTable };
//# sourceMappingURL=ConvertViewCardTable.js.map