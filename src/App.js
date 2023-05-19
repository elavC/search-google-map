import './App.css';

import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
 
import theme from './theme';

import Home from './components/home/Home';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
