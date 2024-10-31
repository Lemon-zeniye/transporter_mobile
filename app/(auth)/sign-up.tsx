import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import FormField from "@/components/FormField";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [formValue, setFormValue] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    company_name: "",
    password: "",
    confirmPassword: "",
  });

  const onSubmit = () => {
    // Handle form submission, e.g., call an API or navigate
    console.log("Form submitted", formValue);
  };

  return (
    <SafeAreaView className="flex-1 justify-center">
      <ScrollView>
        <View className="p-4">
          <View>
            <Text className="text-3xl font-psemibold">Create an account</Text>
            <Text className="text-lg text-gray-300 font-pregular">
              Welcome! Please enter your details.
            </Text>
          </View>
          <View className="mt-6">
            <FormField
              title="Full Name"
              placeholder="Enter Full Name"
              value={formValue.full_name}
              handleChangeText={(e: any) =>
                setFormValue({ ...formValue, full_name: e })
              }
              otherStyles="mt-3"
            />
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
              title="Phone Number"
              placeholder="Enter Phone Number"
              // keyboardType="phone-pad"
              value={formValue.phone_number}
              handleChangeText={(e: any) =>
                setFormValue({ ...formValue, phone_number: e })
              }
              otherStyles="mt-3"
            />
            <FormField
              title="Company Name"
              placeholder="Enter Company Name"
              value={formValue.company_name}
              handleChangeText={(e: any) =>
                setFormValue({ ...formValue, company_name: e })
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
            <FormField
              title="Confirm Password"
              placeholder="Confirm Password"
              value={formValue.confirmPassword}
              handleChangeText={(e: any) =>
                setFormValue({ ...formValue, confirmPassword: e })
              }
              otherStyles="mt-3"
            />
          </View>
          <Button
            style={styles.button}
            mode="contained"
            onPress={onSubmit}
            className="mt-4"
          >
            Sign Up
          </Button>
          <View className="items-center mt-6">
            <Text>
              Already have an account?{" "}
              <Link href="/sign-in" className="text-blue-600 font-bold">
                Login
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#000" style="light" />
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginTop: 14,
    fontWeight: "bold",
  },
});
