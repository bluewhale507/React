import "react-native-gesture-handler";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "../main/MainPage.js";
import RegistPage from "../detail/RegistPage.js"
import { StatusBar } from "react-native";

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar
          style="light-content"
          setTranslucentStatus="true"
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Stack.Navigator
          screenOptions={{ animationEnabled: false }}
        >
          <Stack.Screen name="MAIN" component={MainPage} options={{ headerShown:false, title:'로그인' }} />
          <Stack.Screen name="REGISTER" component={RegistPage} options={{ title:'회원가입' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
