import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { 
  initializeDateRange 
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

/*   const convertHandler = (payload) => {
    const { fromCurrency, toCurrency, amount} = payload
    const latestURL = 'https://api.exchangeratesapi.io/latest?base=';
    if (fromCurrency !== toCurrency) {
      axios
        .get(`${
          latestURL}${
          fromCurrency}`)
        .then((res) => {
          const result = res.data.rates[toCurrency];
          setResult({
            toStart: amount,
            converted: result.toFixed(5),
            fromCurrency: fromCurrency,
            toCurrency: toCurrency
          });
        })
        .catch((error) => {
          console.log('Opps', error.message);
        });
    } else {
      setResult({error:'You cant convert the same currency!'});
    }
  }; */
  const convertHandler = (payload) => {
    const { fromCurrency, toCurrency, amount} = payload
    console.log('Athena', data[fromCurrency]['name'])
    const latestFromRates = `
    https://api.exchangeratesapi.io/latest?base=${fromCurrency}`;
    const fromCurrencyWikipediaIntro = `
    https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${data[fromCurrency]['name']}`;
    const toCurrencyWikipediaIntro = `
    https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${data[toCurrency]['name']}`;
    const fetchFromRates = axios.get(latestFromRates);
    const fetchFromIntro = axios.get(fromCurrencyWikipediaIntro);
    const fetchToIntro = axios.get(toCurrencyWikipediaIntro);


    
    if (fromCurrency !== toCurrency) {
      Promise.all([
        fetchFromRates,
        fetchFromIntro,
        fetchToIntro])
        .then(([
          fromRates, 
          fromIntro, 
          toIntro
          ]) => {
            const fromDrillDown = fromIntro['data']['query']['pages']
            const toDrillDown = toIntro['data']['query']['pages']
            const result = fromRates.data.rates[toCurrency];
            setResult({
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

/*     // Make first two requests
    const [firstResponse, secondResponse] = await Promise.all([
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${this.props.p1}`),
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?&address=${this.props.p2}`)
    ]);
  
    // Make third request using responses from the first two
    const thirdResponse = await axios.get('https://maps.googleapis.com/maps/api/directions/json?origin=place_id:' + firstResponse.data.results.place_id + '&destination=place_id:' + secondResponse.data.results.place_id + '&key=' + 'API-KEY-HIDDEN');
  
    // Update state once with all 3 responses
    this.setState({
      p1Location: firstResponse.data,
      p2Location: secondResponse.data,
      route: thirdResponse.data,
    });
  
  }

 */









  const convertHistoryHandler = (payload) => {
    const {fromCurrency, toCurrency, dateRange} = payload
    const [startDate, endDate] = dateRange;

    const historicalURL = `
      https://api.exchangeratesapi.io/history?start_at=${
      startDate}&end_at=${
      endDate}&`;

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
          // sort the dates from "res" = {obj} payload 
          setHistory(
            historyController(res.data.rates)
              .sort((a, b) =>  a.date - b.date ),
          );
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
    convertHistoryHandler({ fromCurrency:'CAD', toCurrency:'USD', dateRange:initializeDateRange()})
  }, []); // Empty array to only run once on mount.

  return {
    state,
    convertHandler,
    convertHistoryHandler,
    modeHandler,
    compareListHandler,
  };
}