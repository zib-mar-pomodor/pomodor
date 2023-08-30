import { createContext, useContext, useEffect, useReducer } from 'react';
import { SettingsActionType } from '../actions/settingActions';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface SettingsContextType {
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  rounds: number;
  isTimerInTitle: boolean;
  isNotifications: boolean;
  autoStart: boolean;
  settingsDispatcher: React.Dispatch<SettingsActionType>
}

const defaultState: SettingsContextType = {
  workDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 20,
  rounds: 4,
  isTimerInTitle: true,
  isNotifications: false,
  autoStart: false,
  settingsDispatcher: () => {},
};

const SettingsContext = createContext<SettingsContextType>({
  ...defaultState,
});

interface State {
  workDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  rounds: number;
  isTimerInTitle: boolean;
  isNotifications: boolean;
  autoStart: boolean;
}

const reducer = (state: State, action: SettingsActionType): State => {
  switch (action.type) {
    case 'settings/SET_WORK':
      return { ...state, workDuration: action.payload };
    case 'settings/SET_LONG-BREAK':
      return { ...state, longBreakDuration: action.payload };
    case 'settings/SET_ROUNDS':
      return { ...state, rounds: action.payload };
    case 'settings/SET_SHORT-BREAK':
      return { ...state, shortBreakDuration: action.payload };
    case 'settings/TOGGLE_AUTO-START':
      return { ...state, autoStart: !state.autoStart };
    case 'settings/TOGGLE_NOTIFICATIONS':
      return { ...state, isNotifications: !state.isNotifications };
    case 'settings/TOGGLE_TIMER-IN-TITLE':
      return { ...state, isTimerInTitle: !state.isTimerInTitle };
    default:
      return state;
  }
};

interface SettingsProviderProps {
  children: React.ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}) => {
  const { state: localSettings, setState: setLocalSettings } =
    useLocalStorage<State>('timerSettings', defaultState);
  const [settings, settingsDispatcher] = useReducer(reducer, localSettings);

  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ ...settings, settingsDispatcher }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
