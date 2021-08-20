import styled, { ThemeProvider } from 'styled-components';

import { styles, GlobalStyle } from './GlobalStyle';
import Header from './components/Header';
import Board from './components/Board';

const AppBase = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr;
`;

const App = () => {
  return (
    <ThemeProvider theme={styles}>
      <AppBase>
        <GlobalStyle />
        <Header />
        <Board />
      </AppBase>
    </ThemeProvider>
  );
};

export default App;
