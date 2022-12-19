import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import UserProfile from './UserProfile';
import Calender from './Calender';
import Camera from './Camera';

const HomeScreen = () => {
    return(
        <View style={styles.container}>
            <Calender/>
            <Camera/>
        </View>
    );
}

const ProfileScreen = () => {
    return(
        <View style={styles.container}>
            
            <UserProfile/>
            {/* <Text style={styles.text}>ProfileScreen</Text> */}
        </View>
    );
}





const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name='Home' 
                    component={HomeScreen}
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        ),
                    }}
                />
                
                <Tab.Screen 
                    name='Profile'
                    component={ProfileScreen} 
                    options={{ 
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="user" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize:20,
    },
});

export default TabNavigator;