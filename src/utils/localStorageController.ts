import AsyncStorage from '@react-native-async-storage/async-storage';

// Save data
export const saveData = async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Data saved successfully');
    } catch (error) {
      console.error('Error saving data: ', error);
    }
  };
  
  // Retrieve data
export  const getData = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log('Data retrieved successfully: ', value);
        return value;
      } else {
        console.log('No data found');
        return null;
      }
    } catch (error) {
      console.error('Error retrieving data: ', error);
      return null;
    }
  };
  