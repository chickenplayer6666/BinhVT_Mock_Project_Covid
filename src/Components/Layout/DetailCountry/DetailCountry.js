import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";

import {
  Container,
  Box,
  Grid,
  Typography,
} from "../../../MaterialUI/ExportComponent";
import { SearchCountry, StatisticsCard, StatisticalChart } from "../../index";
import countryApi from "../../../Service/countryAPI";
import setStatisticsForCard from "../../../Utils/setStatisticsForCard";

function DetailCountry(props) {
  const paramURL = props.match.params.country;
  const [country, setCountry] = useState({});
  const [statistics, setStatistics] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    handleGetDataOfCountry(paramURL);
  }, [paramURL]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleGetDataOfCountry = async (endpoint) => {
    try {
      const res = await countryApi.getCountry(endpoint);
      setCountry(res.data);
      setStatisticsForCard(res.data, setStatistics);
    } catch (err) {}
  };

  return (
    <>
      <Container spacing={3}>
        <Grid container spacing={3} xs={12}>
          <Grid item sm={7} xs={12} spacing={5}>
            <Typography variant="h3" component="h2">
              {country && country.country}
            </Typography>
            <Typography variant="h5" component="h4">
              {t("Statistics")} COVID-19
            </Typography>
            <Typography>{moment().format("LLL")}</Typography>
          </Grid>
          <Grid item sm={5} xs={12}>
            <SearchCountry />
          </Grid>
        </Grid>
        <Box container spacing={3} marginTop={5}>
          <StatisticsCard statistics={statistics} />
        </Box>
        <Box container spacing={3} marginTop={5}>
          <StatisticalChart paramURL={paramURL} />
        </Box>
      </Container>
    </>
  );
}

export default React.memo(DetailCountry);
