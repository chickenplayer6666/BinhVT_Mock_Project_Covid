import React from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

import {
  Grid,
  CardStyles,
  CardContent,
  Card,
  Typography,
} from "../../../MaterialUI/ExportComponent";

function StatisticsCard({ statistics }) {
  const classes = CardStyles(statistics);
  const { t } = useTranslation();

  return (
    <Grid container spacing={3}>
      {statistics.map((data) => (
        <Grid item sm={4} xs={12}>
          <Card style={data.borderLeft}>
            <CardContent>
              <Typography
                variant="body2"
                component="p"
                className={classes.title}
              >
                {t(data.title)}
              </Typography>
              <Typography
                variant="body2"
                component="span"
                className={classes.count}
              >
                <CountUp end={data.count} separator=" " duration={2} />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default StatisticsCard;
