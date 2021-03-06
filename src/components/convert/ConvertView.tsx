import React, {FC} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { IConvertViewProps } from './../types'
import { iconHandler } from '../../helpers/compareHelper';
import {
  Grid,
} from '@material-ui/core';
import { ConvertViewIntroCard } from './ConvertViewIntroCard'
import { ConvertViewCard } from './ConvertViewCard'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const drawerWidth = 240;
const drawerClosed = 100;

const data = require('../../helpers/currency.json'); // forward slashes will depend on the file location

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 12,
    margin:'auto',
    minWidth:400,
  },
  drawerClose: {
    marginLeft: drawerClosed,
    width: `calc(95% - ${drawerClosed}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerOpen: {
    marginLeft: drawerWidth,
    width: `calc(95% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen})
    }
}));

const ConvertView: FC<IConvertViewProps> = ({
  recentRateHistory,
  fromCurrency,
  toCurrency,
  openDrawer,
  fromIntro,
  converted,
  toStart,
  toIntro,
}) => {

const classes = useStyles();
return(
<>
  <Grid 
  container 
  justify={'center'}
  className={clsx({
    [classes.drawerOpen]: openDrawer,
    [classes.drawerClose]: !openDrawer})}>
    <ConvertViewCard
      recentRateHistory={recentRateHistory}
      converted={converted}
      currency={fromCurrency}
      amount={toStart}
      mode={'fromCurrency'}
    />
    <ConvertViewCard
      recentRateHistory={recentRateHistory}
      converted={converted}
      currency={toCurrency}
      amount={toStart}
      mode={'toCurrency'}
    />
  </Grid>
  <Grid 
  container 
  justify={'center'}
  className={clsx({
    [classes.drawerOpen]: openDrawer,
    [classes.drawerClose]: !openDrawer})}>
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="vertical">  {/* horizontal or vertical */}
      <FrontSide>
        <ConvertViewIntroCard
          avatar={iconHandler({
            mode: 'converter', 
            currency: fromCurrency
          })}
          title={data[fromCurrency]['name']}
          currency={fromCurrency}
          intro={fromIntro}
        />
      </FrontSide>	
      <BackSide>
      <Grid 
      container 
      justify={'center'}>
        <ConvertViewIntroCard
          avatar={iconHandler({
            mode: 'converter', 
            currency: toCurrency
          })}
          title={data[toCurrency]['name']}
          currency={toCurrency}
          intro={toIntro}
        />
        </Grid>
      </BackSide>
    </Flippy>
  </Grid>
</>
)
}

export {ConvertView}