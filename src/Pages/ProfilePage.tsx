import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { getData, logout } from "../util/localStorageController";

interface User {
  avatarUri: string | null;
  email: string;
  firstname: string;
  lastname: string;
  phone: string | null;
}

const ProfilePage = ({ navigation }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const userDataString = await getData('user');
        if (userDataString) {
          const userData: User = JSON.parse(userDataString);
          setUser(userData);
        }
      } catch (err) {
        setError("Failed to load user data.");
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);
  const handleLogout = async () => {
    await logout();
    navigation.navigate('Login')

  }
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image src={user?.avatarUri!} style={styles.avatar} />
      <Text style={styles.nameText}>{user?.firstname} {user?.lastname}</Text>
      <Text style={styles.emailText}>{user?.email}</Text>
      <Button title="Log out" color="red" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  logout: {
    backgroundColor: 'red'
  }
});

export default ProfilePage;
