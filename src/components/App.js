import React from 'react';
import './App.css';
import ExchangeHistoryGraph from './ExchangeHistoryGraph';
import useAppData from '../hooks/useAppData';

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
        <div className="App">
          <ToolBar 
            fromCurrency={state.fromCurrency}
            toCurrency={state.toCurrency}
            convertHistoryHandler={convertHistoryHandler}
            modeHandler={modeHandler}
            compareListHandler={compareListHandler}
            compareList={state.compareList}
            currenciesList={state.currenciesList}
            mode={state.mode}
            />
          {state.mode === 'Convert' && (
            <ConvertView
              result={state.result}
          />)}
          {state.mode === 'History' && (
            <ExchangeHistoryGraph
              history={state.history}
          />)}
          {state.mode === 'Compare' && (
            <CompareView 
              compareList={state.compareList}
            />)}
          </div>
    </main>
  );
}
