import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import map from "@highcharts/map-collection/custom/world.geo.json";
import initWorldMapOptions from "../../../Utils/initWorldMapOptions";
import { useTranslation } from "react-i18next";

// Load Highcharts modules
highchartsMap(Highcharts);

function WorldMap({ worldData }) {
  const [worldMapOptions, setWorldMapOptions] = useState({});
  const { t } = useTranslation();
  
  useEffect(() => {
    setWorldMapOptions(initWorldMapOptions(map, worldData, t));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setWorldMapOptions(initWorldMapOptions(map, worldData, t));
  }, [worldData, t]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <HighchartsReact
      options={worldMapOptions}
      constructorType={"mapChart"}
      highcharts={Highcharts}
    />
  );
}

export default React.memo(WorldMap);
