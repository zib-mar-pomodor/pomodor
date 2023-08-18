import styled, { css } from 'styled-components';

import { Button } from './UI/Button/Button';
import optionsIcon from '../assets/icons/options_icon.svg';
import { useSettings } from '../contexts/SettingProvider';
import { ChangeEvent } from 'react';
import { ToggleBtn } from './UI/ToggleBtn/ToggleBtn';

interface StyledSettingsTabProps {
  $settingsOpen?: boolean;
}

const StyledSettingsTab = styled.div<StyledSettingsTabProps>`
  min-width: 350px;
  max-width: 400px;
  padding: 24px;
  position: absolute;
  z-index: 10;
  color: var(--color-black);
  background-color: var(--color-white);
  border-left: 1px solid var(--color-grey-10);
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.25s ease-in-out;
  transform: translateX(100%);

  ${props =>
    props.$settingsOpen &&
    css`
      transform: translateX(0%);
    `}
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .label {
    display: block;
    margin-bottom: 12px;
  }

  input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    border-radius: 6px;
    background: var(--color-sea-blue);
    cursor: pointer;
    position: relative;
    margin-top: -5px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
    /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
  }

  input[type=range]::-webkit-slider-thumb:hover {
    border: 2px solid red;
  }

  input[type=range]::-webkit-slider-thumb::before {
    content: 'x';
    /* display: div; */
    width: 10px;
    height: 10px;
    background-color: red;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
    background: var(--color-sea-blue-light);
    border-radius: 1px;
  }
`;

interface Props {
  onclick: () => void;
  settingsOpen: boolean;
}

export const SettingsTab: React.FC<Props> = ({
  onclick,
  settingsOpen,
}: Props) => {
  const { workDuration, settingsDispatcher } = useSettings();

  const changeWorkDuration = (e: ChangeEvent<HTMLInputElement>) => {
    settingsDispatcher({
      type: 'settings/SET_WORK',
      payload:  +e.target.value,
    });
  };

  return (
    <StyledSettingsTab $settingsOpen={settingsOpen}>
      <StyledForm className="form">
        <div className="form__field">
          <label
            htmlFor="pomodorTime"
            className="label"
          >
            Rounds
          </label>
          <input
            type="range"
            name=""
            id="pomodorTime"
            min={5}
            max={60}
            value={workDuration} //state / local storage?
            onChange={changeWorkDuration}
          />
        </div>

        <div className="form__field">
          <label
            htmlFor="shortBreakTime"
            className="label"
          >
            Rounds
          </label>
          <input
            type="range"
            name=""
            id="shortBreakTime"
            min={1}
            max={30}
            value={5} //state / local storage?
          />
        </div>

        <div className="form__field">
          <label
            htmlFor="londBreakTime"
            className="label"
          >
            Rounds
          </label>
          <input
            type="range"
            name=""
            id="londBreakTime"
            min={1}
            max={45}
            value={15} //state / local storage?
          />
        </div>

        <div className="form__field">
          <label
            htmlFor="roundsAmount"
            className="label"
          >
            Rounds
          </label>
          <input
            type="range"
            name=""
            id="roundsAmount"
            min={2}
            max={12}
            value={4} //state / local storage?
          />
        </div>

        <div className="form__field">
          <label
            htmlFor="timerInTitle"
            className="label"
          >
            Rounds
          </label>
          <input
            type="checkbox"
            name=""
            id="timerInTitle"
            checked={false} //state / local storage?
          />
        </div>
        <ToggleBtn isActive />
      </StyledForm>

      <Button
        onClick={onclick}
        $isTab
        style={{ left: '-49px' }}
      >
        <img
          src={optionsIcon}
          alt="Night mode"
        />
      </Button>
    </StyledSettingsTab>
  );
};
