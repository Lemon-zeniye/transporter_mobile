import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { Button, TextInput } from "react-native-paper";

const SignIn = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    router.push("/home");
  };
  return (
    <SafeAreaView className="flex-1 bg-white justify-center">
      <ScrollView>
        <View className="p-6 flex-1 justify-center min-h-[90vh]">
          <View>
            <Text className="text-3xl my-2 font-psemibold">Log in</Text>
            <Text className="text-lg text-gray-300 font-pregular">
              Welcome! Please enter your details.
            </Text>
          </View>

          <View className="mt-6">
            <FormField
              title="Email"
              placeholder="Enter Email"
              value={formValue.email}
              handleChangeText={(e: any) =>
                setFormValue({ ...formValue, email: e })
              }
              otherStyles="mt-3"
            />
            <FormField
              title="Password"
              placeholder="Enter Password"
              value={formValue.password}
              handleChangeText={(e: any) =>
                setFormValue({ ...formValue, password: e })
              }
              otherStyles="mt-3"
            />
          </View>

          <Button
            mode="contained"
            style={styles.button}
            onPress={() => onSubmit()}
          >
            Login
          </Button>
          <View className="items-center mt-16 ">
            <Text>
              Don't have account?{" "}
              <Link href="/sign-up" className="text-blue-600 font-bold">
                Sign Up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#D3D3D3" style="dark" />
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginTop: 22,
    fontWeight: "bold",
  },
});
