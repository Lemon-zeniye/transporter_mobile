import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  SafeAreaView,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ActivityIndicator, MD2Colors, TextInput } from "react-native-paper";
import React from "react";
import { Link } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [text, setText] = React.useState("");
  return (
    <View className="items-center justify-center h-full">
      <Text className="text-white text-lg font-psemibold">
        Hello NativeWind!
      </Text>
      <Link href="/" className="text-white">
        Login
      </Link>
    </View>
  );
}
