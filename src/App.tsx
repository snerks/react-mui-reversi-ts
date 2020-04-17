import React, { useState } from 'react';

import { Paper, Grid, Typography, Button, ThemeProvider, createMuiTheme, Card, CardContent } from "@material-ui/core";
import Header from './components/Header';
import BoardList from './components/BoardList';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0}>
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
              <BoardList />
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
          <Grid item container>
            <Grid item xs={3} />
            <Grid item xs={6} alignItems="center" alignContent="space-between" container spacing={3}>
              <Button variant="contained" color="primary" fullWidth style={{ margin: 3 }}>
                Restart
                </Button>

              <Button variant="contained" color="default" fullWidth style={{ margin: 3 }}>
                Select Random Valid Cell
                </Button>

              <Button variant="contained" color="default" fullWidth style={{ margin: 3 }}>
                Pass
                </Button>
            </Grid>
            <Grid item xs={3} />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

