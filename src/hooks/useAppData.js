import { useEffect, useReducer } from "react";
import axios from 'axios';

//const SET_APP_DATA = "SET_APP_DATA";
const SET_CURRENCY_LIST = "SET_CURRENCY_LIST";
const SET_FROM_CURRENCY = "SET_FROM_CURRENCY";
const SET_TO_CURRENCY = "SET_TO_CURRENCY";
const SET_RESULT = "SET_RESULT";
const SET_HISTORY = "SET_HISTORY";
const SET_MODE = "SET_MODE";

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
    case "SET_MODE":
      return {...state, mode: action.mode}
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
    history: [],
    mode: "latest"
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
        convertHandler()
      })
      .catch(err => {
        console.log("Something went wrong", err);
      });
  }, []); // Empty array to only run once on mount.

  const setFromCurrency = (currency) => {dispatch({type:SET_FROM_CURRENCY, currency})};
  const setToCurrency = (currency) => {dispatch({type:SET_TO_CURRENCY, currency})};
  const setResult = (result) => {dispatch({type:SET_RESULT, result})};
  const setHistory = (history) => {dispatch({type:SET_HISTORY, history})};
  const setMode = (mode) => {dispatch({type:SET_MODE, mode})};

  const selectHandler = e => {

/*     switch (e.target.name) {
      case "from":
        setFromCurrency(e.target.value)
        return
        break;
      case "to":
        setToCurrency(e.target.value)
        return
        break;
      case "latest":

        console.log("latest")
        setMode(e.target.name)
        break;
      case "history":

        console.log("history")
        setMode(e.target.name)
        break;
      default:
        break;
    } */
    if (e.target.name === "from") {
      setFromCurrency(e.target.value)
      return 
    } else if (e.target.name === "to") {
      setToCurrency(e.target.value)
      return
    } else if (e.target.name === "latest") {
        console.log("latest")
        setMode(e.target.name)
        convertHandler(
          `https://api.exchangeratesapi.io/latest?symbols=${
          state.fromCurrency},${state.toCurrency}`)
    } else if (e.target.name === "history") {
        console.log("history")
        setMode(e.target.name)
        convertHandler(
          `https://api.exchangeratesapi.io/history?start_at=2020-09-01&end_at=2020-09-17&base=${
          state.fromCurrency}&symbols=${state.toCurrency}`
      )
    }

  }

  const convertHandler = (url) => {
    const URLConstructor = () => {
      if (state.mode === "history") {
        console.log("history2")
        return `
          https://api.exchangeratesapi.io/history?start_at=2020-09-01&end_at=2020-09-17&base=${
          state.fromCurrency}&symbols=${state.toCurrency}`
      }
      else if (state.mode === "latest") {
        console.log("latest2")
        return `
          https://api.exchangeratesapi.io/latest?symbols=${
          state.fromCurrency},${state.toCurrency}`
      }
    }






              
    if (state.fromCurrency !== state.toCurrency) {  
      axios
        .get(URLConstructor())
        .then(res => {
/*        const result = 
          state.amount * res.data.rates[state.toCurrency];
          setResult(result.toFixed(5)); */
          if (state.mode === "latest") {
            setResult(state.amount * res.data.rates[state.toCurrency].toFixed(5))
          } else if (state.mode === "history") {
            let historyController = (historyObj) => {
              let history = []
              for (const [key, value] of Object.entries(historyObj)) { 
                history.push({
                  "date" : new Date(key), 
                  "value" : value[state.toCurrency]
                })
              }
              return history
            }
            setHistory(
              historyController(res.data.rates)
              .sort((a, b) => b.date - a.date)
            )
          }
        })
        .catch(error => {
          console.log("Opps", error.message);
        });
    } else {
      setResult("You cant convert the same currency!");
    }
  };
  
  const convertHistoryHandler = (e) => {
    const historicalURL = "https://api.exchangeratesapi.io/history?start_at=2020-09-01&end_at=2020-09-17&";

    if (state.fromCurrency !== state.toCurrency) {  
      axios
        .get(`${
          historicalURL}base=${
          state.fromCurrency}&symbols=${
          state.toCurrency}`
        )
        .then(res => {
          let historyController = (historyObj) => {
            let history = []
            for (const [key, value] of Object.entries(historyObj)) { 
              history.push({
                "date" : new Date(key), 
                "value" : value[state.toCurrency]
              })}
            return history
          }
          /* sort the dates from "res" = {obj} payload */
          setHistory(
            historyController(res.data.rates)
            .sort((a, b) => b.date - a.date)
          )
        })
        .catch(error => {
          console.log("Opps", error.message);
        });
    } else {
      setResult("You can't convert the same currency!");
    }
  };

  return {
    state,
    convertHandler,
    convertHistoryHandler,
    selectHandler
  }
}