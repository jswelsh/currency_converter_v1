import React from 'react';
import { 
  FormControl,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@material-ui/core';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import FromIcon from '@material-ui/icons/ArrowDownward';
import ToIcon from '@material-ui/icons/SubdirectoryArrowRight';
import SwapVertIcon from '@material-ui/icons/Cached';
import { handleClick } from '../helpers/selectionHelper';
import SelectionComponent from './SelectionComponent';

export default function HistorySelectionForm(props) {
  return (
    <FormControl>
      <List>
        <>
          {props.mode !== 'History' && (
            
            <SelectionComponent 
              props={props.mode}
              icon={<CompareArrowsIcon />}
              name={'fromCurrency'}
              value={props.fromCurrency}
              setter={props.currencySelectHandler}
              currenciesList={props.currenciesList
              }
            />
          )}
          {props.mode === 'History' && (
          <>   
            <SelectionComponent 
              props={props.mode}
              icon={<FromIcon />}
              name={'fromCurrency'}
              value={props.fromCurrency}
              setter={props.currencySelectHandler}
              currenciesList={props.currenciesList
              }
            />
            <SelectionComponent 
              props={props.mode}
              icon={<ToIcon />}
              name={'toCurrency'}
              value={props.toCurrency}
              setter={props.currencySelectHandler}
              currenciesList={props.currenciesList}
            />
            <ListItem
              button
              onClick={(event) => handleClick({
                toCurrency:props.toCurrency, 
                fromCurrency:props.fromCurrency, 
                setter:props.currencySelectHandler
              })}
            >
              <ListItemIcon> 
                <SwapVertIcon/>
              </ListItemIcon>
              <ListItemText primary="Swap Currencies" />
            </ListItem>
          </>
          )}
        </>
      </List>
    </FormControl>
  )
}