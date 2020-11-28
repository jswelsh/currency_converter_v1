import { useEffect, useReducer } from 'react';
import { 
  IconvertHandlerFunc,

  ICompareListItem } from '../../src/components/types'
import axios from 'axios';
import { 
  initializeDateRange,
  historyFormatter,
  shortenDateString
} from '../helpers/dataHelpers'
const data = require('../helpers/currency.json'); // forward slashes will depend on the file location


const SET_FROM_CURRENCY = 'SET_FROM_CURRENCY';
const SET_TO_CURRENCY = 'SET_TO_CURRENCY';
const SET_RESULT = 'SET_RESULT';
//const SET_AMOUNT = 'SET_AMOUNT';
const SET_CURRENCIES_LIST = 'SET_CURRENCIES_LIST';
const SET_COMPARE_LIST = 'SET_COMPARE_LIST';
const SET_HISTORY = 'SET_HISTORY';
const SET_MODE = 'SET_MODE';

const latestURl = 'https://api.exchangeratesapi.io/latest'
const getCurrencies = axios.get(latestURl);

//for future refactor
//use the reducer design pattern
const reducer = (state:any, action:any) => {
  switch (action.type) {
    case 'SET_FROM_CURRENCY':
      return { ...state, fromCurrency: action.currency };
    case 'SET_TO_CURRENCY':
      return { ...state, toCurrency: action.currency };
    case 'SET_RESULT':
      return { ...state, result: action.result };
    /* case 'SET_AMOUNT':
      return { ...state, result: action.amount }; */
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
    fromCurrency:'CAD',
    toCurrency:'USD',
    result: {},
    //amount:1,
    currenciesList: [],
    compareList: {},
    history: [],
    mode: 'Converter',
  });

  const setFromCurrency = (currency: string) => { dispatch({ type: SET_FROM_CURRENCY, currency}); };
  const setToCurrency = (currency: string) => { dispatch({ type: SET_TO_CURRENCY, currency}); };
  const setResult = (result: any) => { dispatch({ type: SET_RESULT, result }); }; 
  
  const setCurrenciesList = (currenciesList: Array<string>) => { dispatch({ type: SET_CURRENCIES_LIST, currenciesList}); };
  const setCompareList = (compareList: Array<ICompareListItem>) => { dispatch({ type: SET_COMPARE_LIST, compareList}); };
  const setHistory = (history: Object) => { dispatch({ type: SET_HISTORY, history }); };
  const setMode = (mode: string) => { dispatch({ type: SET_MODE, mode }); };

  const compareListHandler = (fromCurrency: string, amount: number) => {
    const compareURL = `${latestURl}?base=${fromCurrency}`
    axios
      .get(compareURL)
      .then((res) => {
        
        const compareList: Array<ICompareListItem> = []
        Object.entries(res.data.rates).forEach((props:any) => {
          compareList.push({
            currency: props[0],
            value: parseFloat((props[1]*amount).toFixed(5))
          })
        })
        setCompareList(compareList)
      })
  }

  let convertHandler: IconvertHandlerFunc
  convertHandler = function ({ fromCurrency, toCurrency, amount}) {
    const [ fromDate, toDate] = initializeDateRange(90)//325
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
            /* 
            get the json of each currency's intro text from wikipedia; 
            drill down the json tree to get to the queried pages,
            only queried one, so we use the first index [0]  */
            const fromDrillDown = fromIntro['data']['query']['pages']
            const toDrillDown = toIntro['data']['query']['pages']
            /* 
            drill drown the response to get the converted value */
            const result = fromRates.data.rates[toCurrency];
            /* 
            used for the backside of the convert card */
            const recentRateHistory = slicer(historyFormatter(ratesHistory.data.rates, toCurrency), [-5,-10,-15])

            function slicer (array:any, slicePoints:any) {
              const splicedArray = [array.pop()]//grab yesterdays rates
              slicePoints.forEach((point:any) => {
                /* add each recent history rate to array */
                splicedArray.push(array.slice(point, point + 1).pop())
              });
              const formattedArray = splicedArray.map(({date,value}, i) => {
                /* adding the number of days from today to obj */
                return { date: shortenDateString(date, 5)/* shorten the date string removing yyyy- */, value:value.toFixed(4), daysAgo: Math.abs(slicePoints[i-1] || 1) }
              })
              return formattedArray
            }
            setResult({
              recentRateHistory: recentRateHistory,
              fromCurrency: fromCurrency,
              toCurrency: toCurrency,
              toStart: amount,
              converted: parseInt(amount)*result.toFixed(5),
              /* 
              get the keys for the pages (this is deceptive as we only query
              one page but have to use the first index to grap it as its an array) */
              fromIntro: fromDrillDown[Object.keys(fromDrillDown)[0]]['extract'],
              toIntro: toDrillDown[Object.keys(toDrillDown)[0]]['extract']
            });
        })
        .catch((error) => {
          console.log('Opps', error.message);
        });
    } else {
      setResult({error:'You cant convert the same currency!'});
    }
  };
  const convertHistoryHandler = (payload: any) => {
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
          setHistory(
            historyFormatter(res.data.rates, toCurrency)
          )
          // sort the dates from "res" = {obj} payload
        })
        .catch((error) => {
          console.log('Opps', error.message);
        });
    } else {
      console.log({error:"You can't convert the same currency!"});
    }
  };
/*   const amountHandler = (amount) => {
    setAmount(amount)
  } */
  const modeHandler = (mode: string): void => {
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
    // compareListHandler('CAD', 1)
    convertHandler({ fromCurrency: 'CAD', toCurrency: 'USD', amount:'1'})
    //if you change this, make sure to change inside userinput aswell
    // convertHistoryHandler({ fromCurrency:'CAD', toCurrency:'USD', dateRange:initializeDateRange(90)})
  }, []); // Empty array to only run once on mount.

  return {
    state,
    setFromCurrency,
    setToCurrency,
    //amountHandler,
    convertHandler,
    convertHistoryHandler,
    modeHandler,
    compareListHandler,
  };
}