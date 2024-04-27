import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function PreviewStats() {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.rowItem}>
                    <Text style={styles.labels}>Rounds Played</Text>
                    <Text style={styles.displayData}>195</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.labels}>Avg. Round</Text>
                    <Text style={styles.displayData}>95.6</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.rowItem}>
                    <Text style={styles.labels}>Course Played</Text>
                    <Text style={styles.displayData}>65</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.labels}>Fairway %</Text>
                    <Text style={styles.displayData}>43.7</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.rowItem}>
                    <Text style={styles.labels}>GIR %</Text>
                    <Text style={styles.displayData}>48.2</Text>
                </View>
                <View style={styles.rowItem}>
                    <Text style={styles.labels}>Best Round</Text>
                    <Text style={styles.displayData}>79</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        marginTop: 36
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        gap: 14,
        marginBottom: 24
    },
    rowItem: {
        width:'48%'
    },
    labels: {
        color: 'white',
        marginBottom: 2,
        fontSize: 18
    },
    displayData: {
        backgroundColor: "white",
        padding: 6,
        borderRadius: 4,
        borderColor: 'black',
        borderWidth: 1
      },
})