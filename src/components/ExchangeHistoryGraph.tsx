import React, { FC, useLayoutEffect } from "react";
import clsx from 'clsx';
import { IExchangeHistoryGraphProps, IDataItem } from './types'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const drawerClosed = 100;

const useStyles = makeStyles((theme) => ({
  root:{
    justify: 'center',
    flexGrow: 1,},
  drawerClose: {
    marginLeft: drawerClosed,
    marginRight: drawerClosed-20,
    width: `calc(93% - ${drawerClosed}px)`, /* `calc(95% - 100px)`,  */
    height: "800px" ,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen})},
  drawerOpen: {
    marginLeft: drawerWidth,
    width: `calc(93% - ${drawerWidth}px)`, height: "800px" ,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen})},
  ExchangeHistoryGraph: {
    width: "90%", height: "800px"}
}));

const ExchangeHistoryGraph: FC<IExchangeHistoryGraphProps> =  ({
  history,
  opendrawer}) => {
  const classes = useStyles();

  useLayoutEffect(() => {

  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  am4core.options.autoDispose = true;

  let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.marginLeft = drawerWidth -10
    chart.marginRight = drawerWidth -40
  let data: Array<IDataItem> = [];
  let value, date, color;
  let previousValue = 0;

  for (let i = 0; i < history.length; i++) {
    color = am4core.color('#8CFFDA')
    value = history[i]['value'];
    date = history[i]['date'];

    if(i > 0){
      color = previousValue <= value ?
        am4core.color('#8CFFDA') :
        am4core.color('#dc67ab')
    }     
    data.push({ 
      date: date, 
      value: value, 
      color: color });
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
  series.stroke = am4core.color('#8CFFDA');;
  series.propertyFields.stroke = "color";

  dateAxis.skipEmptyPeriods = true;
  dateAxis.renderer.minGridDistance = 60;
  dateAxis.renderer.grid.template.location = 0;


  series.strokeWidth = 3;
  series.tensionX = 0.8;
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
  let scrollbarY = new am4core.Scrollbar();
  scrollbarY.parent = chart.leftAxesContainer;
  scrollbarY.toBack();

   // Create a horizontal scrollbar with preview and place it underneath the date axis
  let scrollbarX = new am4charts.XYChartScrollbar();
  scrollbarX.series.push(series);
  scrollbarX.parent = chart.bottomAxesContainer;
  /* 
    need to fix this typing later on, shoulnt have any
  */
  function customizeGrip(grip: any) {
    grip.background.fill = am4core.color('#dc67ab');
    grip.background.fillOpacity = 0.9;
  }
  //styling for the scroll bar
  customizeGrip(scrollbarY.startGrip);
  customizeGrip(scrollbarY.endGrip);
  scrollbarY.background.fill = am4core.color(/* '#dc67ab' */'#8CFFDA');
  scrollbarY.endGrip.icon.stroke = am4core.color('#00ffae');
  scrollbarY.startGrip.icon.stroke = am4core.color('#00ffae');
  customizeGrip(scrollbarX.startGrip);
  customizeGrip(scrollbarX.endGrip);
  scrollbarX.background.fill = am4core.color(/* '#dc67ab' */'#8CFFDA');
  scrollbarX.endGrip.icon.stroke = am4core.color('#00ffae');
  scrollbarX.startGrip.icon.stroke = am4core.color('#00ffae');


  let dateAxisTooltip = dateAxis.tooltip;
  valueAxis.cursorTooltipEnabled = false;
  chart.cursor = new am4charts.XYCursor();

  dateAxis.keepSelection = true;
  if (dateAxisTooltip) {
    dateAxisTooltip.background.fill = am4core.color("#8CFFDA");
  }

  return () => {
    chart.dispose();
    };
  }, [history]);

  return (
    <>
      <div 
        id="chartdiv" 
        className={clsx({
          [classes.drawerOpen]: opendrawer,
          [classes.drawerClose]: !opendrawer  })}
      />
    </>
    
  );
}

export { ExchangeHistoryGraph }