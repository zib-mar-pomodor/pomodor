import styled from 'styled-components';
import { Counter } from './Counter/Counter';
import { Header } from './Header';
import { GlobalStyle } from '../styles/GlobalStyles';
import { DarkModeContextProvider } from '../contexts/darkModeContext';

const StyledApp = styled.div`
  max-width: 800px;
  margin: 0 auto;

  & header {
    margin-bottom: 80px;
  }
`;

export const App = () => {
  return (
    <DarkModeContextProvider>
      <StyledApp>
        <GlobalStyle />
        <Header />
        <main>
          <Counter />
        </main>
      </StyledApp>
    </DarkModeContextProvider>
  );
};
