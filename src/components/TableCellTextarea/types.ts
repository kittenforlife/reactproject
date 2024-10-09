import { DataTable } from "../../types/DataTable";

export type TableCellTextareaProps = {
  value: string;
  setValue: (value: string, key: keyof DataTable) => void;
  regExp: RegExp;
  rowSpan?: number;
  keyData: keyof DataTable;
}