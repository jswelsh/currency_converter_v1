import React, { FC, Suspense } from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, Grid, CardHeader, CardContent, CircularProgress } from '@material-ui/core';
import { IHistoryGraphViewProps } from './types'

const HistoryGraph = React.lazy(() =>
import('./HistoryGraph'))

const drawerWidth = 290;
const drawerClosed = 130;

const useStyles = makeStyles((theme) => ({
  root:{
    justify: 'center',
    flexGrow: 1,},
  drawerClose: {
    marginLeft: drawerClosed,
    marginRight: drawerClosed-20,
    width: `calc(93% - ${drawerClosed}px)`,
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
  CardContent: {
    minHeight: 730
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
}));

const HistoryGraphView: FC<IHistoryGraphViewProps> =  ({
  fromCurrency,
  openDrawer,
  toCurrency,
  history,
}) => {
  const classes = useStyles();


  return (
    <Grid 
      spacing={2}
      container 
      className={clsx({
        [classes.drawerOpen]: openDrawer,
        [classes.drawerClose]: !openDrawer})}>
      <Grid 
        item
        xs={12} >
        <Card>
          <CardHeader
            title={`${fromCurrency} to ${toCurrency}`}
            subheader={'for the period of Start date to End date'}
            subheaderTypographyProps={{ align: 'center'}}
            titleTypographyProps={{ align: 'center',variant: "h3" }}>
          </CardHeader>
          <Suspense fallback={
            <CardContent >
              <Grid 
              className={classes.CardContent} 
              container 
              direction="row"
              justify="center"
              alignItems="center">
                <Grid item >
                  <CircularProgress color="secondary" />
                </Grid>
              </Grid>
            </CardContent>
          }>
            <HistoryGraph history={history}/>
          </Suspense>
        </Card> 
      </Grid>
    </Grid>
  );
}

export { HistoryGraphView }