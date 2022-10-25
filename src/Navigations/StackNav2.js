
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsEdit from "../Components/Profile/SettingsEdit";
import Profile from "../Components/Profile/Profile";
import ProfileScreen from "../Screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const StackNav2 = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={SettingsEdit} />
      <Stack.Screen name="EditInfo" component={ProfileScreen} />
      <Stack.Screen name="ChangePassword" component={Profile} />
    </Stack.Navigator>
  );
};

export default StackNav2;
