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
        {/* {props.mode === 'History' && ( */}
          <>
            <SelectionComponent 
              props={props.mode}
              icon={<ArrowBackIosIcon />}
              name={'fromCurrency'}
              value={props.fromCurrency}
              setter={props.currencySelectHandler}
              currenciesList={props.currenciesList
              }
            />
            {props.mode === 'History' && (
            <>
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
              
              <SelectionComponent 
                props={props.mode}
                icon={<ArrowForwardIosIcon />}
                name={'toCurrency'}
                value={props.toCurrency}
                setter={props.currencySelectHandler}
                currenciesList={props.currenciesList}
              />
            </>
            )}
            
          </>
        
{/*         {props.mode === 'Compare' && (
          <SelectionComponent
            props={props.mode} 
            icon={<ArrowBackIosIcon />}
            name={'fromSelector'}
            value={props.toCurrency}
            setter={props.currencySelectHandler}
            currenciesList={props.currenciesList}
          /> */}
      {/*   )} */}
      </List>
    </FormControl>
    
  )
}