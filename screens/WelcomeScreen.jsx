import React from 'react';
import {
    SafeAreaView,
    Image,
    View,
    Text,
} from 'react-native';
import { Styles, Layout } from "../components/Styles";
import CustomButton from "../components/CustomButton";

export default function WelcomeScreen({navigation}) {
    return (
        <SafeAreaView style={Styles.container}>
            <View style={Layout.imageContainer}>
                <Image
                    style={Styles.logo}
                    source={require('../assets/logo.png')}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <Text style={Styles.title}>
                    NoteNow
                </Text>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center'
            }}>
                <Text style={Styles.subtitle}>
                    Take it, Note it, Do it.
                </Text>
            </View>
            <View style={Layout.verticalSpacing}/>
            <View style={Layout.buttonAlignment}>
                <View style={Layout.buttonSize}>
                    <CustomButton
                        title={"Enter Application"}
                        onPress={() => navigation.navigate('MainScreen')}
                    />
                </View>
            </View>
            <View style={Layout.verticalSpacing}/>
            <View style={Layout.buttonAlignment}>
                <View style={Layout.buttonSize}>
                    <CustomButton
                        title={"API Integration"}
                        onPress={() => navigation.navigate('APIScreen')}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
