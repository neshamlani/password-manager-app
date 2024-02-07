import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import Home from "../../components/Home";
import Profile from "../../components/Profile";
import Add from "../../components/Add";

const NavHome = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
      unfocusedIcon: "home-outline",
    },
    { key: "add", title: "Add", focusedIcon: "plus" },
    {
      key: "profile",
      title: "Profle",
      focusedIcon: "account-circle",
      unfocusedIcon: "account-circle-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    add: Add,
    profile: Profile,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default NavHome;
