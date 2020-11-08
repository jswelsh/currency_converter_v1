import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { 
  Select, 
  MenuItem, 
  ListItem,
  ListItemIcon, 
} from '@material-ui/core';
import { handleChange } from '../helpers/selectionHelper'
import { iconHandler } from '../helpers/compareHelper'

const iconComponent = () => {
  return (
    <ExpandMoreIcon />
  )};
  
  
export function SelectionComponent (props) {
  const { 
    icon, 
    name, 
    value, 
    setter, 
    currenciesList
  } = props;
  
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
          <MenuItem
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