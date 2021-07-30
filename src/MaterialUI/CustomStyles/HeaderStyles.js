import { makeStyles } from "@material-ui/styles";

const HeaderStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    position: "fixed",
    zIndex: 1500,
  },
  menuButton: {
    //marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default HeaderStyles;
