import styled from 'styled-components';

import { Counter } from './Counter/Counter';
import { Header } from './Header';
import { GlobalStyle } from '../styles/GlobalStyles';
import { DarkModeContextProvider } from '../contexts/darkModeContext';
import { Button } from './UI/Button/Button';
import sunIcon from '../assets/icons/sun_icon.svg'

const StyledApp = styled.div`
  max-width: 800px;
  margin: 0 auto;

  & header {
    margin-bottom: 80px;
  }
`;

const handleNightMode = () => {
  document.documentElement.classList.toggle('dark-mode')
}

export const App = () => {
  return (
    <DarkModeContextProvider>
      <StyledApp>
        <GlobalStyle />
        <Header />
        <main>
          <Counter />
        </main>
        <Button onClick={handleNightMode} $isTab>
          <img src={sunIcon} alt="Night mode" />
        </Button>
      </StyledApp>
    </DarkModeContextProvider>
  );
};
