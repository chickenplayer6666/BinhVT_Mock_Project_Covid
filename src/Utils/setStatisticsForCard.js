const setStatisticsForCard = (obj, functionCB) => {
  const data = [
    {
      title: "Total Cases",
      count: obj.cases,
      borderLeft: { borderLeft: "5px solid #c9302c" },
    },
    {
      title: "Total Recovered",
      count: obj.recovered,
      borderLeft: { borderLeft: "5px solid #28a745" },
    },
    {
      title: "Total Deaths",
      count: obj.deaths,
      borderLeft: { borderLeft: "5px solid gray" },
    },
  ];
  return functionCB(data);
};

export default setStatisticsForCard;
