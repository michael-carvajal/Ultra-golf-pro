import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

const PreviousRounds = () => {
    const [selectedValue, setSelectedValue] = useState('java');

    return (
      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedValue(itemValue)
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="C++" value="cpp" />
          <Picker.Item label="C#" value="csharp" />
        </Picker>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f8ff', // Light blue background color
    },
    picker: {
      height: 'auto',
      width: 200,
      backgroundColor: '#fff', // White background color for the picker
      borderRadius: 10, // Border radius
      borderWidth: 1, // Border width
      borderColor: '#ccc', // Border color
    },
  });
export default PreviousRounds;
