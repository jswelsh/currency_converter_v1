import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root:{
    justify: 'center',
    flexGrow: 1,
  },
  ExchangeHistoryGraph: {
    /* marginLeft:230, marginRight:200, */ width: "80%", height: "800px" 
  }
}));

export function ExchangeHistoryGraph(props) {
  const classes = useStyles();
  const charty = useRef(null);

  useLayoutEffect(() => {

  am4core.useTheme(am4themes_dark);
  am4core.useTheme(am4themes_animated);
  am4core.options.autoDispose = true;

  let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.marginLeft = 230
    chart.marginRight = 200
    chart.data = props.history
    
    /* 
  dateAxis.dateFormats.setKey("day", "MMMM dt");
dateAxis.periodChangeDateFormats.setKey("day", "MMMM dt"); 
  */

  chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
  
  let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  let series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = "value";
  series.dataFields.dateX = "date";
  series.tooltipText = "{value}";
  series.stroke = '#8CFFDA';

/*   dateAxis.skipEmptyPeriods = true; */
  dateAxis.renderer.minGridDistance = 60;
  dateAxis.renderer.grid.template.location = 0;


  series.tooltip.pointerOrientation = "vertical";
  series.strokeWidth = 3;
  /* series.tensionX = 0.8; */
  series.fill = series.stroke;
  series.fillOpacity = 0.2;
  series.minBulletDistance = 15;
  

  // Drop-shaped tooltips
  series.tooltip.background.cornerRadius = 20;
  series.tooltip.background.strokeOpacity = 0.5;
  series.tooltip.pointerOrientation = "vertical";
  series.tooltip.label.padding(12,12,12,12)
  series.tooltip.label.minWidth = 40;
  series.tooltip.label.minHeight = 40;
  series.tooltip.label.textAlign = "middle";
  series.tooltip.label.textValign = "middle";

  // Create vertical scrollbar and place it before the value axis
  chart.scrollbarY = new am4core.Scrollbar();
  chart.scrollbarY.parent = chart.leftAxesContainer;
  chart.scrollbarY.toBack();

   // Create a horizontal scrollbar with preview and place it underneath the date axis
   chart.scrollbarX = new am4charts.XYChartScrollbar();
   chart.scrollbarX.series.push(series);
   chart.scrollbarX.parent = chart.bottomAxesContainer;

  function customizeGrip(grip) {
    grip.background.fill = am4core.color('#8CFFDA');
    grip.background.fillOpacity = 0.5;
  }
  //stlying for the scroll bar
  customizeGrip(chart.scrollbarY.startGrip);
  customizeGrip(chart.scrollbarY.endGrip);
  chart.scrollbarY.background.fill = am4core.color(/* '#dc67ab' */'#8CFFDA');
  chart.scrollbarY.background.fillOpacity = 0.2;
  customizeGrip(chart.scrollbarX.startGrip);
  customizeGrip(chart.scrollbarX.endGrip);
  chart.scrollbarX.background.fill = am4core.color(/* '#dc67ab' */'#8CFFDA');
  chart.scrollbarX.background.fillOpacity = 0.2;

  let dateAxisTooltip = dateAxis.tooltip;
  valueAxis.cursorTooltipEnabled = false;
  chart.cursor = new am4charts.XYCursor();
/*     
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.xAxis = valueAxis;
  chart.cursor.snapToSeries = series;
*/

  dateAxis.keepSelection = true;
  dateAxisTooltip.background.fill = am4core.color("#8CFFDA");
  
  charty.current = chart;

    return () => {
      chart.dispose();
    };
  }, [props.history]);
  
 /*  useLayoutEffect(() => {
        charty.current
    }, [props.history]);
 */

  return (
    <>
      <div id="chartdiv" className={classes.ExchangeHistoryGraph}  ></div>
    </>
    
  );
}