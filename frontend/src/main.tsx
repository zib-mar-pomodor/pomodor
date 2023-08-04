import ReactDOM from 'react-dom/client';
import { App } from './components/App.tsx';
import { DarkModeProvider } from './contexts/DarkModeProvider.tsx';
import { SettingsProvider } from './contexts/SettingProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <DarkModeProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
    </DarkModeProvider>
  </>
);
