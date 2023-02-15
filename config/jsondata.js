import Highcharts from "highcharts";

export const lineChartData = {
    chart: {
      type: "spline",
      backgroundColor: "#0E1023",
    },
    title: {
      text: "",
    },
    // subtitle: {
    //     text: 'Irregular time data in Highcharts JS'
    // },
    xAxis: {
      type: "datetime",
      dateTimeLabelFormats: {
        month: "%b %Y",
        year: "%b %Y",
      },
      title: {
        text: "",
      },
      labels: {
        // format: "{%b %Y}",
        style: {
          color: "#A6A4CC",
        },
      },
      // gridLineWidth: 0,
      //     gridLineColor: 'transparent'
    },
    yAxis: {
      title: {
        text: "",
      },
      min: 10000,
      opposite: true,
      labels: {
        style: {
          color: "#A6A4CC",
        },
      },
      gridLineDashStyle: "Dash",
      gridLineColor: "#A6A4CC",
      // gridLineWidth: 0,
      //     gridLineColor: 'transparent'
    },
    // tooltip: {
    //   headerFormat: "<b>{series.name}</b><br>",
    //   pointFormat: "{point.x:%e. %b}: {point.y:.2f} m",
    // },
  
    plotOptions: {
      series: {
        marker: {
          enabled: false,
          radius: 2.5,
        },
      },
    },
  
    colors: ["#009B00"],
    tooltip: {
      // shape: 'callout',
      backgroundColor: "#00E97C",
      formatter: function () {
        return `Current value: ${this.y}<br/>Invested value: ${this.point.z}`;
      },
      //   formatter: function() {
      //   return 'Date: ' + Highcharts.dateFormat('%Y-%m-%d', this.point.date) + '<br/>' +
      //     'Current Value: ' + this.point.current + '<br/>' +
      //     'Invested Value: ' + this.point.invested;
      // }
    },
    credits: {
      enabled: false,
    },
  
    // Define the data points. All series have a year of 1970/71 in order
    // to be compared on the same x axis. Note that in JavaScript, months start
    // at 0 for January, 1 for February etc.
    series: [
      {
        name: "",
        data: [
          { x: Date.UTC(2022, 9, 24), y: 10000, z: 12000 },
          { x: Date.UTC(2022, 10, 27), y: 20000, z: 20000 },
          { x: Date.UTC(2022, 11, 30), y: 15000, z: 30000 },
          { x: Date.UTC(2023, 1, 3), y: 25000, z: 4000 },
          { x: Date.UTC(2023, 2, 6), y: 32000, z: 50220 },
          { x: Date.UTC(2023, 6, 10), y: 20000, z: 20220 },
          { x: Date.UTC(2023, 10, 10), y: 32000, z: 42000 },
          { x: Date.UTC(2023, 12, 10), y: 42000, z: 42000 },
          { x: Date.UTC(2024, 2, 10), y: 40000, z: 42000 },
          { x: Date.UTC(2024, 6, 10), y: 30000, z: 32000 },
          { x: Date.UTC(2024, 10, 10), y: 50000, z: 55200 },
          { x: Date.UTC(2024, 12, 10), y: 45000, z: 45000 },
          { x: Date.UTC(2025, 1, 10), y: 40000, z: 44000 },
          { x: Date.UTC(2025, 3, 10), y: 50000, z: 45000 },
        ],
      },
    ],
  };

export const barGraphData = {
    chart: {
        type: 'column',
        backgroundColor: "#0E1023",
    },
    title: {
        text: '',
        align: 'left'
    },
    xAxis: {
        categories: ['Inflation', 'FD', 'Nifty 100', 'Abakkus'],
        labels: {
            style: {
              color: "#fff",
            },
          },
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        labels: {
            enabled:false,
        },
        stackLabels: {
            enabled: true,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts?.defaultOptions?.title?.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray',
                textOutline: 'none'
            }
        },
        gridLineWidth: 0,
          gridLineColor: 'transparent'
    },
    credits: {
        enabled: false,
      },
    tooltip: {
        enabled: false,
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            borderWidth: 0,
            borderColor: null,
            color: null,
            
            dataLabels: {
                enabled: false
            },
        }
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'BPL',
        data: [3, 5, 1, 13],
        // borderRadius: 8,
        color: {
            linearGradient: [0, 0, 0, 300],
            stops: [
                [0, '#009B00'],
                [1, '#84A778']
            ]
        }
    }, {
        name: 'FA Cup',
        data: [14, 8, 8, 12],
        color: {
            linearGradient: [0, 0, 0, 300],
            stops: [
                [0, '#9291C1'],
                [1, '#0C0F2E']
            ]
        }
    }]
}