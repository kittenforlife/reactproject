import './TimerContainer.css';
import { useTable } from '../../hooks/useTable';
import { getRemainingTimeSeconds } from '../../utils';
import { TimerContainerProps } from './types';

export function TimerContainer({
  remainingTime,
} :TimerContainerProps) {
  
  return (
    <div className="timer-container">
    {remainingTime !== null && (
      <div>До превращения в Скуфа осталось {getRemainingTimeSeconds(remainingTime)} секунд</div>
    )}
  </div>
)
}