import { useEffect, useReducer } from "react";
import axios from 'axios';

//const SET_APP_DATA = "SET_APP_DATA";
const SET_CURRENCY_LIST = "SET_CURRENCY_LIST";
const SET_FROM_CURRENCY = "SET_FROM_CURRENCY";
const SET_TO_CURRENCY = "SET_TO_CURRENCY";
const SET_RESULT = "SET_RESULT";

const getCurrencies = axios.get("https://api.exchangeratesapi.io/latest?base=CAD")

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
    currenciesList: []
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

  const convertHandler = () => {
    if (state.fromCurrency !== state.toCurrency) {  
      axios
        .get(
          `https://api.openrates.io/latest?base=${
            state.fromCurrency}&symbols=${state.toCurrency}`
        )
        .then(res => {
          const result = 
          state.amount * res.data.rates[state.toCurrency];
          setResult(result.toFixed(5));
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
    selectHandler
  }
}