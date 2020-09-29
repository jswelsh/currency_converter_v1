import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

export default function CurrencyHistoryGraph(props) {
  let chart = am4core.create("chartdiv", am4charts.XYChart);

  chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
  
  let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            /* */chart.yAxes.push(new am4charts.ValueAxis());
  let series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = "value";
  series.dataFields.dateX = "date";
  series.tooltipText = "{value}";

  dateAxis.skipEmptyPeriods = true;
  dateAxis.renderer.minGridDistance = 30;
  dateAxis.renderer.grid.template.location = 0.5;


  //series.tooltip.pointerOrientation = "vertical";
  series.strokeWidth = 3;
  series.tensionX = 0.8;
  series.fillOpacity = 0.2;
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
  bullet.circle.radius = 5;
  bullet.circle.fill = am4core.color("#fff");

  let bullethover = bullet.states.create("hover");
  bullethover.properties.scale = 2;

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

  dateAxis.keepSelection = true;
  
  chart.data = props.history
  
  return (
    <div className="CurrencyHistoryGraph">
      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
      <button name="history" value="history" onClick={() => props.convertHistoryHandler()}>History</button>
    </div> 
  );
}