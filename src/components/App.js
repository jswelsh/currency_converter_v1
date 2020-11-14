import React from 'react';
import './App.css';
import 'fontsource-roboto';
import useAppData from '../hooks/useAppData';
import theme from '../styles/AppStyles'
import { ThemeProvider } from '@material-ui/core'
import { ToolBar } from './ToolBar';
import { CompareView } from './CompareView'
import { ConvertView } from './ConvertView'
import { ExchangeHistoryGraph } from './ExchangeHistoryGraph';


export default function App() {
  const [opendrawer, setDrawerOpen] = React.useState(false);
  const {
    state,
    setFromCurrency,
    setToCurrency,
    convertHistoryHandler,
    modeHandler,
    convertHandler,
    compareListHandler,
  } = useAppData();
  return (
    <ThemeProvider theme={theme}>
      <main className="layout">
        <ToolBar
          convertHistoryHandler={convertHistoryHandler}
          compareListHandler={compareListHandler}
          currenciesList={state.currenciesList}
          compareList={state.compareList}
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
          fromCurrency={state.fromCurrency}
          compareList={state.compareList}
          opendrawer={opendrawer}
        />)}
     {/*    </Grid> */}
      </main>
    </ThemeProvider>
  );
}
