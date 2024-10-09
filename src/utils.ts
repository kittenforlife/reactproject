import { DataTable } from "./types/DataTable";

/**
 * Метод предназначенный для сравнения объектов 1 уровня вложенности
 * @param obj1 - объект для сравнения
 * @param obj2 - объект для сравнения
 * @returns Возвращает true/false результатом сравнения
 */
export function shallowEqualValues(obj1: DataTable, obj2: DataTable): boolean {
  const keys = Object.keys(obj1) as (keyof DataTable)[];

  for (const key of keys) {
      if (obj1[key] !== obj2[key]) {
          return false;
      }
  }

  return true;
}

/**
 * Метод предназначенный для того, чтобы получить оставшиеся время до выполнения таймера
 * @param startTime - начальное время
 * @param delay - Задержка
 * @returns Количество mc до выполнения таймера
 */
export function getRemainingTime(startTime: number, delay: number) {
  const elapsedTime = Date.now() - startTime;
  return Math.max(delay - elapsedTime, 0);
}

/**
 * Метод предназначенный для перевода mc в секунды
 * @param time - время в mc
 * @returns возвращает оставшиеся время в секундах
 */
export function getRemainingTimeSeconds(time: number) {
  if (time < 1000) return 0;

  return Number.parseInt(time.toString()[0]);
}
