import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { iconHandler } from '../helpers/compareHelper';
import {
  Grid,
} from '@material-ui/core';
import { ConvertViewIntroCard } from './ConvertViewIntroCard'
import { ConvertViewFrontsideCard } from './ConvertViewFrontsideCard'
import { ConvertViewBacksideCard } from './ConvertViewBacksideCard'
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const drawerWidth = 240;
const drawerClosed = 100;

const data = require('../helpers/currency.json'); // forward slashes will depend on the file location
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

export function ConvertView({
	opendrawer,
	fromCurrency,
	toCurrency,
	toStart,
	converted,
	fromIntro,
	toIntro,
	recentRateHistory
}){

	const classes = useStyles();
/* 	function shortenDateString(string) {
		return string.toISOString().split('T')[0]
	} */
return(
<>
	<Grid 
	container 
	justify={'center'}
	className={clsx({
		[classes.drawerOpen]: opendrawer,
		[classes.drawerClose]: !opendrawer})}>
		{[
		[fromCurrency, toStart], 
		[toCurrency, converted]].map((
			[currency, amount]) => (
		<Flippy
			flipOnHover={false} // default false
			flipOnClick={true} // default false
			flipDirection="horizontal">  {/* horizontal or vertical */}
			<FrontSide>
				<ConvertViewFrontsideCard
				currency={currency}
				data={data}
				amount={amount}
				avatar={iconHandler('converter', currency)}/>
			</FrontSide>	
			<BackSide>
				<ConvertViewBacksideCard
					currency={currency}
					data={data}
					recentRateHistory={recentRateHistory}
					converted={converted}
					avatar={iconHandler('converter', currency)}/>
			</BackSide>
		</Flippy>
		))}
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
					currency={fromCurrency}
					intro={fromIntro}
					data={data}
					avatar={iconHandler('converter', fromCurrency)}
				/>
			</FrontSide>	
			<BackSide>
			<Grid 
			container 
			justify={'center'}>
				<ConvertViewIntroCard
					opendrawer={opendrawer}
					currency={toCurrency}
					intro={toIntro}
					data={data}
					avatar={iconHandler('converter', toCurrency)}
				/>
				</Grid>
			</BackSide>
		</Flippy>
	</Grid>
</>
)
}