import { useSettings } from '../../contexts/SettingProvider';
import { useTimerContext } from '../../contexts/TimerContext';
import { Button } from '../UI/Button';

export const StageIndicator = () => {
  const { rounds } = useSettings();
  const { stageIndex } = useTimerContext();

  return (
    <div className="mode-switcher">
      <Button
        $small
        $isActive={stageIndex % 2 === 0 ? true : false}
      >
        Pomodor
      </Button>

      <Button
        $small
        $isActive={
          stageIndex % 2 === 1 && stageIndex !== rounds * 2 - 1 ? true : false
        }
      >
        Short break
      </Button>

      <Button
        $small
        $isActive={stageIndex === rounds * 2 - 1 ? true : false}
      >
        Long break
      </Button>
    </div>
  );
};
