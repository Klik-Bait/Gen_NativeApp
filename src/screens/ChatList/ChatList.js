import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import assets from "../../../assets/index";
import { useTheme } from "../../context/ThemeContext";
import mockChats from "../../data/mockData.json";
const ChatList = () => {
  const { theme } = useTheme();
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  let backgroundColor;
  if (theme.background === "whitesmoke") {
    backgroundColor ? "lightgreen" : "whitesmoke";
  } else if (theme.background === "black") {
    backgroundColor ? "darkgray" : "black";
  }

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setChats(mockChats); // Use mock data here
      setLoading(false);
    }, 1000); // 1-second delay
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search users here"
        placeholderTextColor="#888"
      />

      {/* Messages List */}

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.messageContainer}>
            <Image
              source={assets[`woman${item.id}`]}
              style={styles.profileImage}
            />
            <View style={styles.messageContent}>
              <Text style={[styles.user, { color: theme.text }]}>
                {item.name}
              </Text>
              <Text style={[styles.title, { color: theme.text }]}>
                {item.lastMessage}
              </Text>
            </View>
            <Text style={[styles.time, { color: theme.text }]}>
              {new Date(item.timestamp).toLocaleString()}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  searchBar: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: "darkgray",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
  },
  user: {
    fontSize: 16,
    color: "#888",
    fontWeight: "bold",
  },
  title: {
    fontSize: 12,
  },
  time: {
    fontSize: 12,
    color: "#888",
  },
});

export default ChatList;
