import { useEffect, useState } from "react";
import { DATA } from "../../constants/data";
import { DataTable } from "../../types/DataTable";
import { useStorageState } from "../useStorageState";
import { StorageType } from "../useStorageState/types";

export function useTable() {
  const [storageDataTable, setStorageDataTable] = useStorageState<DataTable>({
    storageType: StorageType.local,
    key: "table",
    initialState: DATA,
  });

  const [dataTable, setDataTable] = useState<DataTable | null>(null);

  useEffect(() => {
    if (storageDataTable === undefined) return;

    setDataTable(storageDataTable);
  }, [storageDataTable]);

  return {
    dataTable: dataTable !== null ? dataTable : DATA,
  }
}