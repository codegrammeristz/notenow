import React from 'react';

/* Screens */
import WelcomeScreen from './screens/WelcomeScreen';
import MainScreen from './screens/MainScreen';
import APIScreen from './screens/APIScreen';

/* Plugins */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';

export default function App() {
    const [loaded] = Font.useFonts({
        Lobster: require('./assets/fonts/Lobster-Regular.ttf'),
        Karla: require('./assets/fonts/Karla-Bold.ttf'),
        KleeOne: require('./assets/fonts/KleeOne-SemiBold.ttf'),
        Rubik: require('./assets/fonts/Rubik-Medium.ttf'),
        RubikLight: require('./assets/fonts/Rubik-Light.ttf'),
        Epilogue: require('./assets/fonts/Epilogue-Medium.ttf'),
        EpilogueLight: require('./assets/fonts/Epilogue-Light.ttf')
    });

    if (!loaded) {
        return null;
    }

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="WelcomeScreen">
                <Stack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                    options={{
                        title: 'Welcome to NoteNow',
                        headerStyle: {
                            backgroundColor: '#CC9767',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'light',
                        },
                    }}
                />

                <Stack.Screen
                    name="MainScreen"
                    component={MainScreen}
                    options={{
                        title: 'NoteNow',
                        headerStyle: {
                            backgroundColor: '#CC9767',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'light',
                        }
                    }}
                />
                <Stack.Screen
                    name="APIScreen"
                    component={APIScreen}
                    options={{
                        title: 'API Integration',
                        headerStyle: {
                            backgroundColor: '#CC9767',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'light',
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
