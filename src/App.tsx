import React, { useState } from 'react';
import { Paper, Grid, Button, ThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from './components/Header';
// import BoardList from './components/BoardList';
// import GamePage from './components/GamePage';
// import GameBoardList from './components/GameBoardList';
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
            {/* <Grid item>
            <Card>
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  Sample application, implemented in React, Material UI and TypeScript. Also supports Dark theme switching.
              </Typography>
              </CardContent>
            </Card>
          </Grid> */}
            <Grid item container>
              <Grid item xs={1} sm={2} />
              <Grid item xs={10} sm={8}>
                {/* <BoardList /> */}
                <GamePageList />
              </Grid>
              <Grid item xs={1} sm={2} />
            </Grid>
            {/* <Grid item container>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="body1">
                    Sample application, implemented in React, Material UI and TypeScript. Also supports Dark theme switching.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid> */}
          </Grid>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

