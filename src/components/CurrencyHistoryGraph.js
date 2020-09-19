import React from "react";
import HistoryButton from "./HistoryButton";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


am4core.useTheme(am4themes_animated);

export default function CurrencyConversionGraph(props) {
  let chart = am4core.create("chartdiv", am4charts.XYChart);

  chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

  let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
/*  valueAxis.renderer.minWidth = 50;
  valueAxis.min = 0;
  valueAxis.cursorTooltipEnabled = false; */

  let series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = "value";
  series.dataFields.dateX = "date";
  series.tooltipText = "{value}";
  //series.tooltip.pointerOrientation = "vertical";
  series.strokeWidth = 2;
  series.minBulletDistance = 15;

  // Drop-shaped tooltips
  series.tooltip.background.cornerRadius = 20;
  series.tooltip.background.strokeOpacity = 0;
  series.tooltip.pointerOrientation = "vertical";
  series.tooltip.label.minWidth = 40;
  series.tooltip.label.minHeight = 40;
  series.tooltip.label.textAlign = "middle";
  series.tooltip.label.textValign = "middle";


  // Make bullets grow on hover
  let bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.strokeWidth = 2;
  bullet.circle.radius = 4;
  bullet.circle.fill = am4core.color("#fff");

  let bullethover = bullet.states.create("hover");
  bullethover.properties.scale = 1.3;

  // Make a panning cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = "panXY";
  chart.cursor.xAxis = dateAxis;
  chart.cursor.snapToSeries = series;

  // Create vertical scrollbar and place it before the value axis
  chart.scrollbarY = new am4core.Scrollbar();
  chart.scrollbarY.parent = chart.leftAxesContainer;
  chart.scrollbarY.toBack();

  // Create a horizontal scrollbar with previe and place it underneath the date axis
  chart.scrollbarX = new am4charts.XYChartScrollbar();
  chart.scrollbarX.series.push(series);
  chart.scrollbarX.parent = chart.bottomAxesContainer;

  dateAxis.start = 0.79;
  dateAxis.keepSelection = true;
  
  //chart.data = props.history
  
  
  
  /* chart.scrollbarX = new am4charts.XYChartScrollbar();
  chart.scrollbarX.series.push(series);
   */
/*   chart.cursor = new am4charts.XYCursor();
  chart.cursor.xAxis = categoryAxis;
  chart.cursor.snapToSeries = series; */
  /* let history = () => props.convertHandler */


/*   function generateChartData() {
    let chartData = [];

    for (const currency in currenciesList) {
      if (currenciesList.hasOwnProperty(currency)) {
        const rate = currenciesList[currency];
        chartData.push({
          currency: currency,
          rate: rate
        })
      }
    }
    return chartData;
  } */
  return (
    <div className="CurrencyHistoryGraph">
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      <div>
        <HistoryButton
          onClick={props.convertHistoryHandler}
          children={"history"}
        />
      </div>
 {/*      <h3>{props.history}</h3> */}
    </div> 
  );
}