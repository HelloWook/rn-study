import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import TextFiled, { TextFiledProps } from "./TextFiled";

interface FormProps {
  children: React.ReactNode;
}

const Form = ({ children }: FormProps) => {
  return <View>{children}</View>;
};

export default Form;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

const Filed = ({ label, placeholder, value, onChangeText }: TextFiledProps) => {
  return (
    <View style={styles.container}>
      <TextFiled
        label={label}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={buttonStyles.button}>
        <Text style={buttonStyles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

Form.Filed = Filed;
Form.Button = Button;

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
    width: "100%",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
  },
});
