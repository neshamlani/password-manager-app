import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "react-native-paper";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import SignUp from "../../pages/Signup";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: theme.colors.onPrimary,
            },
            headerTitleStyle: {
              color: theme.colors.primary,
            },
          }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: theme.colors.onPrimary,
            },
            headerTitleStyle: {
              color: theme.colors.primary,
            },
          }}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{
            title: "Sign Up",
            headerStyle: {
              backgroundColor: theme.colors.onPrimary,
            },
            headerTitleStyle: {
              color: theme.colors.primary,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
