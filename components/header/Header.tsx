import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.nav}>
        <View style={styles.cgBg}>
          <Text style={styles.navText}>CG</Text>
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={28} color="#424242" />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>02</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 68,
    width: "100%",
    marginTop: 11,
    marginBottom: 24,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav: {
    width: 334,
    height: 45,
    marginTop: 11,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navText: {
    fontSize: 18,
    borderRadius: 50,
  },
  cgBg: {
    height: 45,
    width: 45,
    backgroundColor: "#F5F5F5",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    right: -6,
    top: -4,
    backgroundColor: "#0500FF",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Header;
