import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemeProvider, useTheme } from "./src/context/ThemeContext";
import Navigation from "./src/navigation/Navigation";
import { LightTheme } from "./src/styles/themes/themes"; // Import LightTheme for comparison

const ThemedApp = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Navigation />
      {/* Compare with LightTheme to determine the status bar style */}
      <StatusBar style={theme === LightTheme ? "dark" : "light"} />
    </View>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
