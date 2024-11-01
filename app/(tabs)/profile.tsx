import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomDateTimePicker from "@/components/customeDateTimePicker";
// import CustomDatePicker from "@/components/customerDatePicker";
// import CustomDateTimePicker from "@/components/customerDatePicker";

const Profile = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [time, setTime] = useState("");
  return (
    <SafeAreaView className="flex-1 px-4">
      <ScrollView>
        <Text>what</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
