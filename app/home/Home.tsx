import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilePage from '../profile/Profile';

const Tab = createBottomTabNavigator();
const Home = ({ navigation } :any) => {
  const handleTabChange = (tabName: String) => {
    // Handle tab change here
    console.log('Switched to tab:', tabName);
  };

  return (
    <View style={styles.container}>
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfilePage} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Align bottom
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff', // Change this to your desired background color
    justifyContent: 'space-around',
  },
  selectedTab: {
    backgroundColor: '#ddd', // Change this to your desired selected tab background color
  },
});

export default Home;
