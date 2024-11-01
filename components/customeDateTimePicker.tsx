import React, { useState } from "react";
import { View, Pressable, Platform, StyleSheet } from "react-native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { TextInput } from "react-native-paper";

interface CustomDateTimePickerProps {
  value: string;
  setValue: (value: string) => void;
  mode: "date" | "time";
  label: string;
}

const CustomDateTimePicker: React.FC<CustomDateTimePickerProps> = ({
  value,
  setValue,
  mode,
  label,
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
          label={label}
          placeholder={label}
          value={value}
          editable={false}
          style={styles.dateInput}
          mode="outlined"
          //   right={<TextInput.Icon name="cube" />}
        />
      </Pressable>
    </View>
  );
};

export default CustomDateTimePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  dateInputContainer: {
    width: "100%",
  },
  dateInput: {
    backgroundColor: "#fff",
  },
  picker: {
    backgroundColor: "#fff",
    width: "100%",
  },
});
