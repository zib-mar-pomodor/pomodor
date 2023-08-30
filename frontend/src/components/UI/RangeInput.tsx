import styled from 'styled-components';
import { SettingsActionType } from '../../actions/settingActions';
import { useSettings } from '../../contexts/SettingProvider';

const StyledField = styled.div`
  .label {
    display: block;
    margin-bottom: 12px;
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
  }

  input[type='range']::-webkit-slider-thumb {
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

  input[type='range']::-webkit-slider-thumb:hover {
    border: 2px solid red;
  }

  input[type='range']::-webkit-slider-thumb::before {
    content: 'x';
    /* display: div; */
    width: 10px;
    height: 10px;
    background-color: red;
  }

  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    /* box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; */
    background: var(--color-sea-blue-light);
    border-radius: 1px;
  }
`;

type RangeInputProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  action: (time: number) => SettingsActionType;
};

export const RangeInput = ({
  label,
  value,
  min,
  max,
  action,
}: RangeInputProps) => {
  const { settingsDispatcher } = useSettings();

  return (
    <StyledField>
      <label className="label">
        {label}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={e =>
            settingsDispatcher(action(Number.parseInt(e.target.value)))
          }
        />
      </label>
    </StyledField>
  );
};
