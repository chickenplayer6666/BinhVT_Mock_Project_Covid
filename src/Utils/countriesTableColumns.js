const countriesTableColumns = (func) => [
  {
    field: "country",
    headerName: func("Country"),
    width: 140,
    editable: true,
  },
  {
    field: "continent",
    headerName: func("Continent"),
    width: 140,
    editable: true,
  },
  {
    field: "cases",
    headerName: func("Total Cases"),
    width: 190,
    editable: true,
  },
  {
    field: "todayCases",
    headerName: func("Today Cases"),
    width: 190,
    editable: true,
  },
  {
    field: "recovered",
    headerName: func("Total Recovered"),
    width: 190,
    editable: true,
  },
  {
    field: "todayRecovered",
    headerName: func("Today Recovered"),
    width: 190,
    editable: true,
  },
  {
    field: "deaths",
    headerName: func("Total Deaths"),
    width: 190,
    editable: true,
  },
  {
    field: "todayDeaths",
    headerName: func("Today Deaths"),
    width: 170,
    editable: true,
  },
];

export default countriesTableColumns