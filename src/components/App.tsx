import React from 'react';
import './App.css';
import 'fontsource-roboto';
import {} from './types'
import useAppData from '../hooks/useAppData';
import theme from '../styles/AppStyles'
import { ThemeProvider } from '@material-ui/core'
import { ToolBar } from './toolbar/ToolBar';
import { CompareView } from './CompareView'
import { ConvertView } from './convert/ConvertView'
import { ExchangeHistoryGraph } from './ExchangeHistoryGraph';


export default function App() {
  const [opendrawer, setDrawerOpen] = React.useState/* <boolean> */(false);
  const {
    state,
    convertHistoryHandler,
    compareListHandler,
    setFromCurrency,
    convertHandler,
    setToCurrency,
    modeHandler,
  } = useAppData();
  return (
    <ThemeProvider theme={theme}>
      <main className="layout">
        <ToolBar
          convertHistoryHandler={convertHistoryHandler}
          compareListHandler={compareListHandler}
          currenciesList={state.currenciesList}
          convertHandler={convertHandler}
          setDrawerOpen={setDrawerOpen}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
          fromCurrency={state.fromCurrency}
          toCurrency={state.toCurrency}
          modeHandler={modeHandler}
          opendrawer={opendrawer}
          mode={state.mode}
          />

        {state.mode === 'Converter' && (
        <ConvertView
          opendrawer={opendrawer}
          fromCurrency={state.fromCurrency}
          toCurrency={state.toCurrency}
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
          setFromCurrency={setFromCurrency}
          fromCurrency={state.fromCurrency}
          compareList={state.compareList}
          opendrawer={opendrawer}
        />)}

      </main>
    </ThemeProvider>
  );
}
