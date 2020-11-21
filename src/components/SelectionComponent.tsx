import React, {FC} from 'react';
/* import { ICurrency } from './types' */
import { ISelectionComponentProps } from './types'
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
const menuItemConstructor = (currency: string, index: number) => {
  return (
  <MenuItem
    key={index}
    value={currency}
  >
    <ListItemIcon>
      {iconHandler('selection', currency)}
    </ListItemIcon>
    {console.log(currency)}
    {currency}
  </MenuItem>
  )
}

const SelectionComponent: FC<ISelectionComponentProps> = ({ 
  icon, 
  name, 
  value, 
  currencySelectHandler, 
  currenciesList
}) => {
return (  
  <ListItem>
    {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
    <Select
      disableUnderline
      name={name}
      IconComponent={iconComponent}
      value={value}
      onChange={(event) => handleChange(event, currencySelectHandler)}>
      {(currenciesList.length !== 0) && currenciesList.map((currency, index) => (
        menuItemConstructor(currency, index)
      ))}
    </Select>
  </ListItem>
)}

export { SelectionComponent }