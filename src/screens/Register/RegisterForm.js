import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import assets from "../../../assets/index";
import { useTheme } from "../../context/ThemeContext";

const RegisterForm = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header Section */}
      <View style={styles.header}>
        <ImageBackground
          source={assets.registerForm}
          style={styles.background}
          resizeMode="stretch"
        ></ImageBackground>
      </View>

      {/* Input Fields */}
      <View
        style={[styles.inputContainer, { backgroundColor: theme.background }]}
      >
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder="Email"
          placeholderTextColor="#888"
        />
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder="Name"
          placeholderTextColor="#888"
        />
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder="Username"
          placeholderTextColor="#888"
        />
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder="Phone Number"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
        />
      </View>

      {/* Chat Button */}
      <View>
        <TouchableOpacity
          style={styles.chatButton}
          onPress={() => navigation.navigate("Home", { screen: "ChatList" })}
        >
          <Text style={styles.chatButtonText}>Connect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    width: "100%",
    height: "30%",
    marginTop: 20,
  },
  background: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#007BFF",
    marginTop: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  chatButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  chatButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterForm;
