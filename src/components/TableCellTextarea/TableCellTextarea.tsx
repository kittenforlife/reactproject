import { TableCellTextareaProps } from "./types";
import { ChangeEvent } from 'react';
import './TableCellTextarea.css';

export function TableCellTextarea({
  value,
  setValue,
  regExp,
  rowSpan = 1,
}: TableCellTextareaProps) {

  function onChangeSetValueHandler(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  return (
    <td className={`table-td-area`} rowSpan={rowSpan}>
      <input
        type="text"
        value={value}
        onChange={onChangeSetValueHandler}
        className={`root-field-area`}
      />
    </td>
  )
}