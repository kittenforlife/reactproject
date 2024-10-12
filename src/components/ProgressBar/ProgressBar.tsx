import './ProgressBar.css';
import { useTable } from '../../hooks/useTable';
import { ProgressBarProps } from './types';

export function ProgressBar({
  remainingTime,
}: ProgressBarProps) {

  function changeWidth(remainingTime: number){
    return `${remainingTime / 100}%`;
  }
    return (
      <div className="rectangle-flex">
        <div className="rectangle-gray"></div>
        <div className="rectangle-yellow" style={{width:changeWidth(remainingTime)}}></div>
      </div>
    )
}