import {useCallback, useEffect, useState} from 'react';
import * as SecureStore from 'expo-secure-store';

async function save(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key: string) {
  return SecureStore.getItemAsync(key);
}

function useSecureStorage(key: string, value: any) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(value);

  const retrieveInitData = useCallback(async () => {
    const raw = await getValueFor(key);
    if (!raw) {
      return;
    }
    setData(JSON.parse(raw));
    setLoading(false);
  }, [key]);

  useEffect(() => {
    setLoading(true);
    retrieveInitData();
  }, [retrieveInitData]);

  useEffect(() => {
    save(key, JSON.stringify(value));
  }, [isLoading, value, key]);

  return {data, isLoading};
}

export default useSecureStorage;
