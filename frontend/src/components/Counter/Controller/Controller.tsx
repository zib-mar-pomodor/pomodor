
import './Controller.scss';

import restartIcon from '../../../assets/icons/restart_icon.svg'
import skipIcon from '../../../assets/icons/skip_icon.svg'

interface Props {
  onStartBtn: () => void
  onRestartBtn: () => void
  onSkipBtn: () => void
  timeLeft: number
  isRunning: boolean
}

export const Controller: React.FC<Props> = ({ onStartBtn, onRestartBtn, onSkipBtn, timeLeft, isRunning }: Props) => {

  return (
    <div className="Controller">
      <button
        className='btn'
        type="button"
        onClick={onRestartBtn}
        disabled ={(timeLeft < 25 * 60) ? false : true}
      >
        <img src={restartIcon} alt="Restart counter" className="btn__icon" />
      </button>

      <button
        className='btn'
        type="button"
        onClick={onStartBtn}
      >
        {(isRunning) ? 'Stop' : 'Start'}
      </button>

      <button
        className='btn'
        type="button"
        onClick={onSkipBtn}

      >
        <img src={skipIcon} alt="Skip pomodor" className="btn__icon" />
      </button>
    </div>
  )
}
