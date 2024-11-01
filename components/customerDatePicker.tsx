import React, { useState } from "react";
import { View, TextInput, Pressable, Platform, StyleSheet } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

interface CustomDateTimePickerProps {
  value: string;
  setValue: (value: string) => void;
  mode: "date" | "time";
}

const CustomDateTimePicker: React.FC<CustomDateTimePickerProps> = ({
  value,
  setValue,
  mode,
}) => {
  const [date, setDate] = useState<Date>(new Date());
  const [showPicker, setShowPicker] = useState<boolean>(false);

  const toggleDatePicker = () => setShowPicker(!showPicker);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;

    if (event.type === "set") {
      setDate(currentDate);

      // Format value based on mode
      const formattedValue =
        mode === "date"
          ? currentDate.toDateString()
          : currentDate.toLocaleTimeString();

      setValue(formattedValue);

      // Close the picker immediately on Android after selection
      if (Platform.OS === "android") {
        setShowPicker(false);
      }
    } else {
      // Close the picker if "cancel" action is detected
      setShowPicker(false);
    }
  };

  return (
    <View style={styles.container}>
      {showPicker && (
        <DateTimePicker
          mode={mode}
          display="spinner"
          value={date}
          onChange={onChange}
          style={styles.picker}
        />
      )}
      <Pressable onPress={toggleDatePicker} style={styles.dateInputContainer}>
        <TextInput
          placeholder={mode === "date" ? "Sat Aug 21 2004" : "12:00 PM"}
          value={value}
          placeholderTextColor="#888"
          editable={false}
          style={styles.dateInput}
        />
      </Pressable>
    </View>
  );
};

export default CustomDateTimePicker;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  dateInputContainer: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  dateInput: {
    color: "#111",
    fontSize: 16,
  },
  picker: {
    backgroundColor: "#fff",
    width: "100%",
  },
});
