import React from 'react';
import './App.css';
import 'fontsource-roboto';
import useAppData from '../hooks/useAppData';
import theme from '../styles/AppStyles'
import { ThemeProvider } from '@material-ui/core'
import { Grid } from '@material-ui/core';
import { ToolBar } from './ToolBar';
import { CompareView } from './CompareView'
import { ConvertView } from './ConvertView'
import { ExchangeHistoryGraph } from './ExchangeHistoryGraph';


export default function App() {
  const [opendrawer, setDrawerOpen] = React.useState(false);
  const {
    state,
    convertHistoryHandler,
    modeHandler,
    convertHandler,
    compareListHandler,
  } = useAppData();

  return (
    <ThemeProvider theme={theme}>
      <main className="layout">
        <ToolBar 
          fromCurrency={state.fromCurrency}
          toCurrency={state.toCurrency}
          convertHandler={convertHandler}
          convertHistoryHandler={convertHistoryHandler}
          modeHandler={modeHandler}
          compareListHandler={compareListHandler}
          compareList={state.compareList}
          currenciesList={state.currenciesList}
          mode={state.mode}
          opendrawer={opendrawer}
          setDrawerOpen={setDrawerOpen}
          />
        <Grid    
          container
          direction="column"
          justify="flex-start"
          alignItems="center" >
          {state.mode === 'Converter' && (
          <ConvertView
            result={state.result}
            opendrawer={opendrawer}
          />)}
          {state.mode === 'History' && (
          <ExchangeHistoryGraph
            history={state.history}
            opendrawer={opendrawer}
          />)}
          {state.mode === 'Compare' && (
          <CompareView 
            compareList={state.compareList}
            opendrawer={opendrawer}
          />)}
        </Grid>
      </main>
    </ThemeProvider>
  );
}
