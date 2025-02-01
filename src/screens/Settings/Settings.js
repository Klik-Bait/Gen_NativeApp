import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import assets from "../../../assets/index";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const [isAppSettingsExpanded, setAppSettingsExpanded] = useState(false);

  let backgroundColor;
  if (theme.background === "whitesmoke") {
    backgroundColor = isAppSettingsExpanded ? "lightgreen" : "whitesmoke";
  } else if (theme.background === "black") {
    backgroundColor = isAppSettingsExpanded ? "darkgray" : "black";
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View>
        {/* Profile Card */}
        <TouchableOpacity
          style={[styles.profileCard, { backgroundColor: theme.background }]}
        >
          <Image source={assets[`woman1`]} style={styles.profileImage} />
          <View style={styles.profileDetails}>
            <Text style={[styles.profileTitle, { color: theme.text }]}>
              View your profile
            </Text>
            <Text style={[styles.profileSubtitle, { color: "#888" }]}>
              Edit profile details
            </Text>
          </View>
        </TouchableOpacity>

        {/* Settings Options */}
        <TouchableOpacity
          style={[styles.settingOption, { backgroundColor: theme.background }]}
        >
          <Ionicons
            name="globe-outline"
            style={[styles.icon, { color: theme.text }]}
          />
          <Text style={[styles.settingText, { color: theme.text }]}>
            Language preferences
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.settingOption, { backgroundColor: theme.background }]}
        >
          <Ionicons
            name="notifications-outline"
            style={[styles.icon, { color: theme.text }]}
          />
          <Text style={[styles.settingText, { color: theme.text }]}>
            Notification settings
          </Text>
        </TouchableOpacity>
        {/* App Settings with Toggle */}
        <TouchableOpacity
          style={[
            styles.settingOption,
            {
              backgroundColor: backgroundColor,
            },
          ]}
          onPress={() => setAppSettingsExpanded(!isAppSettingsExpanded)}
        >
          <Ionicons
            name="construct-outline"
            style={[styles.icon, { color: theme.text }]}
          />
          <Text style={[styles.settingText, { color: theme.text }]}>
            App settings
          </Text>
        </TouchableOpacity>
        {isAppSettingsExpanded && (
          <View
            style={[
              styles.expandedSection,
              { backgroundColor: theme.background },
            ]}
          >
            <Text style={[styles.expandedText, { color: theme.text }]}>
              Toggle between Light and Dark theme
            </Text>
            <Switch
              value={theme.background === "black"}
              onValueChange={toggleTheme}
            />
          </View>
        )}
        <TouchableOpacity
          style={[styles.settingOption, { backgroundColor: theme.background }]}
        >
          <Ionicons
            name="help-circle-outline"
            style={[styles.icon, { color: theme.text }]}
          />
          <Text style={[styles.settingText, { color: theme.text }]}>
            Help & support
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: "space-between",
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  profileDetails: {
    flex: 1,
  },
  profileTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  profileSubtitle: {
    fontSize: 14,
    color: "#888",
  },
  arrow: {
    fontSize: 18,
    color: "#888",
  },
  settingOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
  },
  expandedSection: {
    padding: 15,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  expandedText: {
    fontSize: 14,
  },
  settingText: {
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 24,
    color: "darkgray",
    marginRight: 24,
  },
});

export default Settings;
