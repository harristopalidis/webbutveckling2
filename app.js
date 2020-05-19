var today = new Date();
var todayShort = today.toLocaleDateString();
var yesterday = new Date(Date.now() - 86400000 * 10);
var yesterdayShort = yesterday.toLocaleDateString();
console.log(todayShort.toString());
console.log(yesterdayShort.toString());

var options = {
  symbol: 'TSLA',
  interval: 'daily',
  start: new Date(Date.now() - 86400000 * 10),
  end: new Date(Date.now())
  // start: yesterdayShort,
  // end: todayShort,
}

var option = {
  width: 700,
  height: 500
};

async function getStock() {
var stocks = new Stocks('2R57ECJV5WVKU6EE');
var result = await stocks.timeSeries(options);
result.reverse();

// var data = {
//   labels: Array.from(result.close),
// };

var data = {
labels: result.map(item => item.date.toLocaleDateString()), //X
series: [
  result.map(item => item.close)]



};



new Chartist.Line('.ct-chart', data, option);

const elem = document.getElementById('range');
const dateRangePicker = new DateRangePicker(elem, {
  format: 'dd/mm/yy',
  autohide: true,
  daysOfWeekDisabled: [0,6],
  language: 'sv',
  todayHighlight: true,
  weekStart: 1,
});
console.log(dateRangePicker);

};


getStock();

// const elem = document.querySelector('input[name="datepicker"]');
// const datepicker = new Datepicker(elem, {
//       // options here
// });




