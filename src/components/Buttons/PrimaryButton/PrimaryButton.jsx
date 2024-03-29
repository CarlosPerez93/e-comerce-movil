import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const PrimaryButton = ({ label, onPress }) => {
  return (
    <View style={[styles.buttonContainer]}>
      <Pressable
        onPress={onPress}
        style={[styles.button, { backgroundColor: "#fff" }]}
      >
        <FontAwesome
          name="picture-o"
          size={18}
          color="#25292e"
          style={[styles.buttonIcon]}
        />
        <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 58,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
