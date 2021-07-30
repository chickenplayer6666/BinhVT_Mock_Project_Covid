const initWorldMapOptions = (mapWorld, data) => {
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
          name: "cases<0.1M",
          to: 100000,
        },
        {
          color: "#00ACE3",
          from: 1000000,
          name: "cases<1M",
          to: 1e6,
        },
        {
          color: "#00ACE3",
          from: 1e6,
          name: "cases<10M",
          to: 1e7,
        },
        {
          color: "#007092",
          from: 1e7,
          name: "cases>10M",
        },
      ],
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "bottom",
    },
    tooltip: {
      pointFormat: "{point.properties.name}: {point.textCases}",
    },
    series: [
      {
        data: data,
        mapData: mapWorld,
        joinBy: ["iso-a3", "code3", "textCases"],
        name: "Total cases",
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
  };
};

export default initWorldMapOptions;
