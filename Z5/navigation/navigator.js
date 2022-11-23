import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { AboutScreen } from "../screens/AboutScreen";
import { ContactScreen } from "../screens/ContactScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from '@expo/vector-icons'; 
import Ionicons from "@expo/vector-icons/Ionicons";
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home screen" }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Settings screen" }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "About screen" }}
      />
      <Stack.Screen
        name="Contact"
        component={HomeScreen}
        options={{ title: "Contact screen" }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'HOME',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              paddingBottom: 10,
              color: '#3f5cc0',
            },
            headerStyle: {
              borderBottomColor: 'grey',
              borderBottomWidth: 0.2,
            },
           tabBarIcon: (tabInfo) => {
            return (
            <Ionicons name="md-home-outline" size={24} color="black" />
        );
      },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerTitle: 'SETTINGS',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              paddingBottom: 10,
              color: '#3f5cc0',
            },
            headerStyle: {
              borderBottomColor: 'grey',
              borderBottomWidth: 0.2,
            },
            tabBarIcon: (tabInfo) => {
            return (
            <Feather name="settings" size={24} color="black" />
          
        );
      },
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerTitle: 'ABOUT',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              paddingBottom: 10,
              color: '#3f5cc0',
            },
            headerStyle: {
              borderBottomColor: 'grey',
              borderBottomWidth: 0.2,
            },
            tabBarIcon: (tabInfo) => {
            return (
            <Octicons name="info" size={24} color="black" />
        );
      },
          }}
        />
        <Tab.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            headerTitle: 'CONTACT',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 25,
              paddingBottom: 10,
              color: '#3f5cc0',
            },
            headerStyle: {
              borderBottomColor: 'grey',
              borderBottomWidth: 0.2,
            },
            tabBarIcon: (tabInfo) => {
            return (
            <AntDesign name="contacts" size={24} color="black" />
        );
      },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}