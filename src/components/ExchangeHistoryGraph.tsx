import React, { FC, useEffect } from "react";
import clsx from 'clsx';
import { Card, Grid, CardHeader, CardContent, Divider } from '@material-ui/core';
import { IExchangeHistoryGraphProps, IDataItem } from './types'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { makeStyles } from '@material-ui/core/styles';

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
  ExchangeHistoryGraph: {
    borderRadius: 12,
    padding: 30,
    margin:'auto',
    width: "95%", minHeight: 730},
    cardHeader: {
      backgroundColor:'secondary'},
    avatar: {
      width: 60,
      height: 60,
      margin: 'auto',
    },
    
}));

const ExchangeHistoryGraph: FC<IExchangeHistoryGraphProps> =  ({
  fromCurrency,
  opendrawer,
  toCurrency,
  history,
}) => {
  const classes = useStyles();

  /* useLayoutEffect */
  useEffect(() => {
  const color = { 
    primary: am4core.color('#8CFFDA'),
    secondary: am4core.color('#e385bb')
  }
  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  am4core.options.autoDispose = true;

  let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.marginLeft = drawerWidth -10
    chart.marginRight = drawerWidth -40
  let data: Array<IDataItem> = [];
  let value, date;
  let previousValue = 0;

  for (let i = 0; i < history.length; i++) {
    value = history[i]['value'];
    date = history[i]['date'];
    //change the color of previous value
    if(i > 0){
      data[i - 1].color = previousValue <= value ?
        color.primary :
        color.secondary
    }     
    data.push({ 
      date: date, 
      value: value });
    previousValue = value;
} 


chart.data = data;
  chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
  let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  let series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = "value";
  series.dataFields.dateX = "date";
  series.tooltipText = "{value}";
  series.stroke = color.primary;
  series.propertyFields.stroke = "color";

  dateAxis.skipEmptyPeriods = true;
  dateAxis.renderer.minGridDistance = 60;
  dateAxis.renderer.grid.template.location = 0;

  series.strokeWidth = 3;
  // series.tensionX = 0.8; // can't keep this with changing color of line depening on delta being +/- as its a new line after every change
  series.fill = series.stroke;
  series.fillOpacity = 0.2;
  series.minBulletDistance = 15;

  // Drop-shaped tooltips
  if (series.tooltip) {
  series.tooltip.background.cornerRadius = 20;
  series.tooltip.background.strokeOpacity = 0.5;
  series.tooltip.pointerOrientation = "vertical";
  series.tooltip.label.padding(12,12,12,12)
  series.tooltip.label.minWidth = 40;
  series.tooltip.label.minHeight = 40;
  series.tooltip.label.textAlign = "middle";
  }
  // Create vertical scrollbar and place it before the value axis
  chart.scrollbarY = new am4core.Scrollbar();
  chart.scrollbarY.parent = chart.leftAxesContainer;
  chart.scrollbarY.toBack();

  // Create a horizontal scrollbar with preview and place it underneath the date axis
  chart.scrollbarX = new am4charts.XYChartScrollbar();


  //need to fix the series on this with typescript yelling
  //chart.scrollbarX.series.push(series);
  chart.scrollbarX.parent = chart.bottomAxesContainer;
  /* 
    need to fix this typing later on, shoulnt have any
    */
  //styling for the scroll bar
  function customizeGrip(grip: any) {
    grip.background.fill = color.secondary;
    grip.background.fillOpacity = 0.9;}

  function scrollbarConstructor(scrollbar: any) {
    customizeGrip(scrollbar.startGrip);
    customizeGrip(scrollbar.endGrip);
    scrollbar.background.fill = color.primary;
    scrollbar.endGrip.icon.stroke = color.primary;
    scrollbar.startGrip.icon.stroke = color.primary;}

  scrollbarConstructor(chart.scrollbarY)
  scrollbarConstructor(chart.scrollbarX)
  
  let dateAxisTooltip = dateAxis.tooltip;
  valueAxis.cursorTooltipEnabled = false;
  chart.cursor = new am4charts.XYCursor();

  dateAxis.keepSelection = true;
  if (dateAxisTooltip) {
    dateAxisTooltip.background.fill = color.primary;}

  return () => {
    chart.dispose();
    };
  }, [history]);

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

          <CardContent id="chartdiv" className={classes.ExchangeHistoryGraph} /> 
        </Card> 
      </Grid>
    </Grid>
  );
}

export { ExchangeHistoryGraph }