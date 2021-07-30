import React, { useEffect, useState } from "react";
import countryApi from "../../../Service/countryAPI";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import initLineChartOptions from "../../../Utils/initLineChartOptions";
import { Button, ButtonGroup } from "../../../MaterialUI/ExportComponent";

function StatisticalChart({ paramURL }) {
  const [dataChart, setDataChart] = useState({});
  const [filterDate, setFilterDate] = useState([]);
  const [reportType, setReportType] = useState("all");
  const [options, setOptions] = useState({});

  useEffect(() => {
    handleGetDataForChart(paramURL);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    handleGetDataForChart(paramURL);
  }, [paramURL]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let customData = [];
    switch (reportType) {
      case "all":
        customData = filterDate;
        break;
      case "30":
        customData = filterDate.slice(filterDate.length - 30);
        break;
      case "7":
        customData = filterDate.slice(filterDate.length - 7);
        break;

      default:
        customData = filterDate;
        break;
    }
    setOptions(initLineChartOptions(dataChart, customData));
  }, [dataChart, reportType]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleGetDataForChart = async (endpoint) => {
    try {
      const res = await countryApi.getHistoricalStatisticalOfCovid(endpoint);
      handleResponseFromHistorical(res);
    } catch (err) {}
  };

  const handleResponseFromHistorical = (res) => {
    if (paramURL === "all") {
      const { data } = res;
      setDataChart(data);
      setFilterDate(Object.keys(data.cases));
      setOptions(initLineChartOptions(res.data, Object.keys(data.cases)));
    } else {
      const { timeline } = res.data;
      setDataChart(timeline);
      setFilterDate(Object.keys(timeline.cases));
      setOptions(
        initLineChartOptions(res.data.timeline, Object.keys(timeline.cases))
      );
    }
  };

  return (
    <div>
      <ButtonGroup
        size="small"
        aria-label="small outlined button group"
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          color={reportType === "all" ? "secondary" : ""}
          onClick={() => setReportType("all")}
        >
          Tất cả
        </Button>
        <Button
          color={reportType === "30" ? "secondary" : ""}
          onClick={() => setReportType("30")}
        >
          30 ngày
        </Button>
        <Button
          color={reportType === "7" ? "secondary" : ""}
          onClick={() => setReportType("7")}
        >
          7 ngày
        </Button>
      </ButtonGroup>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default StatisticalChart;
