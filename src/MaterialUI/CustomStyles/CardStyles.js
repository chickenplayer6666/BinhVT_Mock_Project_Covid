import { makeStyles } from "@material-ui/styles";
import { arrayMin } from "highcharts";

const CardStyles = makeStyles({
//   wrapper: (arr) => {
//     console.log({ arr });
//     let borderLeft = {};
//     arr.forEach(item => {
//         if (item.title === "Cases") {borderLeft[item.title] = { borderLeft: "5px solid #c9302c" };}
//         else if (item.title === "Recovered") {borderLeft[item.title] = { borderLeft: "5px solid #28a745" };}
//         else {borderLeft[item.title] = { borderLeft: "5px solid gray" };};
//     });
//     console.log(borderLeft);
//     return borderLeft;
//   },
  title: { fontSize: 18, marginBottom: 5 },
  count: { fontWeight: "bold", fontSize: 18 },
});

export default CardStyles;
