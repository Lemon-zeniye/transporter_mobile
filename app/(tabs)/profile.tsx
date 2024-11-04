import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Text, Avatar } from "react-native-paper";

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const ProfileScreen: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "Gemechu Tola Musa",
    email: "gemechu@gmail.com",
    companyName: "GTM",
    phoneNumber: "0987654334",
    password: "1234@12",
    confirmPassword: "1234@12",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Type definitions for input name and value
  const handleInputChange = (name: keyof FormData, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (formData.password !== formData.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    setIsEditing(false);
    Alert.alert("Profile Saved", "Your profile has been successfully updated!");
  };

  return (
    <View style={styles.container}>
      <Avatar.Text
        size={64}
        label={formData.fullName ? formData.fullName[0] : "U"}
        style={styles.avatar}
      />
      <Text style={styles.header}>Profile</Text>

      <TextInput
        label="Full Name"
        value={formData.fullName}
        onChangeText={(value) => handleInputChange("fullName", value)}
        style={styles.input}
        disabled={!isEditing}
      />

      <TextInput
        label="Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
        style={styles.input}
        disabled={!isEditing}
        keyboardType="email-address"
      />

      <TextInput
        label="Company Name"
        value={formData.companyName}
        onChangeText={(value) => handleInputChange("companyName", value)}
        style={styles.input}
        disabled={!isEditing}
      />

      <TextInput
        label="Phone Number"
        value={formData.phoneNumber}
        onChangeText={(value) => handleInputChange("phoneNumber", value)}
        style={styles.input}
        disabled={!isEditing}
        keyboardType="phone-pad"
      />

      {isEditing && (
        <>
          <TextInput
            label="Password"
            value={formData.password}
            onChangeText={(value) => handleInputChange("password", value)}
            style={styles.input}
            secureTextEntry
          />

          <TextInput
            label="Confirm Password"
            value={formData.confirmPassword}
            onChangeText={(value) =>
              handleInputChange("confirmPassword", value)
            }
            style={styles.input}
            secureTextEntry
          />
        </>
      )}

      <Button
        mode="contained"
        onPress={() => {
          if (isEditing) handleSave();
          else setIsEditing(true);
        }}
        style={styles.button}
      >
        {isEditing ? "Save" : "Edit"}
      </Button>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f6f7fb",
  },
  avatar: {
    alignSelf: "center",
    marginVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
});
