import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { 
  initializeDateRange,
  historyFormatter
} from '../helpers/dataHelpers'
const data = require('../helpers/currency.json'); // forward slashes will depend on the file location


const SET_RESULT = 'SET_RESULT';
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
    case 'SET_RESULT':
      return { ...state, result: action.result };
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
    result: {},
    currenciesList: [],
    compareList: [],
    history: [],
    mode: 'Converter',
  });

  const setResult = (result) => { dispatch({ type: SET_RESULT, result }); }; 
  const setCurrenciesList = (currenciesList) => { dispatch({ type: SET_CURRENCIES_LIST, currenciesList}); };
  const setCompareList = (compareList) => { dispatch({ type: SET_COMPARE_LIST, compareList}); };
  const setHistory = (history) => { dispatch({ type: SET_HISTORY, history }); };
  const setMode = (mode) => { dispatch({ type: SET_MODE, mode }); };

  const compareListHandler = (fromCurrency, amount) => {
    const compareURL = `${latestURl}?base=${fromCurrency}`
    axios
      .get(compareURL)
      .then((res) => {
        const compareList = []
        Object.entries(res.data.rates).forEach(([key,value]) => {
          compareList.push({
            currency: key,
            value: (value*amount).toFixed(5)
          })
        })
        setCompareList(compareList)
      })
  }
  const convertHandler = (payload) => {
    const { fromCurrency, toCurrency, amount} = payload
    const [ fromDate, toDate] = initializeDateRange(325)
    const exchangeRates = `
      https://api.exchangeratesapi.io/history?start_at=${
      fromDate}&end_at=${
      toDate}&base=${
      fromCurrency}&symbols=${
      toCurrency}`

    const latestFromRates = `
    https://api.exchangeratesapi.io/latest?base=${fromCurrency}`;
    const fromCurrencyWikipediaIntro = `
    https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${data[fromCurrency]['name']}`;
    const toCurrencyWikipediaIntro = `
    https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${data[toCurrency]['name']}`;
    const fetchFromRates = axios.get(latestFromRates);
    const fetchRatesHistory = axios.get(exchangeRates)
    const fetchFromIntro = axios.get(fromCurrencyWikipediaIntro);
    const fetchToIntro = axios.get(toCurrencyWikipediaIntro);

    if (fromCurrency !== toCurrency) {
      Promise.all([
        fetchRatesHistory,
        fetchFromRates,
        fetchFromIntro,
        fetchToIntro])
        .then(([
          ratesHistory,
          fromRates, 
          fromIntro, 
          toIntro
          ]) => {
            const fromDrillDown = fromIntro['data']['query']['pages']
            const toDrillDown = toIntro['data']['query']['pages']
            const result = fromRates.data.rates[toCurrency];
            const recentRateHistory = slicer(historyFormatter(ratesHistory.data.rates, toCurrency), [-5,-10,-15])
          
            function slicer (array, slicePoints) {
              const splicedArray = [array.pop()]//grab yesterdays rates
              slicePoints.forEach(point => {
                /* add each recent history rate to array */
                splicedArray.push(array.slice(point, point + 1).pop())
              });
              const formattedArray = splicedArray.map(({date,value}, i) => {
                /* adding the number of days from today to obj */
                return { date, value:value.toFixed(5), daysAgo: Math.abs(slicePoints[i-1]) }
              })
              return formattedArray
            }

            setResult({
              recentRateHistory: recentRateHistory,
              fromCurrency: fromCurrency,
              toCurrency: toCurrency,
              toStart: amount,
              converted: result.toFixed(5),
              fromIntro: fromDrillDown[Object.keys(fromDrillDown)]['extract'],
              toIntro: toDrillDown[Object.keys(toDrillDown)]['extract']
            });
        })
        .catch((error) => {
          console.log('Opps', error.message);
        });
    } else {
      setResult({error:'You cant convert the same currency!'});
    }
  };
  const convertHistoryHandler = (payload) => {
    const { fromCurrency, toCurrency, dateRange } = payload
    const [ fromDate, toDate ] = dateRange;

    const historicalURL = `
      https://api.exchangeratesapi.io/history?start_at=${
      fromDate}&end_at=${
      toDate}&`;

    if (fromCurrency !== toCurrency) {
      axios
        .get(`${
          historicalURL}base=${
          fromCurrency}&symbols=${
          toCurrency}`)
        .then((res) => {
/*           const historyController = (historyObj) => {
            const history = [];
            Object.entries(historyObj).forEach(([key, value]) => {
              history.push({
                date: new Date(key),
                value: value[toCurrency],
              });
            });
            return history;
          }; */
          setHistory(
            historyFormatter(res.data.rates, toCurrency)
          )
          // sort the dates from "res" = {obj} payload 
  /*         setHistory(
            historyController(res.data.rates)
              .sort((a, b) =>  a.date - b.date ),
          ); */
        })
        .catch((error) => {
          console.log('Opps', error.message);
        });
    } else {
      console.log({error:"You can't convert the same currency!"});
    }
  };

  const modeHandler = (mode) => {
    setMode(mode)
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
    compareListHandler('CAD', 1)
    convertHandler({ fromCurrency: 'CAD', toCurrency: 'USD', amount:1})
    //if you change this, make sure to change inside userinput aswell
    convertHistoryHandler({ fromCurrency:'CAD', toCurrency:'USD', dateRange:initializeDateRange(365)})
  }, []); // Empty array to only run once on mount.

  return {
    state,
    convertHandler,
    convertHistoryHandler,
    modeHandler,
    compareListHandler,
  };
}