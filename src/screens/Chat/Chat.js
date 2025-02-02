import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hey! How are you doing today?", sender: "other" },
    {
      id: "2",
      text: "I'm doing well, thank you! How about you?",
      sender: "self",
    },
    {
      id: "3",
      text: "I'm great! Are we still on for the meeting later?",
      sender: "other",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: String(prevMessages.length + 1),
          text: newMessage,
          sender: "self",
        },
      ]);
      setNewMessage("");
    }
  };

  const renderMessage = ({ item }) => {
    const isSelf = item.sender === "self";
    return (
      <View
        style={[
          styles.messageBubble,
          isSelf ? styles.selfMessage : styles.otherMessage,
        ]}
      >
        <Text
          style={[
            styles.messageText,
            isSelf ? styles.selfText : styles.otherText,
          ]}
        >
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userDetails}>
          <Image
            source={{
              uri: "https://via.placeholder.com/40", // Replace with actual profile image
            }}
            style={styles.profileImage}
          />
          <Text style={styles.chatRoomName}>Chat Room Name</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.moreIcon}>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* Messages List */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messagesList}
      />

      {/* Input Field */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          placeholderTextColor="#888"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  userDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  chatRoomName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  moreIcon: {
    fontSize: 24,
    color: "#888",
  },
  messagesList: {
    padding: 15,
  },
  messageBubble: {
    maxWidth: "75%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  selfMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#007BFF",
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#f1f1f1",
  },
  messageText: {
    fontSize: 16,
  },
  selfText: {
    color: "#fff",
  },
  otherText: {
    color: "#333",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#f5f5f5",
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: "#f9f9f9",
  },
  sendButton: {
    backgroundColor: "#007BFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
  sendButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Chat;
