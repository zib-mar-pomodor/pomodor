
import './Graph.scss';

interface Props {
  timeLeft: number
}

const leadingZero = (i: number) => {
  return (i < 10)? "0"+i : i;
}

export const Graph = ({ timeLeft }: Props) => {
  const percent = (60 * 25 - timeLeft) / (60 * 25) * 100;
  console.log(percent);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  return (
    <div className="c-chart">
      <div className="c-chart__timer">
        {`${leadingZero(minutes)}:${leadingZero(seconds)}`}
      </div>

      <div className="c-chart__graph">
        <svg viewBox="0 0 36 36" className="chart">
          <path className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#aaa"
            strokeWidth="1"
          />
          
          <path className="circle"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#aaa"
            strokeWidth="1"
            strokeDasharray={`${percent},100`}
          />

          {/* <text x="18" y="20.35" className="percentage">40% </text> */}
        </svg>
      </div>
    </div>
  )
}
