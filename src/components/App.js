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
            opendrawer={opendrawer}
            fromCurrency={state.result.fromCurrency}
            toCurrency={state.result.toCurrency}
            toStart={state.result.toStart}
            converted={state.result.converted}
            fromIntro={state.result.fromIntro}
            toIntro={state.result.toIntro}
            recentRateHistory={state.result.recentRateHistory}
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
