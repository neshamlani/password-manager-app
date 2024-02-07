import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, useTheme, Icon } from "react-native-paper";

const Profile = () => {
  const theme = useTheme();

  const profileSettings = [
    {
      title: "Personal Info",
    },

    {
      title: "Use Time",
    },
    {
      title: "Logout",
      hideIcon: true,
      danger: true,
    },
  ];

  return (
    <View style={styles.wrapper}>
      <View style={styles.avatarWrapper}>
        <Avatar.Text size={100} label="JD" />
        <Text
          style={{
            marginTop: 10,
            color: theme.colors.primary,
            fontWeight: "700",
            fontSize: 25,
          }}
        >
          John Doe
        </Text>
        <Text
          style={{
            color: theme.colors.secondary,
            fontSize: 18,
          }}
        >
          johndoe@gmail.com
        </Text>
      </View>
      <View style={{ flex: 2, flexDirection: "column" }}>
        {profileSettings.map((setting, i) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 6,
            }}
            key={i}
          >
            <Text
              style={{
                fontSize: 18,
                color: setting.danger
                  ? theme.colors.error
                  : theme.colors.secondary,
              }}
            >
              {setting.title}
            </Text>
            {!setting.hideIcon && (
              <Icon
                source="chevron-right"
                size={18}
                color={theme.colors.secondary}
              />
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 24,
    flex: 1,
    flexDirection: "column",
  },
  avatarWrapper: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
});

export default Profile;
