import { DataTable } from "../../types/DataTable";

export type TableCellProps = {
  value: string;
  setValue: (value: string, key: keyof DataTable) => void;
  regExp: RegExp;
  rowSpan?: number;
  colSpan?: number;
  isCenter?: boolean;
  isRed?: boolean;
  keyData: keyof DataTable;
}