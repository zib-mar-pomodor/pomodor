import styled from 'styled-components';

import { Counter } from './Counter/Counter';
import { Header } from './Header';
import { GlobalStyle } from '../styles/GlobalStyles';
import { DarkModeContextProvider } from '../contexts/darkModeContext';
import { Button } from './UI/Button/Button';
import { SettingsTab } from './SettingsTab';
import sunIcon from '../assets/icons/sun_icon.svg'
import { useState } from 'react';

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
  const [settingsOpen, setSettingsOpen] = useState(false);
  const handleModeChange = () => {

    setSettingsOpen((currState) => !currState)
  }

  console.log(settingsOpen);
  return (
    <DarkModeContextProvider>
      <StyledApp>
        <GlobalStyle />

        <Header />

        <main>
          <Counter />
        </main>

        <Button onClick={handleNightMode} $isTab style={{ right: '-1px', transform: 'translateY(58px)' }}>
          <img src={sunIcon} alt="Night mode" />
        </Button>

        <SettingsTab onclick={handleModeChange} settingsOpen={settingsOpen} />
      </StyledApp>
    </DarkModeContextProvider>
  );
};
