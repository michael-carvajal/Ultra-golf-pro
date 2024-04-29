import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { screenWidth } from '../../utils/constants';

const PreviousTournaments = () => {
    const [selectedValue, setSelectedValue] = useState('Previous Tournaments');

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                }
            >
                <Picker.Item label="Previous Tournaments" value="0" />
                <Picker.Item label="Tournament 1" value="1" />
                <Picker.Item label="Tournament 2" value="2" />
                <Picker.Item label="Tournament 3" value="3" />
                <Picker.Item label="Tournament 4" value="4" />
                <Picker.Item label="Tournament 5" value="5" />
                <Picker.Item label="Tournament 6" value="6" />
                <Picker.Item label="Tournament 7" value="7" />
           
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        backgroundColor: 'blue', // Light blue background color
    },
    picker: {
        borderRadius: 24, // Border radius
        borderWidth: 1, // Border width
        borderColor: '#ccc', // Border color
        width: screenWidth -36,
        height: 'auto',
        backgroundColor: 'lightblue', // White background color for the picker
    },
});
export default PreviousTournaments;
