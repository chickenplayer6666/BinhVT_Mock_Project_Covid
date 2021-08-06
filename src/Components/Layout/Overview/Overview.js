import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import countryApi from "../../../Service/countryAPI";
import { transformToMapData } from "../../../Utils/helper";
import {
  MainLayout,
  StatisticsCard,
  StatisticalChart,
  WorldMap,
} from "../../index";
import { Box, Typography } from "../../../MaterialUI/ExportComponent";
import setStatisticsForCard from "../../../Utils/setStatisticsForCard";

function Overview(props) {
  const [worldData, setWorldData] = useState();
  const [statisticsOverview, setStatisticsOverview] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    handleGetAllCountries();
    handleGetStatisticsOverview();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleGetAllCountries = async () => {
    const res = await countryApi.getAllCountries();
    const newDataCountries = transformToMapData(res.data);
    setWorldData(newDataCountries);
  };

  const handleGetStatisticsOverview = async () => {
    const res = await countryApi.getStatisticsOverview();
    setStatisticsForCard(res.data, setStatisticsOverview);
  };

  return (
    <MainLayout>
      <Typography variant="h4" component="h4">
        {t("WHO Coronavirus (COVID-19) Dashboard")}
      </Typography>
      <Box container spacing={3} marginTop={5}>
        <WorldMap worldData={worldData} />
      </Box>
      <Box container spacing={3} marginTop={5}>
        <Box container spacing={3} marginTop={5}>
          <StatisticsCard statistics={statisticsOverview} />
        </Box>
        <Box container spacing={3} marginTop={5}>
          <StatisticalChart paramURL={"all"} />
        </Box>
      </Box>
      <Box container spacing={3} marginTop={5}>
        {/* <PieChartSummary /> */}
      </Box>
    </MainLayout>
  );
}

export default Overview;
