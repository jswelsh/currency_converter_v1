import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Select, 
  MenuItem, 
  ListItem,
  ListItemIcon, 
} from '@material-ui/core';
import { handleChange } from '../helpers/selectionHelper'
import { iconHandler } from '../helpers/compareHelper'

const useStyles = makeStyles((theme) => ({
  MenuItem: {
    padding: theme.spacing(1),
    alignItems:'flex-start',
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
}));

const iconComponent = () => {
  return (
    <ExpandMoreIcon />
  )};
  
  
export default function SelectionComponent (props) {
  const {icon, name, value, setter, currenciesList} = props;
  const classes = useStyles();

  return (
    <ListItem>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <Select
        disableUnderline
        name={name}
        IconComponent={iconComponent}
        value={value}
        onChange={(event) => handleChange(event, setter)}
      >
        {currenciesList.map(currency => (
          <MenuItem className={classes.MenuItem}
            key={currency} 
            value={currency}
          >
            <ListItemIcon>
              {iconHandler('selection', currency)}
            </ListItemIcon>
            {currency}
          </MenuItem>
        ))}
      </Select>
    </ListItem>
  )
}