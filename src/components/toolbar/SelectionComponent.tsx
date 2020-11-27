import React, {FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ISelectionComponentProps } from '../types'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { 
  Select, 
  MenuItem, 
  ListItem,
  ListItemIcon, 
} from '@material-ui/core';
import { handleChange } from '../../helpers/selectionHelper'
import { iconHandler } from '../../helpers/compareHelper'

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.light
  }
}));

const IconComponent = () => {
  const classes = useStyles();
return (
  <ExpandMoreIcon className={classes.icon}/>
)};
const menuItemConstructor = (currency: string) => {
  return (
  <MenuItem
    key={currency}
    value={currency}
  >
    <ListItemIcon>
      {iconHandler({
        mode: 'selection', 
        currency: currency})}
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
      IconComponent={IconComponent}
      value={value}
      onChange={(event) => handleChange({event, setter:currencySelectHandler})}>
      {currenciesList.map((currency) => (
        menuItemConstructor(currency)
      ))}
    </Select>
  </ListItem>
)}

export { SelectionComponent }