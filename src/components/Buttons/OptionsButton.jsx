import { StyleSheet, View } from "react-native";
import { IconButton } from "./Iconbutton/Iconbutton";
import { CircleButton } from "./CicleButton/CircleButton";

export const OptionsButton = ({ setShowAppOptions, onAddSticker }) => {
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onSaveImageAsync = () => {};
  return (
    <View style={styles.optionsContainer}>
      <View style={styles.optionsRow}>
        <IconButton icon="refresh" label="Reset" onPress={onReset} />
        <CircleButton onPress={onAddSticker} />
        <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
