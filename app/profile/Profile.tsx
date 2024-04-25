import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { screenHeight, screenWidth } from '../utils/constants';
const backgroundImage = require('../assets/images/background.png');
import { getData, logoutUser } from "../utils/localStorageController";
import DefaultAvatar from "./components/DefaultAvatar";
import LogoutButton from "./components/LogoutButton";

interface User {
  avatarUri: string | null;
  email: string;
  firstname: string;
  lastname: string;
  phone: string | null;
}

const ProfilePage = ({ navigation }: any) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const userDataString = await getData('user');
      if (userDataString) {
        const userData: User = JSON.parse(userDataString);
        setUser(userData);
      }
    };
    getUser();
  }, []);
  const handleLogout = async () => {
    try {
      await logoutUser();
      navigation.navigate('SignUp');
    } catch (error) {

    }
  }

  if (!user) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <ImageBackground style={styles.backgroundImage} source={backgroundImage}>
      <View style={styles.profileContainer}>
        {/* Profile Image */}
        {user.avatarUri !== null ?
          (<View style={styles.avatarContainer}>
            {user.avatarUri && <Image source={{ uri: user.avatarUri }} style={styles.avatar} />}
          </View>)
          : <DefaultAvatar />}
        {/* User Info */}
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>{user.firstname} {user.lastname}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          {/* Display other user data as needed */}
        </View>
        <LogoutButton handleLogout={handleLogout} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    gap: 48,
    marginTop: '20%'
  },
  avatarContainer: {
    marginBottom: 20,
    borderRadius: 75,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fff',
  },
  avatar: {
    width: 150,
    height: 150,
  },
  userInfoContainer: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 18,
    color: '#fff',
  },
});

export default ProfilePage;
