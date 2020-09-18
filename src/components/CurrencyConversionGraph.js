import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

let testData = {"rates":{"CAD":1.0,"HKD":5.89,"PHP":.78,"DKK":4.75}};
let currenciesList = testData["rates"];



/* 
maybe convert to Map with sized pin bullets for the most common currency pinned to where they are and how much they are worth???
*/

export default function CurrencyConversionGraph() {
  let chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.data = generateChartData();

  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  
  categoryAxis.dataFields.category = "currency";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 5;
  categoryAxis.tooltip.disabled = true;

  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
  valueAxis.renderer.minWidth = 50;
  valueAxis.min = 0;
  valueAxis.cursorTooltipEnabled = false;

  let series = chart.series.push(new am4charts.ColumnSeries());

  series.dataFields.valueY = "rate";
  series.dataFields.categoryX = "currency";

  //series.minBulletDistance = 10;
  series.tooltipText = "{valueY}";
  series.tooltip.pointerOrientation = "vertical";
  series.tooltip.background.cornerRadius = 20;
  series.tooltip.background.fillOpacity = 0.5;
  series.tooltip.label.padding(12,12,12,12)
  


  /* chart.scrollbarX = new am4charts.XYChartScrollbar();
  chart.scrollbarX.series.push(series);
   */
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.xAxis = categoryAxis;
  chart.cursor.snapToSeries = series;

  function generateChartData() {
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
  }
  return (
    <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
  );
}

