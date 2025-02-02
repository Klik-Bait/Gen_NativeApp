import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { AuthProvider } from "./src/context/AuthContext"; // Import AuthProvider
import { ThemeProvider, useTheme } from "./src/context/ThemeContext";
import Navigation from "./src/navigation/Navigation";
import { LightTheme } from "./src/styles/themes/themes"; // Import LightTheme for comparison

const ThemedApp = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Navigation />
      <StatusBar style={theme === LightTheme ? "dark" : "light"} />
    </View>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
