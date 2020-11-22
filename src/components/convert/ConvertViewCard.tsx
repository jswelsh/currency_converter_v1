import React, {FC} from 'react';
import { IConvertViewCardProps } from './../types'
import { ConvertViewCardFrontside } from './ConvertViewCardFrontside'
import { ConvertViewCardBackside } from './ConvertViewCardBackside'
import { iconHandler } from '../../helpers/compareHelper';

import Flippy, { FrontSide, BackSide } from 'react-flippy';
const data = require('../../helpers/currency.json'); // forward slashes will depend on the file location

const ConvertViewCard: FC<IConvertViewCardProps> = ({ 
  recentRateHistory,
  converted,
  currency, 
  amount
}) => {
return (
  <>
  <Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal">  {/* horizontal or vertical */}
    <FrontSide>
      <ConvertViewCardFrontside
      currency={currency}
      symbol={data[currency]['symbol_native']}
      amount={amount}
      avatar={iconHandler({
        mode: 'converter', 
        currency: currency
      })}
      title={data[currency]['name']}/>
    </FrontSide>	
    <BackSide>
      <ConvertViewCardBackside
        currency={currency}
        name={data[currency]['name']}
        recentRateHistory={recentRateHistory}
        converted={converted}
        avatar={iconHandler({
          mode: 'converter', 
          currency: currency
        })}/>
    </BackSide>
  </Flippy>
  </>
)}

export {ConvertViewCard}