import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import ChatList from "../screens/ChatList/ChatList";
import Contacts from "../screens/Contacts/Contacts";
import LoadingScreen from "../screens/LoadingScreen/LoadingScreen";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";
import RegisterForm from "../screens/Register/RegisterForm";
import Settings from "../screens/Settings/Settings";
import { navigationRef } from "../services/NavigationService";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { theme } = useTheme();
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />; // Show a loading screen while checking auth status
  }

  return (
    <NavigationContainer ref={navigationRef}>
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
        {isAuthenticated ? (
          // If authenticated, show main app screens
          <>
            <Stack.Screen
              name="Home"
              component={MainTabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ChatList" component={ChatList} />
            <Stack.Screen name="Contacts" component={Contacts} />
            <Stack.Screen name="Settings" component={Settings} />
          </>
        ) : (
          // If not authenticated, show login and register screens
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="RegisterForm" component={RegisterForm} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
