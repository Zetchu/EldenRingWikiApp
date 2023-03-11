
import React from "react";
import { Pressable, SafeAreaView, StyleSheet, View } from "react-native";

// 1. import `NativeBaseProvider` component
import {
  NativeBaseProvider,
  Text,
  Box,
  Avatar,
  Button,
  Flex,
  Center,
  ChevronLeftIcon,
  extendTheme,
} from "native-base";
import axios from "axios";
import Header from "./components/Header";
import Home from "./screens/Home";
import Weapons from "./screens/Weapons";
import Armors from "./screens/Armors";
import AoW from "./screens/AoW";
import WeaponsDeatils from "./components/WeaponsDeatils";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeponComponent from "./components/WeponComponent";
import UltimateComponent from "./components/UltimateComponent";

import ArmorsDeatils from "./screens/DetailScreens/ArmorsDeatils";
import IncantationsDeatils from "./screens/DetailScreens/IncantationsDeatils";
import SorceriesDeatils from "./screens/DetailScreens/SorceriesDeatils";
import ItemsDeatils from "./screens/DetailScreens/ItemsDeatils";
import NPCsDeatils from "./screens/DetailScreens/NPCsDeatils";
import ShieldsDeatils from "./screens/DetailScreens/ShieldsDeatils";
import BossesDeatils from "./screens/DetailScreens/BossesDeatils";
import SpiritsDeatils from "./screens/DetailScreens/SpiritsDeatils";
import TalismansDeatils from "./screens/DetailScreens/TalismansDeatils";


export default function App() {
  const Stack = createNativeStackNavigator();
  const callTestApi = () => {
    axios
      .get("https://eldenring.fanapis.com/api/weapons")
      .then((response) => {
        console.log("RESPONSE", response?.data);
      })
      .catch((error) => {
        console.log("ERROR", error);
      }); 
  };

  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        100: "#151922",
        2: "#40444E",
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: "#d97706",
      },
    },
   
  });


  return (

    <SafeAreaView style={styles.container}>
      <NativeBaseProvider theme={theme} >
    <NavigationContainer  >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      
      >
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Weapons" component={Weapons}  />
        <Stack.Screen name="Armors" component={Armors}  />
        <Stack.Screen name="Ashes of War" component={AoW}  />
        <Stack.Screen name="UltimateComponent" component={UltimateComponent}  />
        <Stack.Screen name="ArmorsDeatils" component={ArmorsDeatils}  />
        <Stack.Screen name="WeaponsDeatils" component={WeaponsDeatils}  />
        <Stack.Screen name="IncantationsDeatils" component={IncantationsDeatils}  />
        <Stack.Screen name="SorceriesDeatils" component={SorceriesDeatils}  />
        <Stack.Screen name="ItemsDeatils" component={ItemsDeatils}  />
        <Stack.Screen name="NPCsDeatils" component={NPCsDeatils}  />
        <Stack.Screen name="ShieldsDeatils" component={ShieldsDeatils}  />
        <Stack.Screen name="BossesDeatils" component={BossesDeatils}  />
        <Stack.Screen name="SpiritsDeatils" component={SpiritsDeatils}  />
        <Stack.Screen name="TalismansDeatils" component={TalismansDeatils}  />
        
     
      </Stack.Navigator>
     
      </NavigationContainer>
     
      </NativeBaseProvider>

    </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151922',


  },
});
