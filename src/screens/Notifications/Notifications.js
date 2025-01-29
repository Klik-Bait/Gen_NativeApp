import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const Notifications = () => {
  const notifications = [
    {
      id: '1',
      title: 'New messages from André',
      time: 'Today',
      icon: 'https://via.placeholder.com/40', // Replace with actual icon
    },
    {
      id: '2',
      title: 'New message: BBQ Grill',
      time: 'Yesterday',
      icon: 'https://via.placeholder.com/40', // Replace with actual image
    },
    {
      id: '3',
      title: 'New message: Sofa',
      time: '05/09/2023',
      icon: 'https://via.placeholder.com/40', // Replace with actual image
    },
    {
      id: '4',
      title: 'New message: Pizza',
      time: '01/09/2023',
      icon: 'https://via.placeholder.com/40', // Replace with actual image
    },
    {
      id: '5',
      title: 'New message: Tacos',
      time: '31/08/2023',
      icon: 'https://via.placeholder.com/40', // Replace with actual image
    },
    {
      id: '6',
      title: 'New message: Plates',
      time: '31/08/2023',
      icon: 'https://via.placeholder.com/40', // Replace with actual image
    },
  ];

  const renderNotification = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Image source={{ uri: item.icon }} style={styles.notificationIcon} />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        contentContainerStyle={styles.notificationList}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>➕</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchIcon: {
    fontSize: 20,
  },
  notificationList: {
    padding: 15,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 10,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationTime: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#f5f5f5',
  },
  navIcon: {
    fontSize: 24,
    color: '#888',
  },
});

export default Notifications;
