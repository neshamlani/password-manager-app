import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, useTheme, Button } from "react-native-paper";
import axios from "../../utils/axios";

const Login = ({ navigation }) => {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    navigation.replace("home");
    return;
    if (!email || !password) {
      alert("Please enter email or password");
      return;
    }
    try {
      const resp = await axios.post("/login", { email, password });
      if (resp.status === 200) {
        navigation.replace("home");
      } else {
        alert("Error");
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor: theme.colors.onPrimary,
      }}
    >
      <Text
        style={{
          ...styles.title,
          marginTop: 20,
          color: theme.colors.primary,
        }}
      >
        Welcome
      </Text>
      <Text style={{ ...styles.title, color: theme.colors.primary }}>Back</Text>
      <Text style={{ ...styles.subTitle, color: theme.colors.secondary }}>
        Sign In To Continue
      </Text>
      <View
        style={{
          marginTop: 40,
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View>
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="Please enter your email"
            autoFocus={false}
            onChangeText={(value) => setEmail(value)}
          />
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Please enter your password"
            autoFocus={false}
            style={{ marginTop: 10 }}
            secureTextEntry={true}
            onChangeText={(value) => setPassword(value)}
          />
          <Button
            mode="text"
            onPress={() => alert("Test")}
            style={{ marginVertical: 20 }}
            labelStyle={{ fontSize: 20 }}
          >
            Forgot Password
          </Button>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                color: theme.colors.secondary,
                fontSize: 20,
              }}
            >
              Create a new account?
            </Text>
            <Button
              mode="text"
              onPress={() => navigation.navigate("signup")}
              labelStyle={{ fontWeight: "600", fontSize: 20 }}
            >
              Sign Up
            </Button>
          </View>
        </View>
        <View>
          <Button
            mode="contained"
            onPress={handleLogin}
            labelStyle={{ fontSize: 20, fontWeight: "700" }}
          >
            Login
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    height: "100%",
    padding: 24,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "400",
    marginTop: 10,
  },
});

export default Login;
