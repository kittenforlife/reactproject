import { Dispatch, SetStateAction } from "react";

export type TableCellProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  regExp: RegExp;
  rowSpan?: number;
  colSpan?: number;
  isCenter?: boolean;
  isRed?: boolean;
}