import React, { FC, Suspense } from "react";
import clsx from 'clsx';
import { Card, Grid, CardHeader, CardContent, Divider, CircularProgress } from '@material-ui/core';
import { IHistoryGraphViewProps, IDataItem } from './types'


import { makeStyles } from '@material-ui/core/styles';

const HistoryGraph = React.lazy(() =>
import('./HistoryGraph'))
// import HistoryGraph from './HistoryGraph'

const drawerWidth = 290;
const drawerClosed = 130;

const useStyles = makeStyles((theme) => ({
  root:{
    justify: 'center',
    flexGrow: 1,},
  drawerClose: {
    marginLeft: drawerClosed,
    marginRight: drawerClosed-20,
    width: `calc(93% - ${drawerClosed}px)`, /* `calc(95% - 100px)`,  */
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen})},
  drawerOpen: {
    marginLeft: drawerWidth,
    width: `calc(93% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen})},
  cardHeader: {
    backgroundColor:'secondary'},
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
}));

const HistoryGraphView: FC<IHistoryGraphViewProps> =  ({
  fromCurrency,
  opendrawer,
  toCurrency,
  history,
}) => {
  const classes = useStyles();


  return (
    <Grid 
      spacing={2}
      container 
      className={clsx({
        [classes.drawerOpen]: opendrawer,
        [classes.drawerClose]: !opendrawer})}>
      <Grid 
        item
        xs={12} >
        <Card>
        <CardHeader
          title={`${fromCurrency} to ${toCurrency}`}
          subheader={'for the period of Start date to End date'}
          subheaderTypographyProps={{ align: 'center'}}
          titleTypographyProps={{ align: 'center',variant: "h3" }}>
              <Divider variant="middle" />
            </CardHeader>
          <Suspense fallback={<CircularProgress color="primary" />}>
            <HistoryGraph history={history}/>
          </Suspense>
        </Card> 
      </Grid>
    </Grid>
  );
}

export { HistoryGraphView }