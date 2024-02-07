import React, { useState } from "react";
import { View, Text } from "react-native";
import { useTheme, TextInput, Button } from "react-native-paper";

const Add = (props) => {
  const theme = useTheme();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View style={{ padding: 24, flex: 1 }}>
      <Text
        style={{ fontSize: 20, fontWeight: 700, color: theme.colors.primary }}
      >
        You can add new password field here!!
      </Text>
      <Text
        style={{ fontSize: 18, color: theme.colors.secondary, marginTop: 10 }}
      >
        The password will be generated randomly and will be able to copied from
        home screen.
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <View>
          <TextInput
            mode="flat"
            label="Title"
            placeholder="Enter title"
            style={{ marginTop: 24 }}
            autoFocus={true}
            value={title}
            onChangeText={(value) => setTitle(value)}
          />
          <TextInput
            mode="flat"
            label="Description"
            placeholder="Enter description"
            style={{ marginTop: 10 }}
            multiline={true}
            numberOfLines={4}
            value={description}
            onChangeText={(value) => setDescription(value)}
          />
        </View>
        <Button
          mode="elevated"
          onPress={() => {
            props.jumpTo("home");
          }}
          labelStyle={{ fontSize: 20, fontWeight: 700 }}
        >
          Generate Password
        </Button>
      </View>
    </View>
  );
};

export default Add;
