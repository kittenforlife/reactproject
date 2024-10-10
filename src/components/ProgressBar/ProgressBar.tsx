import './ProgressBar.css';
import { useTable } from '../../hooks/useTable';
import { getRemainingTimeSeconds } from '../../utils';
import { ProgressBarProps } from './types';

export function ProgressBar({
  remainingTime,
} :ProgressBarProps) {
    return (
    <div className="rectangle-flex">
  <div className="cell cell-first"></div>
  <div className="cell"></div>
  <div className="cell"></div>
  <div className="cell"></div>
  <div className="cell"></div>
  <div className="cell"></div>
  <div className="cell"></div>
  <div className="cell"></div>
  <div className="cell"></div>
  <div className="cell cell-last"></div>
</div>
    )
}