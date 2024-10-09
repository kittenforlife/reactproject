import './TimerContainer.css';
import { useTable } from '../../hooks/useTable';
import { getRemainingTimeSeconds } from '../../utils';
export function TimerContainer() {
  const {
    dataTable,
    setValue,
    remainingTime,
  } = useTable();
  return (
    <div className="timer-container">
    {remainingTime !== null && (
      <div>До превращения в Скуфа осталось {getRemainingTimeSeconds(remainingTime)} секунд</div>
    )}
  </div>
)
}