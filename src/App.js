import React from 'react'
import { ThemeProvider } from '@mui/material/styles';

import HeaderContainer from './components/Header/HeaderContainer';
import ListContainer from './components/ListContainer/ListContainer/ListContainer';
import SearchContainer from './components/SearchContainer/SearchContainer/SearchContainer';
import StepsContainer from './components/StepsContainer/StepsContainer';
import AlertWrapper from './components/Alerts/AlertWrapper/AlertWrapper';

import { theme } from './styles/muiTheme'
import './App.css';
import FloatingButton from './components/FloatingButton/FloatingButton';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='main-container'>
        <HeaderContainer />
        <StepsContainer />
        <SearchContainer />
        <ListContainer />
      </div>
      <FloatingButton />
      <AlertWrapper />
    </ThemeProvider>
  );
}

export default App;
