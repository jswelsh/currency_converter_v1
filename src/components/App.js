import React, { Fragment } from 'react';
import './App.css';
import Converter from './converter/Converter';
import CurrencyHistoryGraph from './CurrencyHistoryGraph';
import CurrencyForm from './CurrencyForm'
import MiniDrawer from './cont';
import useAppData from '../hooks/useAppData';
import Grid from '@material-ui/core/Grid'
import {BrowserRouter as Router, Route} from "react-router-dom";

import { MemoryRouter } from 'react-router';
import 'fontsource-roboto';

export default function App() {
  const {
    state,
    convertHandler,
    convertHistoryHandler,
    selectHandler,
  } = useAppData();

  return (
    <main className="layout">
      <MemoryRouter>
        <div className="App">
        <MiniDrawer 
          convertHistoryHandler={convertHistoryHandler}
          />
        
          <Route path="/Converter" render={props => (
            <Converter
              result={state.result}
              fromCurrency={state.fromCurrency}
              toCurrency={state.toCurrency}
              amount={state.amount}
              currenciesList={state.currenciesList}
              convertHandler={convertHandler}
              selectHandler={selectHandler}
            />)}
          />      
          <Route path="/History"  render={props => (
            <Fragment>
              <Grid
              container spacing={3}
              alignItems="center"
              justify="center"
            > 
              <CurrencyForm 
                convertHistoryHandler={convertHistoryHandler}
                selectHandler={selectHandler}
                fromCurrency={state.fromCurrency}
                toCurrency={state.toCurrency}
                currenciesList={state.currenciesList}
              />
            </Grid>
             <CurrencyHistoryGraph
    
             history={state.history}
           />
           </Fragment>
            )}
          />
        </div>
        </MemoryRouter>
    </main>
  );
}
