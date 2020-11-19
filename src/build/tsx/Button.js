import React from 'react';
import { ListItemText, ListItemIcon, FormControl, ListItem, } from '@material-ui/core';
import Exchange from '@material-ui/icons/Shuffle';
const Button = ({ primary, handleSubmit }) => {
    return (React.createElement(FormControl, null,
        React.createElement(ListItem, { button: true, onClick: handleSubmit },
            React.createElement(ListItemIcon, null,
                React.createElement(Exchange, { color: 'secondary' })),
            React.createElement(ListItemText, { color: '#000', primary: primary }))));
};
export { Button };
//# sourceMappingURL=Button.js.map