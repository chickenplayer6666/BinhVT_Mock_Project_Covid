import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import map from "@highcharts/map-collection/custom/world.geo.json";
import initWorldMapOptions from "../../../Utils/initWorldMapOptions"

// Load Highcharts modules
highchartsMap(Highcharts);

function WorldMap({ worldMap, worldData }) {
  return (
    <HighchartsReact
      options={initWorldMapOptions(map, worldData)}
      constructorType={"mapChart"}
      highcharts={Highcharts}
    />
  );
}

export default WorldMap;