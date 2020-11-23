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
  cardHeader: {
    backgroundColor:'secondary'},
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
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
  opendrawer,
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
    [classes.drawerOpen]: opendrawer,
    [classes.drawerClose]: !opendrawer})}>
    <ConvertViewCard
      recentRateHistory={recentRateHistory}
      currency={fromCurrency}
      converted={converted}
      amount={toStart}
    />
    <ConvertViewCard
      recentRateHistory={recentRateHistory}
      currency={toCurrency}
      converted={converted}
      amount={converted}
    />
  </Grid>
  <Grid 
  container 
  justify={'center'}
  className={clsx({
    [classes.drawerOpen]: opendrawer,
    [classes.drawerClose]: !opendrawer})}>
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