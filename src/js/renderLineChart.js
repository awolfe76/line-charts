var c3 = require('c3');
var chart;
function setYLabel(key) {
  var label = 'Count';
  if (key === 'loan_amount') {
    label = 'Application amount in thousands';
  }

  return label;
}

function setColors(value) {
  var colors = {};
  colors[value] = '#FFB149';

  return colors;
}

function renderChart(json, value) {
  console.log(value);
  value = typeof value !== 'undefined' ? value : 'count';
  if (chart) {
    chart.load({
      json: json.data.years,
      keys: {
        x: 'year',
        value: [value]
      },
      colors: setColors(value),
      unload: true
    });
    chart.axis.labels({
      y: setYLabel(value)
    });
  } else {
    chart = c3.generate({
      bindto: '#chart',
      transition: {
        duration: 500
      },
      padding: {
        top: 10,
        right: 15,
      },
      data: {
        type: 'line',
        json: json.data.years,
        colors: setColors(value),
        keys: {
          x: 'year',
          value: [value]
        }
      },
      grid: {
        /*x: {
          show: true
        },*/
        y: {
          show: true
        }
      },
      axis: {
        x: {
          padding: {
            left: .1,
            right: .1
          },
          label: {
            position: 'outer-center',
            text: 'Year'
          }
        },
        y: {
          padding: {
            top: 10,
            bottom: 0
          },
          min: 0,
          label: {
            position: 'outer-middle',
            text: setYLabel(value)
          },
          tick: {
            format: function (d) { return d.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
            }
          }
        }
      },
      legend: {
        show: false
      }
    });
  }
}

module.exports = renderChart;
