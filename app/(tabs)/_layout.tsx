import { Tabs, useNavigation } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigator = useNavigation();

  const CustomHeaderTitle = ({ title }: { title: string }) => (
    <Text
      className="text-center"
      style={{ color: "#5715a2", fontSize: 20, fontWeight: "bold" }}
    >
      {title}
    </Text>
  );

  const NotificationIcon = () => (
    <TouchableOpacity style={{ marginRight: 15 }}>
      <Ionicons name="notifications-outline" size={24} color="#000" />
    </TouchableOpacity>
  );

  const GoBackIcon = () => (
    <TouchableOpacity
      style={{ marginLeft: 15 }}
      onPress={() => navigator.goBack()}
    >
      <Ionicons name="chevron-back" size={28} color="#000" />
    </TouchableOpacity>
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#c66b27",
        tabBarInactiveTintColor: "#5715a2",
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingBottom: 5,
          height: 60, // Set a specific height
          paddingTop: 5,
          zIndex: 1000, // Add this to ensure the tab bar stays on top
          position: "relative",
        },
        headerTitle: (props) => <CustomHeaderTitle title={props.children} />,
        headerLeft: () => <GoBackIcon />,
        headerRight: () => <NotificationIcon />,
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerTitle: () => <CustomHeaderTitle title="Custom Home Title" />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              size={24}
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="send"
        options={{
          title: "Send",
          headerTitle: () => <CustomHeaderTitle title="Add Shipment" />,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              size={24}
              name={focused ? "cube" : "cube-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="track"
        options={{
          title: "Track",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              size={24}
              name={focused ? "compass" : "compass-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              size={24}
              name={focused ? "time" : "time-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              size={24}
              name={focused ? "person-circle" : "person-circle-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 3,
  },
});
