import React from 'react';
import './App.css';
import Converter from './converter/Converter';
import CurrencyHistoryGraph from './CurrencyHistoryGraph';
import MiniDrawer from './cont';
import useAppData from '../hooks/useAppData';
import {BrowserRouter as Router, Route} from "react-router-dom";
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
      
      <Router>
        <MiniDrawer 
          convertHistoryHandler={convertHistoryHandler}
          />
        <div className="App">
          <Route exact path="/converter" render={props => (
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
          <Route path="/history"  render={props => (
            <CurrencyHistoryGraph
              convertHistoryHandler={convertHistoryHandler}
              history={state.history}
            />)}
          />
        </div>
      </Router>

    </main>
  );
}



/*       {index === 0 ? (
                  <Converter />
                ) : index === 1 ? (
                  <Hisotry />
                ) : (
                  <Compare />
                )} */