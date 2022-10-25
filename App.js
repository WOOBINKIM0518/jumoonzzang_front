import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, StatusBar } from "native-base";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import OrderScreen from "./src/Screens/OrderScreen";
import BottomNav from "./src/Navigations/BottomNav";
import OrderCompleteScreen from "./src/Screens/OrderCompleteScreen";
import RegularScreen from "./src/Screens/RegularScreen";
import SettingsEdit from "./src/Components/Profile/SettingsEdit";
import ProfileScreen from "./src/Screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
          <Stack.Screen name="Bottom" component={BottomNav} />
          <Stack.Screen name="Regular" component={RegularScreen} />
          <Stack.Screen name="Settings" component={SettingsEdit} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
