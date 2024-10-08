import { ChangeEvent } from 'react';
import './TableCell.css';
import { TableCellProps } from './types';

export function TableCell({
  value,
  setValue,
  rowSpan = 1,
  colSpan = 1,
  isCenter = false,
  isRed = false, 
  regExp,
}: TableCellProps) {

  function onChangeSetValueHandler(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <td className="table-td" rowSpan={rowSpan} colSpan={colSpan}>
      <input
        type="text"
        value={value}
        onChange={onChangeSetValueHandler}
        className={`root-field ${isRed ? 'field__red' : '' } ${isCenter ? 'field__center' : '' }`}
      />
    </td>
  )
}