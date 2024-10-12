import './TimerContainer.css';
import { useTable } from '../../hooks/useTable';
import { getRemainingTimeSeconds } from '../../utils';
import { TimerContainerProps } from './types';
import { ProgressBar } from '../ProgressBar';

export function TimerContainer({
  remainingTime,
} :TimerContainerProps) {
  function getCorrectEnding(number:number){
    if (number>4||number===0){
      return "секунд"
    }
    else if(number>1&&number<=4){
      return "секунды"
    }
    else if(number===1){
      return "секунда"
    }
  }
  return (
    <div className="timer-container">
      {remainingTime !== null && (
        <>
          <div>До превращения в скуфа осталось {getRemainingTimeSeconds(remainingTime)} {getCorrectEnding(getRemainingTimeSeconds(remainingTime))}</div>
          <ProgressBar remainingTime={remainingTime}/>
        </>
      )}
    </div>
  )
}