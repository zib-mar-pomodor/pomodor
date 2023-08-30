import ReactDOM from 'react-dom/client';
import { App } from './components/App.tsx';
import { DarkModeProvider } from './contexts/DarkModeProvider.tsx';
import { SettingsProvider } from './contexts/SettingProvider.tsx';
import { TimerProvider } from './contexts/TimerContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <DarkModeProvider>
      <SettingsProvider>
        <TimerProvider>
          <App />
        </TimerProvider>
      </SettingsProvider>
    </DarkModeProvider>
  </>
);
