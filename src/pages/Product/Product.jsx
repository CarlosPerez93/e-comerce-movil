import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, Image } from "react-native";
import { ImageViewer } from "../../components/ImageViewer/ImageViewer";
import { Button } from "../../components/Button/Button";

const PlaceHolderImage = require("../../../assets/background-image.png");

export const Product = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceHolderImage} />
      </View>
      <View style={styles.footContainer}>
        <Button label="Choose photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
