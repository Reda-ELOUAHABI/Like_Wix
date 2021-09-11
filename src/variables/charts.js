const Chart = require("chart.js");

var mode = "light";
//(themeMode) ? themeMode : 'light';
var fonts = {
  base: "Open Sans",
};

// Colors
var colors = {
  gray: {
    //#33ff00 = greeeeeeeeen
    900: "#33ff00",
  },
  theme: {
    default: "#33ff00",
    //the color of the line + numbers
    primary: "#3b55ed",
    secondary: "#33ff00",
    info: "#33ff00",
    success: "#33ff00",
    danger: "#33ff00",
    // vertical ones
    warning: "#3b55ed",
  },
  black: "#33ff00",
  white: "#33ff00",
  //color down the line
  transparent: "#b3bcf2",
};

// Methods

// Chart.js global options
function chartOptions() {
  // Options
  var options = {
    defaults: {
      global: {
        responsive: true,
        maintainAspectRatio: false,
        // defaultColor: mode === "dark" ? colors.gray[700] : colors.gray[600],
        // defaultFontColor: mode === "dark" ? colors.gray[700] : colors.gray[600],
        defaultFontFamily: fonts.base,
        defaultFontSize: 13,
        layout: {
          padding: 0,
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            usePointStyle: true,
            padding: 16,
          },
        },
        elements: {
          point: {
            radius: 0,
            backgroundColor: colors.theme["primary"],
          },
          line: {
            tension: 0.4,
            borderWidth: 4,
            borderColor: colors.theme["primary"],
            backgroundColor: colors.transparent,
            borderCapStyle: "rounded",
          },
          rectangle: {
            backgroundColor: colors.theme["warning"],
          },
          arc: {
            backgroundColor: colors.theme["primary"],
            borderColor: mode === "dark" ? colors.gray[800] : colors.white,
            borderWidth: 4,
          },
        },
        tooltips: {
          enabled: true,
          mode: "index",
          intersect: false,
        },
      },
      // doughnut: {
      //   cutoutPercentage: 83,
      //   legendCallback: function (chart) {
      //     var data = chart.data;
      //     var content = "";

      //     data.labels.forEach(function (label, index) {
      //       var bgColor = data.datasets[0].backgroundColor[index];

      //       content += '<span className="chart-legend-item">';
      //       content +=
      //         '<i className="chart-legend-indicator" style="background-color: ' +
      //         bgColor +
      //         '"></i>';
      //       content += label;
      //       content += "</span>";
      //     });

      //     return content;
      //   },
      // },
    },
  };

  // yAxes
  Chart.scaleService.updateScaleDefaults("linear", {
    gridLines: {
      borderDash: [2],
      borderDashOffset: [2],
      color: mode === "dark" ? colors.gray[900] : colors.gray[300],
      drawBorder: false,
      drawTicks: false,
      lineWidth: 0,
      zeroLineWidth: 0,
      zeroLineColor: mode === "dark" ? colors.gray[900] : colors.gray[300],
      zeroLineBorderDash: [2],
      zeroLineBorderDashOffset: [2],
    },
    ticks: {
      beginAtZero: true,
      padding: 10,
      callback: function (value) {
        if (!(value % 10)) {
          return value;
        }
      },
    },
  });

  // xAxes
  Chart.scaleService.updateScaleDefaults("category", {
    gridLines: {
      drawBorder: false,
      drawOnChartArea: false,
      drawTicks: false,
    },
    ticks: {
      padding: 20,
    },
  });

  return options;
}

// Parse global options
function parseOptions(parent, options) {
  for (var item in options) {
    if (typeof options[item] !== "object") {
      parent[item] = options[item];
    } else {
      parseOptions(parent[item], options[item]);
    }
  }
}

//The one Cumulative total
// Example 1 of Chart inside src/views/Index.js (Sales value - Card)
let chartExample1 = {
  //the fill in data
  data1: (canvas) => {
    return {
      labels: ["11/12", "12/12", "13/12", "14/12", "15/12", "16/12", "17/12"],
      datasets: [
        {
          label: "Cumulative Total",
          // data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
          data: [900, 1000, 1200, 2000, 1500, 1300, 1200],
        },
      ],
    };
  },
  data2: (canvas) => {
    return {
      labels: ["11/12", "12/12", "13/12", "14/12", "15/12", "16/12", "17/12"],
      datasets: [
        {
          label: "Performance",
          data: [0, 20, 5, 25, 10, 30, 15, 40, 40],
        },
      ],
    };
  },
};

// Example 2 of Chart inside src/views/Index.js (Total orders - Card)
let chartExample2 = {
  data: {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [25, 40, 30, 22, 17, 29],
        maxBarThickness: 10,
      },
    ],
  },
};

let chartExample3 = {
  data: {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  },
};
const dataDoughnut = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
let config = {
  type: "doughnut",
  data: dataDoughnut,
};

module.exports = {
  chartOptions, // used inside src/views/Index.js
  parseOptions, // used inside src/views/Index.js
  chartExample1, // used inside src/views/Index.js
  chartExample2, 
  chartExample3, 
  config,
  dataDoughnut, // used inside src/views/Index.js
};
