import { useEffect, useRef, useState, useCallback } from "react";
import { DATA } from "../../constants/data";
import { DataTable } from "../../types/DataTable";
import { useStorageState } from "../useStorageState";
import { StorageType } from "../useStorageState/types";
import { useDebounce } from "../useDebounce";
import { getRemainingTime, shallowEqualValues } from "../../utils";

const DELAY_SAVE = 10000;

export function useTable() {
  const [storageDataTable, setStorageDataTable] = useStorageState<DataTable>({
    storageType: StorageType.local,
    key: "table",
    initialState: DATA,
  });
  const [dataTable, setDataTable] = useState<DataTable>(storageDataTable);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  
  const timerSaveTable = useRef<NodeJS.Timeout | undefined>(undefined);
  const timeForSave = useRef<NodeJS.Timeout | undefined>(undefined);

  /**
   * Метод для отчистки таймеров таблицы
   */
  function clearTimersTable() {
    clearTimeout(timerSaveTable.current);
    clearInterval(timeForSave.current);
    setRemainingTime(null);
  }

  /**
   * Метод предназначенный для сохранения данных в таблице.
   * Если данные в таблице и сохраненные данные для таблицы равны, то ничего делать не нужно.
   * Если данные изменились, то обновляем таймеры до сохранения данных.
   */
  const saveCallback = useCallback((newDataTable: DataTable) => {
    const isEqualObj = shallowEqualValues(newDataTable, storageDataTable);
  
    if (isEqualObj) {
      clearTimersTable();
      return;
    };

    if (timerSaveTable.current || timeForSave.current) {
      clearTimersTable();
    }
  
    timerSaveTable.current = setTimeout(() => {
      setStorageDataTable(newDataTable);
    }, DELAY_SAVE);
  
    const startTime = Date.now();

    timeForSave.current = setInterval(() => {
      const timeLeft = getRemainingTime(startTime, DELAY_SAVE);
      setRemainingTime(timeLeft);

      if (timeLeft !== 0) return;

      clearInterval(timeForSave.current);
    }, 100);
  }, [storageDataTable, setStorageDataTable]);

  const saveNewDataValue = useDebounce(saveCallback, 300);

  /**
   * Метод для записи новых данных в ячейки.
   * @param value - новое значение в ячейке.
   * @param key - поле, в котором нужно изменить значение.
   */
  function setNewValueDataTable(value: string, key: keyof DataTable) {
    const newDataTable = {
      ...dataTable,
      [key]: value,
    };

    setDataTable(newDataTable);
  }

  useEffect(() => {
    saveNewDataValue(dataTable);
  }, [dataTable, saveNewDataValue]);

  return {
    dataTable: dataTable !== null ? dataTable : DATA,
    setValue: setNewValueDataTable,
    remainingTime,
  }
}