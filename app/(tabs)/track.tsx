import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import {
  Text,
  Card,
  ProgressBar,
  Divider,
  IconButton,
  FAB,
} from "react-native-paper";
const TRACKING_STEPS = [
  "Shipment Created",
  "Picked Up",
  "In Transit",
  "Out for Delivery",
  "Delivered",
];

const currentStatusIndex = 3; // Example: "Arrived at Sorting Facility"

const Track = ({ navigation }: { navigation: any }) => {
  // Method to handle real-time tracking navigation
  const goToRealTimeTracking = () => {
    navigation.navigate("RealTimeTracking"); // Ensure "RealTimeTracking" route exists
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Current Status Card */}
        <Card style={styles.card}>
          <Card.Title title="Current Status" />
          <Card.Content>
            <Text variant="bodyMedium">Arrived at Sorting Facility</Text>
            <Text variant="bodySmall">Estimated Delivery: Nov 3, 2024</Text>
            <ProgressBar
              progress={(currentStatusIndex + 1) / TRACKING_STEPS.length}
              color="#6200ee"
              style={styles.progress}
            />
          </Card.Content>
        </Card>

        {/* Timeline Section */}
        <Text style={styles.sectionTitle}>Tracking Updates</Text>
        <Divider />
        {TRACKING_STEPS.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <Ionicons
              name="checkmark-circle"
              size={20}
              color={index <= currentStatusIndex ? "green" : "grey"}
            />
            <View style={styles.stepText}>
              <Text>{step}</Text>
              <Text variant="bodySmall">Date & Time Here</Text>
            </View>
            <Divider style={styles.stepDivider} />
          </View>
        ))}
      </ScrollView>

      {/* Real-time Tracking FAB */}
      <FAB
        icon="map-marker"
        label="Track in Real-Time"
        style={styles.fab}
        onPress={goToRealTimeTracking}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 16,
  },
  card: {
    marginBottom: 20,
  },
  progress: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  stepText: {
    flex: 1,
  },
  stepDivider: {
    marginVertical: 10,
  },
  fab: {
    position: "absolute",
    right: 16,
    bottom: 16,
    backgroundColor: "#6200ee",
  },
});

export default Track;
