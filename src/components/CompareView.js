import React from 'react';
import { CompareListItem } from './CompareListItem'
import {
Grid,
List
} from '@material-ui/core';

import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 280;
const drawerClosed = 100;

const useStyles = makeStyles((theme) => ({
drawerClose: {  
	marginLeft: drawerClosed,
	marginRight: 'min(100px, 15%)',
	marginLeft: 'min(100px, 15%)',
	width: `calc(95% - ${drawerClosed}px)`,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen})
},
drawerOpen: {
	marginLeft: drawerWidth,
	width: `calc(95% - ${drawerWidth}px)`,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen})
},
ListItem: {
	padding: theme.spacing(1),
	textAlign: 'center',
	backgroundColor: '#212121',
	minHeight: 100
},
symbol: {
	marginRight: 16
}
}));

export function CompareView({
	setFromCurrency,
	fromCurrency,
	compareList,
	opendrawer,
	setAmount,
	amount
}){

	const currencySelectHandler = (currency) => { 
			setFromCurrency(currency)
	}

const classes = useStyles();
const list = compareList.compareList
return(
<List
	className = {clsx(classes.drawer, {
		[classes.drawerOpen]: opendrawer,
		[classes.drawerClose]: !opendrawer})} >
	<Grid 
		container 
		spacing={2}
		alignItems="center" >
		{(list).map((payload) => (
		<Grid 
			item 
			xs={12} 
			md={opendrawer ? 12 : 6} 
			lg={opendrawer ? 6 : 4} 
			lx={4} 
			key={payload.currency} >
			<CompareListItem
				currencySelectHandler={currencySelectHandler}
				fromCurrency={fromCurrency}
				currency={payload.currency}
				primary={payload.value}
				setAmount={setAmount}
				// amount={amount}
				/>
		</Grid>))}
	</Grid>
</List> 
)
}