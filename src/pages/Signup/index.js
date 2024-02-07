import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, useTheme, Button } from "react-native-paper";
import axios from "../../utils/axios";

const SignUp = ({ navigation }) => {
  const theme = useTheme();
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    number: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    if (
      !userData.email ||
      !userData.password ||
      !userData.name ||
      !userData.number
    ) {
      alert("Please enter all the details");
      return;
    }
    try {
      const resp = await axios.post("/create-user", userData);
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
      <Text style={{ ...styles.title, color: theme.colors.primary }}>User</Text>
      <Text style={{ ...styles.subTitle, color: theme.colors.secondary }}>
        Sign Up To Join
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
            label="Name"
            placeholder="Please enter your name"
            autoFocus={true}
            textContentType="name"
            inputMode="text"
            onChangeText={(value) => handleChange("name", value)}
          />
          <TextInput
            mode="outlined"
            label="Number"
            placeholder="Please enter your phone number"
            autoFocus={false}
            textContentType="telephoneNumber"
            inputMode="tel"
            onChangeText={(value) => handleChange("number", value)}
          />
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="Please enter your email"
            autoFocus={false}
            textContentType="emailAddress"
            inputMode="email"
            onChangeText={(value) => handleChange("email", value)}
          />
          <TextInput
            mode="outlined"
            label="Password"
            placeholder="Please enter your password"
            autoFocus={false}
            secureTextEntry={true}
            onChangeText={(value) => handleChange("password", value)}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
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
              Have an account?
            </Text>
            <Button
              mode="text"
              onPress={() => navigation.navigate("login")}
              labelStyle={{ fontWeight: "600", fontSize: 20 }}
            >
              Sign In
            </Button>
          </View>
        </View>
        <View>
          <Button
            mode="contained"
            onPress={handleSignup}
            labelStyle={{ fontSize: 20, fontWeight: "700" }}
          >
            Sign Up
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

export default SignUp;
