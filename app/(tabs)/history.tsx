import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Card, Title, Paragraph, IconButton, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ShipmentList = () => {
  const navigation = useNavigation();
  const shipments = [
    {
      id: "1",
      pickupLocation: "Addis Ababa",
      dropOffLocation: "Dire Dawa",
      pickupDate: "2024-11-04",
      itemDescription: "Electronics",
      status: "Pending",
    },
    {
      id: "2",
      pickupLocation: "Bahir Dar",
      dropOffLocation: "Gondar",
      pickupDate: "2024-11-05",
      itemDescription: "Furniture",
      status: "In Transit",
    },
    {
      id: "3",
      pickupLocation: "Hawassa",
      dropOffLocation: "Shashamane",
      pickupDate: "2024-11-06",
      itemDescription: "Clothing",
      status: "Delivered",
    },
    {
      id: "4",
      pickupLocation: "Mekelle",
      dropOffLocation: "Adigrat",
      pickupDate: "2024-11-07",
      itemDescription: "Pharmaceuticals",
      status: "Canceled",
    },
    {
      id: "5",
      pickupLocation: "Jimma",
      dropOffLocation: "Nekemte",
      pickupDate: "2024-11-08",
      itemDescription: "Agricultural Products",
      status: "In Transit",
    },
    {
      id: "6",
      pickupLocation: "Adama",
      dropOffLocation: "Harar",
      pickupDate: "2024-11-09",
      itemDescription: "Construction Materials",
      status: "Pending",
    },
    {
      id: "7",
      pickupLocation: "Assosa",
      dropOffLocation: "Gambela",
      pickupDate: "2024-11-10",
      itemDescription: "Food Products",
      status: "Delivered",
    },
    {
      id: "8",
      pickupLocation: "Jijiga",
      dropOffLocation: "Awash",
      pickupDate: "2024-11-11",
      itemDescription: "Household Goods",
      status: "Pending",
    },
    {
      id: "9",
      pickupLocation: "Debre Markos",
      dropOffLocation: "Debre Birhan",
      pickupDate: "2024-11-12",
      itemDescription: "Textiles",
      status: "In Transit",
    },
    {
      id: "10",
      pickupLocation: "Wolkite",
      dropOffLocation: "Butajira",
      pickupDate: "2024-11-13",
      itemDescription: "Machinery",
      status: "Pending",
    },
  ];

  const handlePress = (shipmentId: any) => {
    // Navigate to the shipment detail view with the shipmentId
    // navigation.navigate('ShipmentDetail', { shipmentId });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {shipments.map((shipment) => (
          <TouchableOpacity
            key={shipment.id}
            onPress={() => handlePress(shipment.id)}
          >
            <Card style={styles.card}>
              <Card.Content style={styles.cardContent}>
                {/* Status displayed in the top right */}
                <Text
                  style={[
                    styles.status,
                    { color: getStatusColor(shipment.status) },
                  ]}
                >
                  {shipment.status}
                </Text>

                {/* Item Description */}
                <Title style={styles.itemDescription}>
                  {shipment.itemDescription}
                </Title>

                {/* Pickup and Drop-off Locations */}
                <View style={styles.locationRow}>
                  <View style={styles.locationHalf}>
                    <MaterialCommunityIcons
                      name="truck"
                      size={16}
                      color="#6200ea"
                    />
                    <Text style={styles.locationText}>
                      {shipment.pickupLocation}
                    </Text>
                  </View>
                  <View style={styles.locationHalf}>
                    <MaterialCommunityIcons
                      name="map-marker"
                      size={16}
                      color="#6200ea"
                    />
                    <Text style={styles.locationText}>
                      {shipment.dropOffLocation}
                    </Text>
                  </View>
                </View>

                {/* Pickup Date with Label */}
                <Paragraph style={styles.pickupDate}>
                  <Paragraph style={styles.pickupDateLabel}>
                    Pickup Date{":   "}
                  </Paragraph>
                  {shipment.pickupDate}
                </Paragraph>
              </Card.Content>
              {/* <Card.Actions>
              <IconButton
                icon="chevron-right"
                size={20}
                onPress={() => handlePress(shipment.id)}
              />
            </Card.Actions> */}
            </Card>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

// Function to set color based on status
const getStatusColor = (status: string) => {
  switch (status) {
    case "In Transit":
      return "#007bff";
    case "Delivered":
      return "#28a745";
    case "Pending":
      return "#ffc107";
    case "Canceled":
      return "#dc3545";
    default:
      return "#888888";
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  card: {
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "#ffffff",
  },
  cardContent: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: "relative",
  },
  status: {
    position: "absolute",
    top: 8,
    right: 8,
    fontSize: 12,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  locationRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  locationHalf: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
  },
  locationText: {
    fontSize: 14,
    color: "#666666",
    marginLeft: 4,
  },
  pickupDateLabel: {
    fontSize: 12,
    color: "#888888",
    paddingRight: 5,
  },
  pickupDate: {
    fontSize: 14,
    color: "#333333",
  },
});

export default ShipmentList;
