import {StyleSheet} from 'react-native';
import SignUpPage from "./app/authentication/SignUpPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import TermsAndConditionsPage from "./app/legal/TermsAndConditionsPage";
import PrivacyPolicyPage from "./app/legal/PrivacyPolicyPage";
import LoginPage from "./app/authentication/LoginPage";

const Stack = createNativeStackNavigator();
export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignUp"
                              component={SignUpPage}
                              options={{headerShown: false}}
                />
                <Stack.Screen name="Login"
                              component={LoginPage}
                              options={{headerShown: false}}
                />
                <Stack.Screen name="TermsAndConditions"
                              component={TermsAndConditionsPage}
                              options={{headerShown: true}}
                />
                <Stack.Screen name="PrivacyPolicy"
                              component={PrivacyPolicyPage}
                              options={{headerShown: true}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
