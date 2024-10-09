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
  keyData,
}: TableCellProps) {

  function onChangeSetValueHandler(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (!regExp.test(value) && value !== '') return;
    setValue(value, keyData);
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