import React, {FC} from 'react';
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
const menuItemConstructor = (currency: string) => {
  return (
  <MenuItem
    key={currency}
    value={currency}
  >
    <ListItemIcon>
      {iconHandler('selection', currency)}
    </ListItemIcon>
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
      {currenciesList.map((currency) => (
        menuItemConstructor(currency)
      ))}
    </Select>
  </ListItem>
)}

export { SelectionComponent }