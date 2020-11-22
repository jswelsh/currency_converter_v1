import React from 'react';
import './App.css';
import 'fontsource-roboto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import useAppData from '../hooks/useAppData';
import theme from '../styles/AppStyles'
import { ThemeProvider } from '@material-ui/core'
import { ToolBar } from './toolbar/ToolBar';
import { CompareView } from './CompareView'
import { ConvertView } from './convert/ConvertView'
import { ExchangeHistoryGraph } from './ExchangeHistoryGraph';
import { SignIn } from './SignIn';


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
      <Router>
      <main className="layout">
         {/* <Link to="/">convert</Link> */}
          {/* <Link to="/">history</Link> */}
           {/* <Link to="/">compare</Link> */}
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
          <Link to="/signin">SignIn</Link>
        {/* <Route path="/converter"></Route> */}
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
        {/* <Route path="/history"></Route> */}
        {state.mode === 'History' && (
        <ExchangeHistoryGraph
          history={state.history}
          opendrawer={opendrawer}
        />)}
        {/* <Route path="/compare"></Route> */}
        {state.mode === 'Compare' && (

        <SignIn />
        )}

        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/">
          </Route>
        </Switch>  
      </main>
  </Router>
    </ThemeProvider>
  );
}
