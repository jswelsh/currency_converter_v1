import React from 'react';
import { CircleFlag } from 'react-circle-flags'

const iconMap ={
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

const iconHandler = (payload) => {
  return <CircleFlag countryCode={iconMap[payload]}  height="35"/>
}

export { iconHandler }


