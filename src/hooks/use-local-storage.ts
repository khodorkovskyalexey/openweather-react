import React from 'react';
import { LocalStorageKeys } from '../store';

export function useLocalStorage<T>(key: LocalStorageKeys, defaultValue: T): [T, (newValue: T) => void] {
  const [storedValue, setStoredValue] = React.useState<T>(() => {
    try {
      const value = localStorage.getItem(key);

      if (value) {
        return JSON.parse(value) as T;
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (err) {
      return defaultValue;
    }
  });

  const setValue = (newValue: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (err) {}
    setStoredValue(newValue);
  };

  return [storedValue, setValue];
}
