import React from 'react';
import { CircleFlag } from 'react-circle-flags'
import {
  ListItemIcon, 
} from '@material-ui/core';

export interface IIconMapProps {
  [key: string]: any;
  CAD: string;
}

const iconMap:IIconMapProps ={
  CAD : 'ca',
  HKD : 'hk',
  ISK : 'is',
  PHP : 'ph',
  DKK : 'dk',
  HUF : 'hu',
  CZK : 'cz',
  GBP : 'gb',
  RON : 'ro',
  SEK : 'se',
  IDR : 'id',
  INR : 'in',
  BRL : 'br',
  RUB : 'ru',
  HRK : 'hr',
  JPY : 'jp',
  THB : 'th',
  CHF : 'ch',
  EUR : 'european_union',
  MYR : 'my',
  BGN : 'bg',
  TRY : 'tr',
  CNY : 'cn',
  NOK : 'no',
  NZD : 'nz',
  ZAR : 'za',
  USD : 'us',
  MXN : 'mx',
  SGD : 'sg',
  AUD : 'au',
  ILS : 'il',
  KRW : 'kr',
  PLN : 'pl'
}


interface IIconHandlerFunc {
  (payload:{
    currency: string, 
    mode: string
  }): any;
}

let iconHandler: IIconHandlerFunc 

iconHandler = ({mode, currency}) => {
  const height = mode === 
  'selection' ? 25 :
  'converter' ? 75 :
  35
  console.log(iconMap[currency.toString()], currency)
  return (
    <ListItemIcon>
      <CircleFlag countryCode={iconMap[currency]}  height={height}/> 
    </ListItemIcon>
  )
}

export { iconHandler }
