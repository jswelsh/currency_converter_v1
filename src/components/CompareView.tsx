import React, {FC} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { ICompareViewProps } from './types'
import { CompareListItem } from '../components/CompareListItem'
import {
Divider,
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
  setFromCurrency,
  fromCurrency,
  compareList,
  opendrawer
}) => {
  const classes = useStyles();
  const itemsPerPage = 6;
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
    <>
      <List
        className = {clsx({
          [classes.drawerOpen]: opendrawer,
          [classes.drawerClose]: !opendrawer})} >
        <Grid 
          container 
          spacing={2}
          alignItems="center" >
          
          {compareList
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map(({currency, value}) => (
          <Grid 
            item
            xs={12} 
            md={opendrawer ? 12 : 6}       
            lg={opendrawer ? 6 : 4} 
            key={currency} >
            <CompareListItem
              currencySelectHandler={currencySelectHandler}
              fromCurrency={fromCurrency}
              currency={currency}
              primary={value}
              />
          </Grid>))}
          <Divider />
          <Grid 
            item
            xs={12} >
            <Box component="span">
              <Pagination
                count={noOfPages}
                page={page}
                onChange={handleChange}
                defaultPage={1}
                color="secondary"
                size="large"
                variant="outlined"
                showFirstButton
                showLastButton
                classes={{ ul: classes.paginator }}
              />
            </Box>
          </Grid>
        </Grid>
      </List> 

    </>
  )
}
export {CompareView}