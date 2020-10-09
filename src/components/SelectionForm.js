import React from 'react';
import { 
  FormControl, 
  List,
  ListItem,
  ListItemText,
  ListItemIcon, 
} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import { handleClick } from '../helpers/selectionHelper'
import SelectionComponent from './SelectionComponent'

export default function HistorySelectionForm(props) {
  return (
    <FormControl>
      <List>
        {props.mode === 'History' && (
          <>
            <SelectionComponent 
              props={props.mode}
              icon={<ArrowBackIosIcon />}
              name={'fromSelector'}
              value={props.fromCurrency}
              setter={props.setFromCurrency}
              currenciesList={props.currenciesList
              }
            />
            <ListItem
              button
              onClick={(event) => handleClick(props)}
            >
              <ListItemIcon> 
                <SwapVertIcon/>
              </ListItemIcon>
              <ListItemText primary="Swap Currencies" />
            </ListItem>

            <SelectionComponent 
              props={props.mode}
              icon={<ArrowForwardIosIcon />}
              name={'toSelector'}
              value={props.toCurrency}
              setter={props.setToCurrency}
              currenciesList={props.currenciesList}
            />
          </>
        )}
        {props.mode === 'Compare' && (
          <SelectionComponent
            props={props.mode} 
            icon={<ArrowBackIosIcon />}
            name={'baseSelector'}
            value={props.baseCurrency}
            setter={props.setBaseCurrency}
            currenciesList={props.currenciesList}
          />
        )}
      </List>
    </FormControl>
    
  )
}