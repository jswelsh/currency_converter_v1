import { useEffect, useReducer } from 'react';
import axios from 'axios';

// const SET_APP_DATA = "SET_APP_DATA";
const SET_CURRENCY_LIST = 'SET_CURRENCY_LIST';
const SET_FROM_CURRENCY = 'SET_FROM_CURRENCY';
const SET_TO_CURRENCY = 'SET_TO_CURRENCY';
const SET_RESULT = 'SET_RESULT';
const SET_HISTORY = 'SET_HISTORY';
// const SET_MODE = 'SET_MODE';

const getCurrencies = axios.get('https://api.exchangeratesapi.io/latest');

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CURRENCY_LIST':
      return { ...state, currenciesList: action.currenciesList };
    case 'SET_FROM_CURRENCY':
      return { ...state, fromCurrency: action.currency };
    case 'SET_TO_CURRENCY':
      return { ...state, toCurrency: action.currency };
    case 'SET_RESULT':
      return { ...state, result: action.result };
    case 'SET_HISTORY':
      return { ...state, history: action.history };
    case 'SET_MODE':
      return { ...state, mode: action.mode };
    default:
      throw new Error();
  }
};
export default function useAppData() {
  const [state, dispatch] = useReducer(reducer, {
    result: null,
    fromCurrency: 'CAD',
    toCurrency: 'USD',
    amount: 1,
    currenciesList: [],
    history: [],
    mode: 'latest',
  });

  const setFromCurrency = (currency) => { dispatch({ type: SET_FROM_CURRENCY, currency }); };
  const setToCurrency = (currency) => { dispatch({ type: SET_TO_CURRENCY, currency }); };
  const setResult = (result) => { dispatch({ type: SET_RESULT, result }); };
  const setHistory = (history) => { dispatch({ type: SET_HISTORY, history }); };
  // const setMode = (mode) => { dispatch({ type: SET_MODE, mode }); };

  const selectHandler = (e) => {
    if (e.target.name === 'from') {
      setFromCurrency(e.target.value);
    } else if (e.target.name === 'to') {
      setToCurrency(e.target.value);
    }
  };

  const convertHandler = () => {
    const latestURL = 'https://api.exchangeratesapi.io/latest?symbols=';
    if (state.fromCurrency !== state.toCurrency) {
      axios
        .get(`${
          latestURL}${
          state.fromCurrency}&symbols=${
          state.toCurrency}`)
        .then((res) => {
          const result = state.amount * res.data.rates[state.toCurrency];
          setResult(result.toFixed(5));
        })
        .catch((error) => {
          console.log('Opps', error.message);
        });
    } else {
      setResult('You cant convert the same currency!');
    }
  };

  const convertHistoryHandler = () => {
/*     var date = new Date();
var next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
var days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June', 'July','August','September','October','November','December'];

function format(d) {
    return d.getDate() + ' ' + days[d.getDay()] + ', ' + months[d.getMonth() ] + ' ' + d.getFullYear();    
}

document.getElementById('r').innerHTML  = 'Today is ' + format(date) + '<br>';

for (i = 0; i < 52; i++) {    
    next = new Date(next.getFullYear(), next.getMonth(), next.getDate() - 7);
    document.getElementById('r').innerHTML += 'Next week is ' + format(next) + '<br>';
} */
    let today = new Date().toISOString().split("T")[0]
    let lastFourWeeks = function(){
      let day = new Date();
      let FourWeeksAgo = new Date(day.getFullYear(), day.getMonth(), day.getDate()-28).toISOString().split("T")[0];
      return FourWeeksAgo;
    }
    const historicalURL = `https://api.exchangeratesapi.io/history?start_at=${lastFourWeeks()}&end_at=${today}&`;
    if (state.fromCurrency !== state.toCurrency) {
      axios
        .get(`${
          historicalURL}base=${
          state.fromCurrency}&symbols=${
          state.toCurrency}`)
        .then((res) => {
          const historyController = (historyObj) => {
            const history = [];
            Object.entries(historyObj).forEach(([key, value]) => {
              history.push({
                date: new Date(key),
                value: value[state.toCurrency],
              });
            });
            return history;
          };
          /* sort the dates from "res" = {obj} payload */
          setHistory(
            historyController(res.data.rates)
              .sort((a, b) => b.date - a.date),
          );
        })
        .catch((error) => {
          console.log('Opps', error.message);
        });
    } else {
      setResult("You can't convert the same currency!");
    }
  };

  useEffect(() => {
    getCurrencies
      .then((res) => {
        const currenciesList = [];

        Object.keys(res.data.rates).forEach((key) => {
          // put in an error check for only valid currency prefixes?
          currenciesList.push(key);
        });
        dispatch({
          type: SET_CURRENCY_LIST,
          currenciesList,
        });
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      });
  }, []); // Empty array to only run once on mount.

  return {
    state,
    convertHandler,
    convertHistoryHandler,
    selectHandler,
  };
}
