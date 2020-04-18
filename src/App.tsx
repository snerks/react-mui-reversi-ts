import React, { useState } from 'react';
import { Paper, Grid, ThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from './components/Header';
import GamePageList from './components/GamePageList';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} square style={{ height: "100%" }}>
        <div style={{ paddingBottom: 100 }}>
          <Grid container direction="column">
            <Grid item>
              <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </Grid>
            <Grid item container>
              <Grid item xs={1} sm={2} />
              <Grid item xs={10} sm={8}>
                {/* <BoardList /> */}
                <GamePageList />
              </Grid>
              <Grid item xs={1} sm={2} />
            </Grid>
          </Grid>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

