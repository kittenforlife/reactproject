import { Dispatch, SetStateAction } from "react";

export type TableCellTextareaProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  regExp: RegExp;
  rowSpan?: number;
}