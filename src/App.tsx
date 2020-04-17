import React, { useState } from 'react';

import { Paper, Grid, Typography, Button, ThemeProvider, createMuiTheme, Card, CardContent } from "@material-ui/core";
import Header from './components/Header';
import BoardList from './components/BoardList';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0}>
        <Grid container direction="column">
          <Grid item>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </Grid>
          <Grid item>
            <Card>
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  Sample application, implemented in React, Material UI and TypeScript. Also supports Dark theme switching.
              </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item container>
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <BoardList />
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App;

