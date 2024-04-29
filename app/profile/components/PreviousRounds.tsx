import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { screenWidth } from '../../utils/constants';

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
                <Picker.Item style={styles.pickerText} label="Previous Rounds" value="0" />
                <Picker.Item  style={styles.pickerText} label="Round 1" value="1" />
                <Picker.Item style={styles.pickerText} label="Round 2" value="2" />
                <Picker.Item style={styles.pickerText} label="Round 3" value="3" />
                <Picker.Item style={styles.pickerText} label="Round 4" value="4" />
                <Picker.Item style={styles.pickerText} label="Round 5" value="5" />
                <Picker.Item style={styles.pickerText} label="Round 6" value="6" />
                <Picker.Item style={styles.pickerText} label="Round 7" value="7" />

            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 18,
        backgroundColor: 'blue', // Light blue background color
    },
    picker: {
        borderRadius: 24, // Border radius
        borderWidth: 1, // Border width
        borderColor: '#ccc', // Border color
        width: screenWidth - 36,
        height: 'auto',
        backgroundColor: 'lightblue', // White background color for the picker
    },
    pickerText: {
        fontWeight: '900'
    }
});
export default PreviousRounds;
