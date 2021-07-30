import { makeStyles } from "../ExportComponent";

const SearchStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "42ch",
    //   display: "flex",
    //   justifyContent: "flex-end"
    float: "right",
    },
  },
}));

export default SearchStyles;
