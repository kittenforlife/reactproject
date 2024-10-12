import './ProgressBar.css';
import { useTable } from '../../hooks/useTable';
import { getRemainingTimeSeconds } from '../../utils';
import { ProgressBarProps } from './types';

export function ProgressBar({
  remainingTime,
} :ProgressBarProps) {
    return (
    <div className="rectangle-flex">
      <div className="rectangle-gray"></div>
      <div className="rectangle-yellow"></div>
    </div>
    )
}