// import styled from 'styled-components'

// const Paragraph = styled.p`
//   color: red;
//   margin-top: -200px;
// `
import { Controller } from './Controller/Controller';
import { Graph } from './Graph/Graph';
import './Counter.scss';
import { useEffect, useState } from 'react';

export const Counter = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);

  

  const handleStartBtn = () => {
    setIsRunning((prevState) => !prevState)
  }

  const handleRestartBtn = () => {
    setTimeLeft(25 * 60);
    setIsRunning(false);
  }

  const handleSkipBtn = () => {
    setTimeLeft(10);
  }
  

  useEffect(() => {
    let timer: number | undefined;

    if (isRunning && timeLeft > 0) {

      timer = setTimeout(() => {
        setTimeLeft(oldTime => oldTime - 1)
      }, 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timeLeft, isRunning])


  return (
    <div className="Counter">
      <Graph timeLeft={timeLeft}/>
      <Controller 
        onStartBtn={handleStartBtn}
        onRestartBtn={handleRestartBtn}
        onSkipBtn={handleSkipBtn}
        timeLeft={timeLeft}
        isRunning={isRunning}
      />
    </div>
  )
}
