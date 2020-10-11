
















































import { useEffect, useReducer } from 'react';
import axios from 'axios';

// const SET_APP_DATA = "SET_APP_DATA";
/* const SET_RESULT = 'SET_RESULT';
const SET_FROM_CURRENCY = 'SET_FROM_CURRENCY';
const SET_TO_CURRENCY = 'SET_TO_CURRENCY';
const SET_AMOUNT = "SET_AMOUNT"; */
const SET_CURRENCIES_LIST = 'SET_CURRENCIES_LIST';
const SET_HISTORY = 'SET_HISTORY';
const SET_MODE = 'SET_MODE';

const getCurrencies = axios.get('https://api.exchangeratesapi.io/latest');

const reducer = (state, action) => {
  switch (action.type) {
    /* case 'SET_RESULT':
      return { ...state, result: action.result };
    case 'SET_FROM_CURRENCY':
      return { ...state, fromCurrency: action.currency };
    case 'SET_TO_CURRENCY':
      return { ...state, toCurrency: action.currency };
    case 'SET_AMOUNT':
      return { ...state, amount: action.amount }; */
    case 'SET_CURRENCIES_LIST':
      return { ...state, currenciesList: action.currenciesList };
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
/*     fromCurrency: 'CAD',
    toCurrency: 'USD',
    amount: 1, */
    currenciesList: [],
    history: [],
    mode: 'History Graph',
  });

  
  /* const setFromCurrency = (currency) => { dispatch({ type: SET_FROM_CURRENCY, currency }); };
  const setToCurrency = (currency) => { dispatch({ type: SET_TO_CURRENCY, currency }); };
  const setAmount = (amount) => { dispatch({ type: SET_AMOUNT, amount }); };
  const setResult = (result) => { dispatch({ type: SET_RESULT, result }); }; */
  const setCurrenciesList = (currenciesList) => { dispatch({ type: SET_CURRENCIES_LIST, currenciesList}); };
  const setHistory = (history) => { dispatch({ type: SET_HISTORY, history }); };
  const setMode = (mode) => { dispatch({ type: SET_MODE, mode }); };

  /* const selectHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === 'fromSelector') {
      setFromCurrency(value);
    } else if (name === 'toSelector') {
      setToCurrency(value);
    } else if (name === 'amount') {
      setAmount(value);
    }
  }; */

 /*  const convertHandler = () => {
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
  }; */

  const convertHistoryHandler = (fromCurrency, toCurrency, dateRange) => {
    let [startDate, endDate] = dateRange

    const historicalURL = `https://api.exchangeratesapi.io/history?start_at=${startDate}&end_at=${endDate}&`;
    if (fromCurrency !== toCurrency) {
      axios
        .get(`${
          historicalURL}base=${
          fromCurrency}&symbols=${
          toCurrency}`)
        .then((res) => {
          const historyController = (historyObj) => {
            const history = [];
            Object.entries(historyObj).forEach(([key, value]) => {
              history.push({
                date: new Date(key),
                value: value[toCurrency],
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
      console.log("You can't convert the same currency!");
    }
  };

  useEffect(() => {
    getCurrencies
      .then((res) => {
        const currenciesList = [res.data.base];

        Object.keys(res.data.rates).forEach((key) => {
          // put in an error check for only valid currency prefixes?
          currenciesList.push(key);
        });
/*    dispatch({
          type: SET_CURRENCIES_LIST,
          currenciesList,
        }); */
        setCurrenciesList(currenciesList)
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      });
  }, []); // Empty array to only run once on mount.

  return {
    state,
/*     convertHandler, */
    convertHistoryHandler,
/*     selectHandler, */
  };
}
