import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import {
  TextInput,
  Button,
  List,
  Avatar,
  Card,
  Text,
} from "react-native-paper";
import CustomDateTimePicker from "@/components/customeDateTimePicker";
import DropdownComponent from "@/components/dropDownComponent";

const ShipmentOrderForm = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
  ];

  const handleValueChange = (value: string | null) => {
    console.log("Selected value:", value);
  };

  const Header = ({ title }: { title: string }) => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 px-4">
      <ScrollView>
        <Card
          style={{
            marginTop: 10,
            backgroundColor: "#fff",
            padding: 1,
          }}
        >
          <Card.Title title={<Header title="Pickup Info" />} />
          <Card.Content>
            <TextInput
              mode="outlined"
              label="Pickup Location"
              placeholder="Enter pickup location"
              style={styles.text_input}
            />
            <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
              <CustomDateTimePicker
                value={pickupDate}
                setValue={setPickupDate}
                mode="date"
                label="Pickup Date"
              />
              <CustomDateTimePicker
                value={pickupTime}
                setValue={setPickupTime}
                mode="time"
                label="Pickup Time"
              />
            </View>
            <TextInput
              mode="outlined"
              label="Contact Person"
              placeholder="Enter contact person name"
              style={styles.text_input}
            />
            <TextInput
              mode="outlined"
              label="Phone Number"
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              style={styles.text_input}
            />
          </Card.Content>
        </Card>

        <Card
          style={{
            margin: 2,
            marginTop: 10,
            backgroundColor: "#fff",
            padding: 2,
          }}
        >
          <Card.Title title={<Header title="Dropo Info" />} />
          <Card.Content>
            <TextInput
              mode="outlined"
              label="Drop Location"
              placeholder="Enter drop location"
              style={styles.text_input}
            />
            <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
              <CustomDateTimePicker
                value={deliveryDate}
                setValue={setDeliveryDate}
                mode="date"
                label="Drop Date"
              />
              <CustomDateTimePicker
                value={deliveryTime}
                setValue={setDeliveryTime}
                mode="time"
                label="Drop Time"
              />
            </View>

            <TextInput
              mode="outlined"
              label="Contact Person"
              placeholder="Enter contact person name"
              style={styles.text_input}
            />
            <TextInput
              mode="outlined"
              label="Phone Number"
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              style={styles.text_input}
            />
          </Card.Content>
        </Card>
        <Card
          style={{
            margin: 2,
            marginTop: 10,
            backgroundColor: "#fff",
            padding: 2,
          }}
        >
          <Card.Title title={<Header title="Item Info" />} />
          <Card.Content>
            <TextInput
              mode="outlined"
              label="Item Description"
              placeholder="Enter item description"
              style={styles.text_input}
            />
            <View style={{ flexDirection: "row", gap: 10, marginBottom: 10 }}>
              <TextInput
                mode="outlined"
                label="Quantity"
                placeholder="Enter Quantity"
                style={styles.input} // Updated from className to style
                keyboardType="numeric"
              />
              <TextInput
                mode="outlined"
                label="Packaging Type"
                placeholder="Package Type"
                style={styles.input} // Updated from className to style
              />
            </View>
            <DropdownComponent
              label="Select a Truck"
              placeholder="Select a truck"
              data={data}
              onValueChange={handleValueChange}
            />

            <TextInput
              mode="outlined"
              label="Weight"
              placeholder="Enter weight"
              keyboardType="numeric"
              style={styles.text_input}
            />
          </Card.Content>
        </Card>

        <Button
          mode="contained"
          onPress={() => console.log("Shipment Order Submitted")}
          style={{
            marginTop: 20,
            borderRadius: 8,
            paddingVertical: 6,
            marginBottom: 10,
            backgroundColor: "green",
          }}
        >
          Submit Order
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text_input: {
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    paddingTop: 10,
    paddingLeft: 7,
    // backgroundColor: "#D3D3D3",
    // borderBottomWidth: 1,
    // borderBottomColor: "#ddd",
    // alignItems: "center", // Center-aligns the title
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});

export default ShipmentOrderForm;
