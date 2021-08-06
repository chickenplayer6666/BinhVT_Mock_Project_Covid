import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";

import {
  Container,
  DataGrid,
  SearchStyles,
  Grid,
  Typography,
} from "../../../MaterialUI/ExportComponent";
import { SearchCountry } from "../../index";
import countryApi from "../../../Service/countryAPI";
import countriesTableColumns from "../../../Utils/countriesTableColumns";

function Countries(props) {
  const classes = SearchStyles();
  const [countries, setCountries] = useState([]);
  const [pageSize, setPageSize] = React.useState(10);
  const { t } = useTranslation();
  useEffect(() => {
    handleGetAllCountries();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleGetAllCountries = async () => {
    try {
      const res = await countryApi.getAllCountries();
      setCountries(res.data);
    } catch (err) {}
  };

  const handlePageSizeChange = (params) => {
    setPageSize(params.pageSize);
  };

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item sm={8} xs={12}>
            <Typography variant="h4" component="h4">
              {t("Situation by Region, Country, Territory & Area")}
            </Typography>
          </Grid>
          <Grid item sm={4} xs={12}>
            <SearchCountry />
          </Grid>
        </Grid>
      </Container>
      <div className={classes.root} style={{ display: "block" }}>
        <div
          style={{
            height: 550,
            width: "100%",
            marginTop: "20px",
            display: "block",
          }}
        >
          <DataGrid
            rows={countries}
            columns={countriesTableColumns(t)}
            getRowId={(row) => row.updated}
            pagination
            pageSize={pageSize}
            onPageSizeChange={handlePageSizeChange}
            rowsPerPageOptions={[10, 25, 50]}
          />
        </div>
      </div>
    </>
  );
}

export default React.memo(Countries);
