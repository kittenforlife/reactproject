import { TableCellTextareaProps } from "./types";
import { ChangeEvent } from 'react';
import './TableCellTextarea.css';

export function TableCellTextarea({
  value,
  setValue,
  regExp,
  rowSpan = 1,
}: TableCellTextareaProps) {

  function onChangeSetValueHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  }
  return (
    <td className="table-td-area" rowSpan={rowSpan}>
      <textarea
        value={value}
        onChange={onChangeSetValueHandler}
        className="root-field-area"
        rows={10}
      />
    </td>
  )
}