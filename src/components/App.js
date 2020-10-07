import React from 'react';
import './App.css';
import Converter from './converter/Converter';
import ExchangeHistoryGraph from './ExchangeHistoryGraph';
import MiniDrawer from './ToolBar';
import useAppData from '../hooks/useAppData';
import { BrowserRouter as Router, Route} from "react-router-dom";

import { MemoryRouter } from 'react-router';
import 'fontsource-roboto';
import ToolBar from './ToolBar';
import ExchangeHistoryButton from './ExchangeHistoryButton';
import ExchangeHistoryTab from './ExchangeHistoryTab';

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
        <ToolBar 
          convertHistoryHandler={convertHistoryHandler}
/*           selectHandler={selectHandler}
          fromCurrency={state.fromCurrency}
          toCurrency={state.toCurrency} */
          currenciesList={state.currenciesList}
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
            <ExchangeHistoryGraph
              history={state.history}
            />)}
          />
{/*           <Route path="/Compare" render={props => (
            <CalendarComponent />
          )}/> */}
            
        </div>
        </MemoryRouter>
    </main>
  );
}
