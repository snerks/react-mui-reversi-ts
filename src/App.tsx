import React, { useState } from 'react';
import { Paper, Grid, ThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from './components/Header';
import GamePageList from './components/GamePageList';
import { green } from '@material-ui/core/colors';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",

      primary: green,
      secondary: green,
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} square style={{ height: "100%" }}>
        <Grid container direction="column">
          <Grid item>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </Grid>
          <Grid item container>
            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={10}>
              {/* <BoardList /> */}
              <GamePageList />
            </Grid>
            <Grid item xs={false} sm={1} />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

