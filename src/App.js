import { Container, CssBaseline,Paper, ThemeProvider, createTheme } from '@mui/material';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DineLocation from './screens/DineLocation';
import Order from './screens/Order';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3f51b5',
    },
  },
});
function App() {
  return (
      <ThemeProvider theme={theme}>
    <BrowserRouter>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper>
            <Routes>
              <Route path="/" Component={HomeScreen} />
              <Route path="/DineLocation" Component={DineLocation}/>
              <Route path="/Order" Component={Order}/>
            </Routes>
          </Paper>
        </Container>
    </BrowserRouter>
      </ThemeProvider>
    
  );
}

export default App;
