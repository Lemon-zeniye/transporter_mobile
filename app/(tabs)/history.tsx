import { Text, View } from "react-native";

("react-native-paper");
import React from "react";
import { Link } from "expo-router";

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
