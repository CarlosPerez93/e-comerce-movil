import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PickImageAsync } from "./src/components/PickImageAsync/PickImageasync";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <PickImageAsync />
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
});
