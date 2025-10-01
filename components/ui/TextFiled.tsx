import { StyleSheet, Text, TextInput, View } from "react-native";

export interface TextFiledProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const TextFiled = ({
  label,
  placeholder,
  value,
  onChangeText,
}: TextFiledProps) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 10,
    marginTop: 10,
  },
});

export default TextFiled;
