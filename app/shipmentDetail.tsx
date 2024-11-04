import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Text as TextPaper } from "react-native-paper";
import { Button, Card, Searchbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
interface Truck {
  id: string;
  name: string;
  status: string;
  capacity: string;
}

const trucksData: Truck[] = [
  { id: "1", name: "18-Wheeler", status: "Available", capacity: "40,000 kg" },
  { id: "2", name: "Box Truck", status: "In Use", capacity: "20,000 kg" },
  { id: "3", name: "Cargo Van", status: "Available", capacity: "5,000 kg" },
  {
    id: "4",
    name: "Flatbed Truck",
    status: "Available",
    capacity: "30,000 kg",
  },
  {
    id: "5",
    name: "Refrigerated Truck",
    status: "In Use",
    capacity: "10,000 kg",
  },
  // Add more unique truck entries as needed
];

const DetailScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTruck, setSelectedTruck] = useState<Truck | null>(null);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleAssignTruck = () => {
    setModalVisible(true);
  };

  const handleSelectTruck = (truck: Truck) => {
    setSelectedTruck(truck);
  };

  const handleSave = () => {
    // Add functionality to save the selected truck here
    setModalVisible(false);
  };

  const handleCancel = () => {
    setSelectedTruck(null); // Clear selection if needed
    setModalVisible(false);
  };
  const item = {
    pickupInfo: {
      pickupLocation: "123 Main St, Springfield",
      pickupDate: "2023-12-01",
      pickupTime: "10:30 AM",
      contactPerson: "John Doe",
      phoneNumber: "+1234567890",
    },
    dropInfo: {
      dropLocation: "456 Elm St, Shelbyville",
      dropDate: "2023-12-02",
      dropTime: "02:00 PM",
      contactPerson: "Jane Smith",
      phoneNumber: "+0987654321",
    },
    itemInfo: {
      itemDescription: "Electronics - Laptops",
      quantity: 10,
      packagingType: "Box",
      truckType: "18-Wheeler",
      weight: "500 kg",
    },
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Pickup Info"
          left={() => (
            <MaterialCommunityIcons name="truck" size={20} color="#5715a2" />
          )}
        />
        <Card.Content>
          <View style={{ marginBottom: 10 }}>
            <TextPaper variant="bodySmall" style={styles.label}>
              Location
            </TextPaper>
            <TextPaper variant="bodyLarge">
              {item.pickupInfo.pickupLocation}
            </TextPaper>
          </View>
          <View style={styles.row}>
            <View style={styles.infoSection}>
              <TextPaper variant="bodySmall" style={styles.label}>
                Date
              </TextPaper>
              <TextPaper variant="bodyLarge">
                {item.pickupInfo.pickupDate}
              </TextPaper>
            </View>
            <View style={styles.infoSection}>
              <TextPaper variant="bodySmall" style={styles.label}>
                Time
              </TextPaper>
              <TextPaper variant="bodyLarge">
                {item.pickupInfo.pickupTime}
              </TextPaper>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.infoSection}>
              <TextPaper variant="bodySmall" style={styles.label}>
                Contact Person
              </TextPaper>
              <TextPaper variant="bodyLarge">
                {item.pickupInfo.contactPerson}
              </TextPaper>
            </View>
            <View style={styles.infoSection}>
              <TextPaper variant="bodySmall" style={styles.label}>
                Phone Number:
              </TextPaper>
              <TextPaper variant="bodyLarge">
                {item.pickupInfo.phoneNumber}
              </TextPaper>
            </View>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title
          title="Drop Info"
          left={() => (
            <MaterialCommunityIcons
              name="map-marker"
              size={20}
              color="#5715a2"
            />
          )}
        />
        <Card.Content>
          <View style={styles.infoSection}>
            <TextPaper variant="bodySmall" style={styles.label}>
              Location
            </TextPaper>
            <TextPaper variant="bodyLarge">
              {item.dropInfo.dropLocation}
            </TextPaper>
          </View>
          <View style={styles.row}>
            <View style={styles.infoSection}>
              <TextPaper variant="bodySmall" style={styles.label}>
                Date
              </TextPaper>
              <TextPaper variant="bodyLarge">
                {item.dropInfo.dropDate}
              </TextPaper>
            </View>
            <View style={styles.infoSection}>
              <TextPaper variant="bodySmall" style={styles.label}>
                Time
              </TextPaper>
              <TextPaper variant="bodyLarge">
                {item.dropInfo.dropTime}
              </TextPaper>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.infoSection}>
              <TextPaper variant="bodySmall" style={styles.label}>
                Contact Person
              </TextPaper>
              <TextPaper variant="bodyLarge">
                {item.dropInfo.contactPerson}
              </TextPaper>
            </View>
            <View style={styles.infoSection}>
              <TextPaper variant="bodySmall" style={styles.label}>
                Phone Number
              </TextPaper>
              <TextPaper variant="bodyLarge">
                {item.dropInfo.phoneNumber}
              </TextPaper>
            </View>
          </View>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title
          title="Item Info"
          left={() => (
            <MaterialCommunityIcons name="package" size={20} color="#5715a2" />
          )}
        />
        <Card.Content>
          <View style={styles.infoSection}>
            <TextPaper variant="bodySmall" style={styles.label}>
              Description
            </TextPaper>
            <TextPaper variant="bodyLarge">
              {item.itemInfo.itemDescription}
            </TextPaper>
          </View>
          <View style={styles.row}>
            <View style={styles.infoSection}>
              <TextPaper variant="bodySmall" style={styles.label}>
                Quantity
              </TextPaper>
              <TextPaper variant="bodyLarge">
                {item.itemInfo.quantity}
              </TextPaper>
            </View>

            <View style={styles.infoSection}>
              <TextPaper variant="bodySmall" style={styles.label}>
                Packaging Type
              </TextPaper>
              <TextPaper variant="bodyLarge">
                {item.itemInfo.packagingType}
              </TextPaper>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.infoSection}>
              <TextPaper variant="bodySmall" style={styles.label}>
                Truck Type
              </TextPaper>
              <TextPaper variant="bodyLarge">
                {item.itemInfo.truckType}
              </TextPaper>
            </View>

            <View style={styles.infoSection}>
              <TextPaper variant="bodySmall" style={styles.label}>
                Weight
              </TextPaper>
              <TextPaper variant="bodyLarge">{item.itemInfo.weight}</TextPaper>
            </View>
          </View>
        </Card.Content>
      </Card>

      {/* <View style={styles.section}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="truck" size={20} color="#5715a2" />
          <Text style={styles.sectionTitle}>Pickup Info</Text>
        </View>
        <Text style={styles.paragraph}>
          <Text style={styles.label}>Location: </Text>
          {item.pickupInfo.pickupLocation}
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.label}>Date: </Text>
          {item.pickupInfo.pickupDate}
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.label}>Time: </Text>
          {item.pickupInfo.pickupTime}
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.label}>Contact Person: </Text>
          {item.pickupInfo.contactPerson}
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.label}>Phone Number: </Text>
          {item.pickupInfo.phoneNumber}
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="map-marker" size={20} color="#5715a2" />
          <Text style={styles.sectionTitle}>Drop Info</Text>
        </View>
        <Text style={styles.paragraph}>
          <Text style={styles.label}>Location: </Text>
          {item.dropInfo.dropLocation}
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.label}>Date: </Text>
          {item.dropInfo.dropDate}
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.label}>Time: </Text>
          {item.dropInfo.dropTime}
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.label}>Contact Person: </Text>
          {item.dropInfo.contactPerson}
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.label}>Phone Number: </Text>
          {item.dropInfo.phoneNumber}
        </Text>
      </View>

      <View style={styles.section}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="package" size={20} color="#5715a2" />
          <Text style={styles.sectionTitle}>Item Info</Text>
        </View>
        <Text style={styles.paragraph}>
          <Text style={styles.label}>Description: </Text>
          {item.itemInfo.itemDescription}
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.label}>Quantity: </Text>
          {item.itemInfo.quantity}
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.label}>Packaging Type: </Text>
          {item.itemInfo.packagingType}
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.label}>Truck Type: </Text>
          {item.itemInfo.truckType}
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.label}>Weight: </Text>
          {item.itemInfo.weight}
        </Text>
      </View> */}

      {/* Assign Truck Button */}
      <Button
        mode="contained"
        onPress={handleAssignTruck}
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        Assign Truck
      </Button>

      {/* Truck Selection Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCancel}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Select a Truck</Text>

            <Searchbar
              placeholder="Search For Truck"
              onChangeText={setSearchQuery}
              value={searchQuery}
              style={styles.searchbar}
              inputStyle={styles.input}
              iconColor="#888" // Customize icon color
              placeholderTextColor="#aaa" // Customize placeholder color
            />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              {trucksData.map((truck) => (
                <TouchableOpacity
                  key={truck.id}
                  style={[
                    styles.truckOption,
                    selectedTruck?.id === truck.id && styles.selectedTruck,
                  ]}
                  onPress={() => handleSelectTruck(truck)}
                >
                  <View style={styles.truck_container}>
                    <View>
                      <TextPaper variant="bodyMedium" style={styles.truckText}>
                        {truck.name}
                      </TextPaper>
                      <View
                        style={[
                          styles.statusContainer,
                          {
                            backgroundColor:
                              truck.status === "Available"
                                ? "#5ab35a"
                                : "#E60000",
                          },
                        ]}
                      >
                        <TextPaper
                          variant="bodySmall"
                          style={styles.truckStatus}
                        >
                          {truck.status}
                        </TextPaper>
                      </View>
                    </View>
                    <TextPaper variant="bodyMedium" style={styles.truckText}>
                      {truck.capacity}
                    </TextPaper>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <View style={styles.buttonContainer}>
              <Button
                mode="outlined"
                onPress={handleCancel}
                style={styles.cancelButton}
              >
                Cancel
              </Button>
              <Button
                mode="contained"
                onPress={handleSave}
                style={styles.saveButton}
              >
                Save
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#F2F2F2",
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#6200ee",
  },
  section: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#5715a2",
  },
  paragraph: {
    marginVertical: 5,
    fontSize: 16,
    lineHeight: 22,
  },
  //   label: {
  //     fontWeight: "bold",
  //     color: "#333333",
  //   },
  button: {
    marginTop: 10,
    marginBottom: 40,
    borderRadius: 10,
  },
  buttonContent: {
    paddingVertical: 6,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "75%",
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  truckOption: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  selectedTruck: {
    backgroundColor: "#e0e0ff",
    borderRadius: 8,
  },
  truckText: {
    fontSize: 18,
    color: "#333",
  },
  statusContainer: {
    paddingHorizontal: 15,
    marginTop: 2,
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  truckStatus: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cancelButton: {
    flex: 0.45,
    borderRadius: 10,
    borderColor: "#6200ee",
  },
  saveButton: {
    flex: 0.45,
    borderRadius: 10,
    backgroundColor: "#6200ee",
  },
  searchbar: {
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#ffffff",
  },
  input: {
    fontSize: 16,
    color: "#333",
  },
  truck_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
  },

  card: {
    marginTop: 10,
    backgroundColor: "#fff",
  },
  infoSection: {
    marginBottom: 10,
    flex: 1,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    color: "#5715a2",
  },
});

export default DetailScreen;
