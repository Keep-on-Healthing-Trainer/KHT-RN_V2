import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async (key) => {
  const result = await AsyncStorage.getItem(key);
  return result && JSON.parse(result);
};

export const setStorage = async (key, value) => {
  return await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const removeStorage = async (key) => {
  return await AsyncStorage.removeItem(key);
};