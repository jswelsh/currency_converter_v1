import React, { useState } from "react";
import { 
  Popover,  
  Typography,
  FormControl, 
  ListItem, 
  ListItemIcon, 
  ListItemText  
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CalendarIcon from '@material-ui/icons/CalendarToday';

import DatePickerComponent from "./DatePickerComponent"

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(3),
  },
  typography: {
    padding: theme.spacing(1),
  },

}));


export default function CalendarPopOverComponent(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
    <FormControl>
      <ListItem
        button
        onClick={handleClick}
      >
        <ListItemIcon>
          <CalendarIcon />
        </ListItemIcon>
        <ListItemText primary={'Date Range'} />
      </ListItem>
    </FormControl>
      <Popover
        classes={{
          paper: classes.paper,
        }} 
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <Typography className={classes.typography}>To view the exchange history of "Foo" and "Bar", choose a date range.</Typography>
        <DatePickerComponent />
      </Popover>
    </>
  );
};

