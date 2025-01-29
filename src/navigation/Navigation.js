import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "../context/ThemeContext";

import ChatList from "../screens/ChatList/ChatList";
import Contacts from "../screens/Contacts/Contacts";
import Register from "../screens/Register/Register";
import RegisterForm from "../screens/Register/RegisterForm";
import Settings from "../screens/Settings/Settings";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { theme } = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: theme.background },
          headerStyle: { backgroundColor: theme.background },
          tabBarLabelStyle: { color: theme.text },
          headerTitleStyle: { color: theme.text },
          headerBackButtonDisplayMode: "minimal",
          headerBackButtonStyle: { color: theme.text },
          headerTitleAlign: "left",
          headerTintColor: theme.text,
        }}
      >
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RegisterForm" component={RegisterForm} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
