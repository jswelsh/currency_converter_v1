import React, {FC} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { ICompareViewProps } from './types'
import CompareListItem from '../components/CompareListItem'
import {
Grid,
List,
Box
} from '@material-ui/core';
import Pagination from "@material-ui/lab/Pagination";

const drawerWidth = 280;
const drawerClosed = 100;

const useStyles = makeStyles((theme) => ({
  drawerClose: {  
    //marginLeft: drawerClosed,
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
  },  
  paginator: {
    justifyContent: "center",
    padding: "10px"
  }
}));

const CompareView: FC<ICompareViewProps> = ({
  compareListHandler,
  setFromCurrency,
  fromCurrency,
  compareList,
  opendrawer,
  amount
}) => {
  const classes = useStyles();
  const itemsPerPage = 8;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(
    Math.ceil(compareList.length / itemsPerPage)
  );
  const handleChange = (event, value) => {
    setPage(value);
  };
  const currencySelectHandler = (currency: string) => { 
  setFromCurrency(currency)
  }

  return(
  <List
    className = {clsx({
      [classes.drawerOpen]: opendrawer,
      [classes.drawerClose]: !opendrawer})} >
    <Box display={{ xs: 'block', md: 'none' }}>
      <Grid 
        container 
        spacing={2}
        alignItems="center" >
        {compareList.length && compareList
        .slice((page - 1) * itemsPerPage/ 2, page * itemsPerPage/2)
        .map(({ currency, value }) => (
          <Grid
            item
            xs={12}
            md={opendrawer ? 12 : 6}
            lg={6}
            key={currency}>
            <CompareListItem
              currencySelectHandler={currencySelectHandler}
              compareListHandler={compareListHandler}
              fromCurrency={fromCurrency}
              currency={currency}
              primary={value}
              amount={amount} />
          </Grid>))}
        <Grid
          item
          xs={12} >
          <Box component="span">
            <Pagination
              count={noOfPages*2}
              page={page}
              onChange={handleChange}
              defaultPage={1}
              color="secondary"
              size="large"
              showFirstButton
              showLastButton
              classes={{ ul: classes.paginator }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
    <Box display={{ xs: 'none', md: 'block' }}>
    <Grid 
      container 
      spacing={2}
      alignItems="center" >
      {compareList.length && compareList
      .slice(((page<=noOfPages ? page :Math.ceil(page/2))  - 1) * itemsPerPage, (page<=noOfPages ? page :Math.ceil(page/2))  * itemsPerPage)
      .map(({currency, value}) => (
      <Grid 
        item
        xs={12} 
        md={opendrawer ? 12 : 6}       
        lg={6}
        key={currency} >
        <CompareListItem
          currencySelectHandler={currencySelectHandler}
          compareListHandler={compareListHandler}
          fromCurrency={fromCurrency}
          currency={currency}
          primary={value}
          amount={amount}
          />
      </Grid>))}
      <Grid 
        item
        xs={12} >
        <Box component="span">
          <Pagination
            count={noOfPages}
            page={page<=noOfPages ? page :Math.ceil(page/2) }
            onChange={handleChange}
            defaultPage={1}
            color="secondary"
            size="large"
            showFirstButton
            showLastButton
            classes={{ ul: classes.paginator }}
          />
        </Box>
      </Grid>
    </Grid>
    </Box>
  </List> 
  )
}
export default React.memo(CompareView)