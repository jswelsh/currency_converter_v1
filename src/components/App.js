import React from 'react';
import './App.css';
import ExchangeHistoryGraph from './ExchangeHistoryGraph';
import useAppData from '../hooks/useAppData';

import 'fontsource-roboto';
import ToolBar from './ToolBar';
import CompareView from './CompareView'
import ConvertView from './ConvertView'
import { Grid } from '@material-ui/core';


export default function App() {
  const {
    state,
    convertHistoryHandler,
    modeHandler,
    compareListHandler,

  } = useAppData();

  return (
    <main className="layout">

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
          <Grid    container
            direction="column"
            justify="flex-start"
            alignItems="center" >
            
              {state.mode === 'Convert' && (
                <ConvertView
                  result={state.result}
              />)}
              {state.mode === 'History' && (
                <ExchangeHistoryGraph
/*                 className="App"
 */
                  history={state.history}
              />)}
              {state.mode === 'Compare' && (
                <CompareView 
                  compareList={state.compareList}
                />)}
      </Grid>
    </main>
  );
}
