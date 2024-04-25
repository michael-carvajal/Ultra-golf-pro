import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import SignUpPage from "./app/authentication/SignUpPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TermsAndConditionsPage from "./app/legal/TermsAndConditionsPage";
import PrivacyPolicyPage from "./app/legal/PrivacyPolicyPage";
import LoginPage from "./app/authentication/LoginPage";
import ProfilePage from './app/profile/Profile';
import { getData } from './app/utils/localStorageController';

interface User {
    avatarUri: string | null;
    email: string;
    firstname: string;
    lastname: string;
    phone: string | null;
}

const Stack = createNativeStackNavigator();

export default function App() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const getUser = async () => {
            try {
                const userData = await getData('user');
                if (userData) {
                    setUser(JSON.parse(userData));
                }
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <>
                        <Stack.Screen name="Profile" component={ProfilePage} options={{ headerShown: false }} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="SignUp" component={SignUpPage} options={{ headerShown: false }} />
                        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                    </>
                )}
                <Stack.Screen name="TermsAndConditions" component={TermsAndConditionsPage} options={{ headerShown: true }} />
                <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyPage} options={{ headerShown: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});

