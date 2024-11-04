import { Ionicons } from "@expo/vector-icons";
import { Link, useNavigation, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-paper";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

type ItemData = {
  id: string;
  pickupLocation: string;
  dropLocation: string;
  weight: string;
  itemDescription: string;
  packagingType: string;
};

const DATA: ItemData[] = [
  {
    id: "1",
    pickupLocation: "123 Main St, Springfield",
    dropLocation: "456 Elm St, Shelbyville",
    weight: "500 kg",
    itemDescription: "Electronics - Laptops",
    packagingType: "Box",
  },
  {
    id: "2",
    pickupLocation: "789 Pine St, Metropolis",
    dropLocation: "321 Oak St, Gotham",
    weight: "1500 kg",
    itemDescription: "Furniture - Chairs",
    packagingType: "Pallet",
  },
  {
    id: "3",
    pickupLocation: "246 Maple Ave, Centerville",
    dropLocation: "135 Birch Rd, Riverside",
    weight: "750 kg",
    itemDescription: "Books - Novels",
    packagingType: "Crate",
  },
  {
    id: "4",
    pickupLocation: "101 River Rd, Lakeview",
    dropLocation: "202 Mountain St, Hilltop",
    weight: "300 kg",
    itemDescription: "Clothing - Winter Jackets",
    packagingType: "Bag",
  },
  {
    id: "5",
    pickupLocation: "303 Oak Dr, Willow Creek",
    dropLocation: "404 Cedar Ln, Pine Valley",
    weight: "1200 kg",
    itemDescription: "Appliances - Refrigerators",
    packagingType: "Box",
  },
  {
    id: "6",
    pickupLocation: "505 Birch St, Forest City",
    dropLocation: "606 Ash St, Riverdale",
    weight: "900 kg",
    itemDescription: "Toys - Action Figures",
    packagingType: "Carton",
  },
  {
    id: "7",
    pickupLocation: "707 Elm St, Baytown",
    dropLocation: "808 Maple St, Riverbend",
    weight: "450 kg",
    itemDescription: "Office Supplies - Desks",
    packagingType: "Pallet",
  },
  {
    id: "8",
    pickupLocation: "909 Pine St, Westfield",
    dropLocation: "1010 Willow St, Eastland",
    weight: "600 kg",
    itemDescription: "Kitchenware - Cookware Sets",
    packagingType: "Box",
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
};

const Item = ({ item, onPress }: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={styles.locationContainer}>
      {/* Pickup location */}
      <View style={styles.verticalContainer}>
        <Ionicons name="location-outline" size={20} color="#ff6347" />
        <View style={styles.textContainer}>
          <Text style={styles.label}>From</Text>
          <Text style={styles.locationText}>{item.pickupLocation}</Text>
        </View>
      </View>
      <View style={{ paddingLeft: 2 }}>
        <Ionicons name="ellipsis-vertical" size={14} color="#000" />
      </View>

      {/* Drop-off location */}
      <View style={styles.verticalContainer}>
        <Ionicons name="location-outline" size={20} color="#4CAF50" />
        <View style={styles.textContainer}>
          <Text style={styles.label}>To</Text>
          <Text style={styles.locationText}>{item.dropLocation}</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.weightText}>{item.itemDescription}</Text>
        <Text style={styles.weightText}>-</Text>
        <Text style={styles.weightText}>{item.weight}</Text>
      </View>
    </View>

    {/* Weight and Navigation Arrow */}

    <Ionicons name="chevron-forward" size={24} color="#888" />
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState<string>();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const renderItem = ({ item }: { item: ItemData }) => (
    <Item
      item={item}
      onPress={() => {
        setSelectedId(item.id);
        router.push(`/shipmentDetail?itemId=${item.id}`);
      }}
    />
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#f0f0f0",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  locationContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  verticalContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer: {
    marginLeft: 8,
  },
  label: {
    fontSize: 10,
    color: "#888",
  },
  locationText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  detailsContainer: {
    borderTopWidth: 0.5,
    borderBlockColor: "#DEDEDE",
    width: "100%",
    paddingTop: 1,
    marginTop: 2,
    paddingHorizontal: 4,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
  },
  weightText: {
    fontSize: 12,
    color: "#333",
    marginTop: 2,
    paddingLeft: 14,
  },
});

export default App;
