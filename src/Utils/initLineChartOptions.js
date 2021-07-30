const initLineChartOptions = (data, filterDate) => {
  return {
    chart: {
      type: "areaspline",
      zoomType: "x",
      height: 500,
    },
    title: {
      text: "Statistical Chart Summary",
    },
    xAxis: {
      categories: filterDate,
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: "right",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
      areaspline: {
        fillOpacity: 0.3,
      },
    },
    series: [
      {
        name: "Cases",
        data: filterDate.map((item) => data.cases[item]),
        color: "#c9302c",
      },
      {
        name: "Recovered",
        data: filterDate.map((item) => data.recovered[item]),
        color: "#28a745",
      },
      {
        name: "Deaths",
        data: filterDate.map((item) => data.deaths[item]),
        color: "gray",
      },
    ],
  };
};

export default initLineChartOptions;
