import { useEffect, useReducer } from "react";
import axios from 'axios';

//const SET_APP_DATA = "SET_APP_DATA";
const SET_CURRENCY_LIST = "SET_CURRENCY_LIST";
const SET_FROM_CURRENCY = "SET_FROM_CURRENCY";
const SET_TO_CURRENCY = "SET_TO_CURRENCY";
const SET_RESULT = "SET_RESULT";
const SET_HISTORY = "SET_HISTORY";

const getCurrencies = axios.get("https://api.exchangeratesapi.io/latest")

const reducer = (state, action) => {
  switch(action.type) {
    case "SET_CURRENCY_LIST":
      return {...state, currenciesList: action.currenciesList}
    case "SET_FROM_CURRENCY":
      return {...state, fromCurrency: action.currency}
    case "SET_TO_CURRENCY":
      return {...state, toCurrency: action.currency}
    case "SET_RESULT":
      return {...state, result: action.result}
    case "SET_HISTORY":
      return {...state, history: action.history}
    default:
      throw new Error();
  }
}
export default function useAppData() {

  const [state, dispatch] = useReducer(reducer, {
    result: null,
    fromCurrency: "CAD",
    toCurrency: "USD",
    amount: 1,
    currenciesList: [],
    history: []
  })

  useEffect(() => {
    getCurrencies
      .then(res => {
        const currenciesList = [];
        //setting up avb currencies to choose from
        for (const key in res.data.rates) {
          currenciesList.push(key);
        }
        console.log(res)
        dispatch({
          type: SET_CURRENCY_LIST,
          currenciesList: currenciesList
        });
      })
      .catch(err => {
        console.log("Something went wrong", err);
      });
  }, []); // Empty array to only run once on mount.

  const setFromCurrency = (currency) => {dispatch({type:SET_FROM_CURRENCY, currency})};
  const setToCurrency = (currency) => {dispatch({type:SET_TO_CURRENCY, currency})};
  const setResult = (result) => {dispatch({type:SET_RESULT, result})};
  const setHistory = (history) => {dispatch({type:SET_HISTORY, history})};

  const convertHandler = () => {
    const latestURL = "https://api.openrates.io/latest?"

    if (state.fromCurrency !== state.toCurrency) {  
      axios
        .get(
          `${latestURL}base=${state.fromCurrency}&symbols=${state.toCurrency}`
        )
        .then(res => {
          const result = 
            state.amount * res.data.rates[state.toCurrency];
            setResult(result.toFixed(5));
            console.log("basic")
        })
        .catch(error => {
          console.log("Opps", error.message);
        });
    } else {
      setResult("You cant convert the same currency!");
    }
  };
  
  const convertHistoryHandler = (e) => {
    console.log(e)
    const historicalURL = "https://api.exchangeratesapi.io/history?start_at=2020-09-01&end_at=2020-09-17&";

    if (state.fromCurrency !== state.toCurrency) {  

      //maybe not return

      axios
        .get(
          `${historicalURL}base=${state.fromCurrency}&symbols=${state.toCurrency}`
        )
        .then(res => {
          let historyController = (currency, historyObj) => {
            console.log('historical')
            let history = []
            for (const [key, value] of Object.entries(historyObj)) { history.push({"date" : new Date(key), "value" : value[state.toCurrency]})}
            return history
          }
          let history = historyController(state.toCurrency, res.data.rates);
          console.log(history, "history1")
          setHistory(history)
        })
        .catch(error => {
          console.log("Opps", error.message);
        });
    } else {
      setResult("You cant convert the same currency!");
    }
  };

  const selectHandler = e => {
    if (e.target.name === "from") {  
      setFromCurrency(e.target.value) 
    } else if (e.target.name === "to") {
        setToCurrency(e.target.value)
      }
  }

  return {
    state,
    convertHandler,
    convertHistoryHandler,
    selectHandler
  }
}