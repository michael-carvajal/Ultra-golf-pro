import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import { screenHeight, screenWidth } from '../utils/constants';
const backgroundImage = require('../assets/images/background.png');
const eclipse = require('../assets/images/eclipse.png')
const horizontal_rectangle = require('../assets/images/horizontal_rectanlge.png')
const verticle_rectangle = require('../assets/images/verticle_rectangle.png')
import { getData, logoutUser } from "../utils/localStorageController";
import DefaultAvatar from "./components/DefaultAvatar";
import LogoutButton from "./components/LogoutButton";
import { CommonActions } from '@react-navigation/native';


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
      navigation.navigate('SignUp')
    } catch (error) {
      console.log(error);
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
      <View style={styles.container}>
        <Text style={styles.header} >Profile Page</Text>
        <View style={styles.userCredentials}>
          <View style={styles.credentialsLeft}>
            <Image source={eclipse} >
            </Image>
            <Image source={horizontal_rectangle} style={{ position: 'absolute', top: '35%', left: '23%' }} />
            <Image source={verticle_rectangle} style={{ position: 'absolute', top: '18%', left: '45%' }} />
            <Text style= {{color: 'white', fontSize: 18, alignSelf: 'center'}}>Add Image</Text>
          </View>
          <View style={styles.credentialsRight}>
            <Text style={styles.displayData}>Name</Text>
            <Text style={styles.displayData}>Handle</Text>
            <Text style={styles.displayData}>Mem Since</Text>
          </View>
        </View>
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
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 48,
    marginHorizontal: 18

  },
  header: {
    fontSize: 36,
    fontWeight: '600',
    color: 'white'
  },
  userCredentials: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 32
  },

  credentialsLeft: {
    flex: 1,
    position: 'relative',
  },
  credentialsRight: {
    display: 'flex',
    gap: 8,
    flex: 2
  },
  displayData: {
    backgroundColor: "white",
    padding: 6,
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1
  },
  previewStats: {
    display: 'flex'
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

});

export default ProfilePage;
