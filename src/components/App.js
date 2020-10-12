import React from 'react';
import './App.css';
import ExchangeHistoryGraph from './ExchangeHistoryGraph';
import useAppData from '../hooks/useAppData';
import { BrowserRouter as Router, Route} from "react-router-dom";

import { MemoryRouter } from 'react-router';
import 'fontsource-roboto';
import ToolBar from './ToolBar';
import CompareView from './CompareView'
import ConvertView from './ConvertView'


export default function App() {
  const {
    state,
    convertHistoryHandler,
    modeHandler,
    compareListHandler,

  } = useAppData();

  return (
    <main className="layout">
      <MemoryRouter>
        <div className="App">
        <Route path="/History"  render={ () => (
            <ExchangeHistoryGraph
              history={state.history}
            />)}
          />
        <ToolBar 
          fromCurrency={state.fromCurrency}
          toCurrency={state.toCurrency}
          convertHistoryHandler={convertHistoryHandler}
          modeHandler={modeHandler}
          compareListHandler={compareListHandler}
          compareList={state.compareList}
          currenciesList={state.currenciesList}
          mode={state.mode}
          /* setDateRange={state.setDateRange} */
          />
          <Route path="/Convert"  render={ () => (
            <ConvertView
              result={state.result}
            />)}
          />
          <Route path="/History"  render={ () => (
            <ExchangeHistoryGraph
              history={state.history}
            />)}
          />
          <Route path="/Compare" render={props => (
            <CompareView 
              compareList={state.compareList}
            />
          )}/>
            
        </div>
        </MemoryRouter>
    </main>
  );
}
