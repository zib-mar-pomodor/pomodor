interface SetWorkAction {
  type: 'settings/SET_WORK';
  payload: number;
}

interface SetShortBreakAction {
  type: 'settings/SET_SHORT-BREAK';
  payload: number;
}

interface SetLongBreakAction {
  type: 'settings/SET_LONG-BREAK';
  payload: number;
}

interface SetRoundsAction {
  type: 'settings/SET_ROUNDS';
  payload: number;
}

interface SetTimeInTitleAction {
  type: 'settings/TOGGLE_TIMER-IN-TITLE';
}

interface SetNotificationsAction {
  type: 'settings/TOGGLE_NOTIFICATIONS';
}

interface SetAutoStartAction {
  type: 'settings/TOGGLE_AUTO-START';
}

const setWorkAction = (time: number): SettingsActionType => ({
  type: 'settings/SET_WORK',
  payload: time,
});

const setShortBreakAction = (time: number): SettingsActionType => ({
  type: 'settings/SET_SHORT-BREAK',
  payload: time,
});

const setLongBreakAction = (time: number): SettingsActionType => ({
  type: 'settings/SET_LONG-BREAK',
  payload: time,
});

const setRoundsAction = (num: number): SettingsActionType => ({
  type: 'settings/SET_ROUNDS',
  payload: num,
});

const toggleTimerInTitleAction = (): SettingsActionType => ({
  type: 'settings/TOGGLE_TIMER-IN-TITLE',
});

const toggleNotificationsAction = (): SettingsActionType => ({
  type: 'settings/TOGGLE_NOTIFICATIONS',
});

const toggleAutoStartAction = (): SettingsActionType => ({
  type: 'settings/TOGGLE_AUTO-START',
});

export type SettingsActionType =
  | SetWorkAction
  | SetShortBreakAction
  | SetLongBreakAction
  | SetRoundsAction
  | SetTimeInTitleAction
  | SetNotificationsAction
  | SetAutoStartAction;

export const actions = {
  setWorkAction,
  setLongBreakAction,
  setRoundsAction,
  setShortBreakAction,
  toggleTimerInTitleAction,
  toggleNotificationsAction,
  toggleAutoStartAction,
};
