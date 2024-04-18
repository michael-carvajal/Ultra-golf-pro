import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getData } from "../utils/localStorageController";

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

  if (!user) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{user.firstname} {" "} {user.lastname}</Text>
      <Text>{user.email}</Text>
      {/* Display other user data as needed */}
    </View>
  );
};

export default ProfilePage;
