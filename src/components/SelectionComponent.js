import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { 
  Select, 
  MenuItem, 
  ListItem,
  ListItemIcon, 
} from '@material-ui/core';

const iconComponent = () => {
  return (
    <ExpandMoreIcon />
  )};

export default function SelectionComponent (props) {
  const {icon, name, value, handleChange, currenciesList} = props;
  return (
      <ListItem>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <Select
          disableUnderline
          name={name}
          IconComponent={iconComponent}
          value={value}
          onChange={handleChange}
        >
          {currenciesList.map(currency => (
            <MenuItem 
              key={currency} 
              value={currency}
            >{currency}
            </MenuItem>
          ))}
        </Select>
      </ListItem>
  
  )

}