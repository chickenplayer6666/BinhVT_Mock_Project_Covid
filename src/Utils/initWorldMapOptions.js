const initWorldMapOptions = (mapWorld, data, func) => {
  return {
    chart: {
      height: "500",
      backgroundColor: "#CCCCCC",
    },
    title: {
      text: null,
    },
    mapNavigation: {
      enabled: true,
      enableMouseWheelZoom: true,
    },
    colorAxis: {
      min: 0,
      dataClasses: [
        {
          color: "#95DCF4",
          from: 0,
          name: func("Cases") + "<0.1M",
          to: 100000,
        },
        {
          color: "#00ACE3",
          from: 1000000,
          name: func("Cases") + "<1M",
          to: 1e6,
        },
        {
          color: "#00ACE3",
          from: 1e6,
          name: func("Cases") + "<10M",
          to: 1e7,
        },
        {
          color: "#007092",
          from: 1e7,
          name: func("Cases") + ">10M",
        },
      ],
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "bottom",
    },
    tooltip: {
      useHTML: true,
      pointFormat: `
      <div style="display: flex; align-items: center; justify-content: flex-start">
        <img style="width: 50px; height: 30px;" src={point.flag} />
        <b>&nbsp{point.properties.name}</b>
      </div> 
      <br />
      <b style="color: #c9302c">
        ${func("Total Cases")}: {point.textCases}
      </b> 
      <br /> 
      <b style="color: #28a745">
        ${func("Total Recovered")}: {point.textRecovered}
      </b> 
      <br /> 
      <b style="color: gray">
        ${func("Total Deaths")}: {point.textDeaths}
      </b>
      `,
    },
    series: [
      {
        data: data,
        mapData: mapWorld,
        joinBy: ["iso-a3", "code3"],
        name: func("Statistics"),
        borderColor: "#555",
        borderWidth: 0.5,
        states: {
          hover: {
            color: "green",
            borderColor: "#555",
            borderWidth: 1,
          },
        },
      },
      {
        type: "mapline",
        name: "Separators",
        data: data,
        nullColor: "gray",
        showInLegend: false,
        enableMouseTracking: true,
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              align: "center",
              verticalAlign: "bottom",
              layout: "horizontal",
            },
          },
        },
      ],
    },
  };
};

export default initWorldMapOptions;
