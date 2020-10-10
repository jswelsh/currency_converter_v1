import { useEffect, useReducer } from 'react';
import axios from 'axios';


const SET_FROM_CURRENCY = 'SET_FROM_CURRENCY';
const SET_TO_CURRENCY = 'SET_TO_CURRENCY';
/* const SET_DATE_RANGE = 'SET_DATE_RANGE'; */

const SET_CURRENCIES_LIST = 'SET_CURRENCIES_LIST';
const SET_COMPARE_LIST = 'SET_COMPARE_LIST';
const SET_HISTORY = 'SET_HISTORY';
const SET_MODE = 'SET_MODE';

const latestURl = 'https://api.exchangeratesapi.io/latest'
const getCurrencies = axios.get(latestURl);

//for future refactor
//use the reducer design pattern
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FROM_CURRENCY':
      return { ...state, fromCurrency: action.currency };
    case 'SET_TO_CURRENCY':
      return { ...state, toCurrency: action.currency };
/*     case 'SET_DATE_RANGE':
      return { ...state, dateRange: action.dateRange }; */

    case 'SET_CURRENCIES_LIST':
      return { ...state, currenciesList: action.currenciesList };
    case 'SET_COMPARE_LIST':
      return { ...state, compareList: action.compareList };
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
    /* result: null, */
/* 
    fromCurrency: 'CAD',
    toCurrency: 'USD', */
   /*  dateRange: ['2020-09-01', '2020-10-01'], */
    currenciesList: [],
    compareList:{},
    history: [],
    mode: 'Compare',
  });

  /* const setFromCurrency = (currency) => { dispatch({ type: SET_FROM_CURRENCY, currency }); };
  const setToCurrency = (currency) => { dispatch({ type: SET_TO_CURRENCY, currency }); }; */
 /*  const setDateRange = (dateRange) => { dispatch({ type: SET_DATE_RANGE, dateRange }); }; */
  const setCurrenciesList = (currenciesList) => { dispatch({ type: SET_CURRENCIES_LIST, currenciesList}); };
  const setCompareList = (compareList) => { dispatch({ type: SET_COMPARE_LIST, compareList}); };
  const setHistory = (history) => { dispatch({ type: SET_HISTORY, history }); };
  const setMode = (mode) => { dispatch({ type: SET_MODE, mode }); };

  const compareListHandler = (fromCurrency) => {
    console.log(fromCurrency)
    const compareURL = `${latestURl}?base=${/* state.baseCurrency */fromCurrency}`
    axios
        .get(compareURL)
        .then((res) => {
          //{data{rates, base, date} }
          setCompareList(res.data.rates)
        })

  }
  const convertHistoryHandler = (fromCurrency, toCurrency, dateRange) => {
    let [startDate, endDate] = dateRange;
    console.log(startDate, endDate)
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
/*   const dateRangeHandler = (range) => {
    setDateRange(range)
  } */
  const modeHandler = (mode) => {
    setMode(mode)
  }

/*   const currencySelectHandler = (mode, currency) => {
    console.log('currency select', currency)
    return mode === 'fromCurrency' ? dispatch({type:SET_FROM_CURRENCY, currency}):
    mode === 'toCurrency' ? dispatch({type:SET_TO_CURRENCY, currency}) :
    null
  } */

  useEffect(() => {
    getCurrencies
      .then((res) => {
        const currenciesList = [res.data.base];

        Object.keys(res.data.rates).forEach((key) => {
          // put in an error check for only valid currency prefixes?
          currenciesList.push(key);
        });
        setCurrenciesList(currenciesList)
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      });
  }, []); // Empty array to only run once on mount.

  return {
    state,
    convertHistoryHandler,
    modeHandler,
    compareListHandler,
    /* currencySelectHandler, */
    /* dateRangeHandler */
  };
}