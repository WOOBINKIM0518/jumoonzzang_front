import { View,  StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Center, Container, Pressable,Text } from "native-base";
import Colors from "../color";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import StackNav2 from "../Navigations/StackNav2";
import {
  Entypo,
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import LoginScreen from "../Screens/LoginScreen";
import OrderScreen from "../Screens/OrderScreen";
import RegularScreen from "../Screens/RegularScreen";
import SettingsEdit from "../Components/Profile/SettingsEdit";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      backBehavior="Main"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Text fontSize={20} color={Colors.kakao} >
                  메뉴
                </Text>
              ) : (
                <Text fontSize={20}  >
                  메뉴
                </Text>
              )}
            </Center>
          ),
        }}
      />
      {/* Cart */}
      <Tab.Screen
        name="Order2"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Text fontSize={20} color={Colors.kakao} >
                  주문
                </Text>
              ) : (
                <Text fontSize={20}  >
                  주문
                </Text>
              )}
            </Center>
          ),
        }}
      />
      {/* profile */}
      <Tab.Screen
        name="Regulal"
        component={RegularScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Text fontSize={20} color={Colors.kakao} >
                  단골
                </Text>
              ) : (
                <Text fontSize={20}  >
                  단골
                </Text>
              )}
            </Center>
          ),
        }}
      />
      {/* profile */}
      <Tab.Screen
        name="Settings2"
        component={StackNav2}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Text fontSize={20} color={Colors.kakao} >
                  설정
                </Text>
              ) : (
                <Text fontSize={20}  >
                  설정
                </Text>
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.white,
    height: 60,
  },
});

export default BottomNav;
