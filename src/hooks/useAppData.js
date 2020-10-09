import { useEffect, useReducer } from 'react';
import axios from 'axios';

const SET_CURRENCIES_LIST = 'SET_CURRENCIES_LIST';
const SET_HISTORY = 'SET_HISTORY';
const SET_MODE = 'SET_MODE';

const getCurrencies = axios.get('https://api.exchangeratesapi.io/latest');

const reducer = (state, action) => {
  switch (action.type) {
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
    currenciesList: [],
    history: [],
    mode: 'History',
  });

  const setCurrenciesList = (currenciesList) => { dispatch({ type: SET_CURRENCIES_LIST, currenciesList}); };
  const setHistory = (history) => { dispatch({ type: SET_HISTORY, history }); };
  const setMode = (mode) => { dispatch({ type: SET_MODE, mode }); };

  const convertHistoryHandler = (fromCurrency, toCurrency, dateRange) => {
    let [startDate, endDate] = dateRange;
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

  const setModeHandler = (mode) => {
    setMode(mode)
    console.log(mode, "hi")
  }

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
    setModeHandler
  };
}