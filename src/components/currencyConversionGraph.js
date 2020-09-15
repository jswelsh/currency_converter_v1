import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

let chart = am4core.create("chartdiv", am4charts.XYChart);

let testData = {"rates":{"CAD":1.0,"HKD":5.8951004222,"ISK":102.7248304976,"PHP":36.7845720865,"DKK":4.7586030446,"HUF":228.7834207496,"CZK":17.1593961878,"GBP":0.5890686964,"RON":3.1072022515,"SEK":6.6547268773,"IDR":11291.8446974543,"INR":55.980875016,"BRL":3.9831137265,"RUB":56.9920046053,"HRK":4.8212229756,"JPY":80.20340284,"THB":23.7168990661,"CHF":0.688755277,"EUR":0.6396315722,"MYR":3.1418702827,"BGN":1.2509914289,"TRY":5.6941921453,"CNY":5.1506971984,"NOK":6.8416911859,"NZD":1.1305488039,"ZAR":12.5156070104,"USD":0.7606498657,"MXN":15.9464628374,"SGD":1.0338365102,"AUD":1.037418447,"ILS":2.60170142,"KRW":895.9511321479,"PLN":2.8438659332},"base":"CAD","date":"2020-09-15"};
let currenciesList = testData;
chart.data = generateChartData();







let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "currency";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 60;
categoryAxis.tooltip.disabled = true;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
/* 
valueAxis.renderer.minWidth = 50;
valueAxis.min = 0;
valueAxis.cursorTooltipEnabled = false;
*/
/* 
let series = chart.series.push(new am4charts.ColumnSeries());
*/
let series = chart.series.push(new am4charts.LineSeries());
/* 
series.sequencedInterpolation = true;
series.columns.template.strokeWidth = 0;
*/
series.dataFields.valueY = "rate";
series.dataFields.categoryX = "currency";
series.strokeWidth = 2;
series.minBulletDistance = 1;
series.tooltipText = "{valueY}";
series.tooltip.pointerOrientation = "vertical";
series.tooltip.background.cornerRadius = 20;
series.tooltip.background.fillOpacity = 0.5;
series.tooltip.label.padding(12,12,12,12)

/* chart.scrollbarX = new am4charts.XYChartScrollbar();
chart.scrollbarX.series.push(series);
 */
chart.cursor = new am4charts.XYCursor();
chart.cursor.xAxis = dateAxis;
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