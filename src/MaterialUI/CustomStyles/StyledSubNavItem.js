// import { withStyles } from "@material-ui/core";
import { MenuItem, withStyles } from "../ExportComponent";

const StyledSubNavItem = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default StyledSubNavItem;
