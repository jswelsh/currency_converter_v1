import { FormControl } from '@material-ui/core';
import React from 'react';
import { ListItem, ListItemText, ListItemIcon, } from '@material-ui/core';
import Exchange from '@material-ui/icons/Shuffle';
var Button = function (_a) {
    var primary = _a.primary, handleSubmit = _a.handleSubmit;
    return (React.createElement(FormControl, null,
        React.createElement(ListItem, { button: true, onClick: handleSubmit },
            React.createElement(ListItemIcon, null,
                React.createElement(Exchange, { color: 'secondary' })),
            React.createElement(ListItemText, { color: '#000', primary: primary }))));
};
export { Button };
//# sourceMappingURL=Button.js.map