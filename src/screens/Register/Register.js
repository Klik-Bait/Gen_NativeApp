import { BlurView } from "expo-blur";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import assets from "../../../assets/index";
const Register = ({ navigation }) => {
  return (
    <ImageBackground
      source={assets.registerMain} // Set the image as the background
      style={styles.background}
      resizeMode="cover" // Adjust the image scaling
    >
      <BlurView intensity={50} style={styles.overlay}>
        <Text style={styles.header}>Generations App</Text>
        <Text style={styles.subtext}>Which generation do you belong to?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterForm")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Join now</Text>
        </TouchableOpacity>
      </BlurView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Increase opacity for better readability
    width: "100%",
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)", // Add shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtext: {
    fontSize: 18,
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)", // Add shadow
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },

  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default Register;
