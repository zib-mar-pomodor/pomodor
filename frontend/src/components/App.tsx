import styled from 'styled-components';

import { Counter } from './Counter/Counter';
import { Header } from './Header';
import { GlobalStyle } from '../styles/GlobalStyles';
import { Button } from './UI/Button';
import { SettingsTab } from './SettingsTab';
import { useDarkMode } from '../contexts/DarkModeProvider';
import sunIcon from '../assets/icons/sun_icon.svg';
import moonIcon from '../assets/icons/moonstart_icon.svg';

const StyledApp = styled.div`
  max-width: 800px;
  margin: 0 auto;

  & header {
    margin-bottom: 80px;
  }
`;

export const App = () => {
  const { handleDarkModeChange, isDark } = useDarkMode();

  return (
    <StyledApp>
      <GlobalStyle />

      <Header />

      <main>
        <Counter />
      </main>

      <Button
        onClick={handleDarkModeChange}
        $isTab
        style={{ right: '-1px', transform: 'translateY(58px)' }}
      >
        <img
          src={isDark ? sunIcon : moonIcon}
          alt="Toggle night mode"
        />
      </Button>

      <SettingsTab />
    </StyledApp>
  );
};
