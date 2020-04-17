import React from "react";
import { AppBar, Toolbar, Typography, Switch, Paper } from "@material-ui/core";
import HighlightIcon from "@material-ui/icons/HighlightOutlined";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));

interface Props {
  isDarkMode: boolean;
  setIsDarkMode: Function;
}

const Header: React.FC<Props> = ({ isDarkMode, setIsDarkMode }) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          Material UI Reversi Sample
        </Typography>
        <Paper title="use this switch for dark/light mode">
          <HighlightIcon />
        </Paper>
        <Switch checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
