import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilePage from '../profile/Profile';
import Coach from '../coach/Coach';
import Play from '../play/Play';
import Tournament from '../tournament/Tournament';
import Social from '../social/Social';

// Import your tab icons
import profileIcon from '../assets/images/profile-icon.png';
import playIcon from '../assets/images/play-icon.png';
import tournamentIcon from '../assets/images/tournament-icon.png';
import coachIcon from '../assets/images/coach-icon.png';
import socialIcon from '../assets/images/social-icon.png';

const Tab = createBottomTabNavigator();
const Home = ({ navigation }: any) => {
  const handleTabChange = (tabName: string) => {
    // Handle tab change here
    console.log('Switched to tab:', tabName);
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: '#007AFF', height: 100 },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;

            // Define the icon source based on the route name
            switch (route.name) {
              case 'Profile':
                iconSource = profileIcon;
                break;
              case 'Play':
                iconSource = playIcon;
                break;
              case 'Tournament':
                iconSource = tournamentIcon;
                break;
              case 'Coach':
                iconSource = coachIcon;
                break;
              case 'Social':
                iconSource = socialIcon;
                break;
              default:
                // Default icon or placeholder
                iconSource = null;
            }
            const tournamentSize = route.name === 'Tournament' ? { width: 100, height: 100 } : { width: 64
              , height: 64
              
             };
            // Return the image component
            return <Image source={iconSource} style={{ ...tournamentSize }} />;
          },

        })}
      >
        <Tab.Screen name="Profile" component={ProfilePage} />
        <Tab.Screen name="Play" component={Play} />
        <Tab.Screen name="Tournament" component={Tournament} />
        <Tab.Screen name="Coach" component={Coach} />
        <Tab.Screen name="Social" component={Social} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Align bottom
    backgroundColor: 'lightblue'
  },
});

export default Home;
