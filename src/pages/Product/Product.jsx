import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

import { Button } from "../../components/Buttons/Button";
import { ImageViewer } from "../../components/ImageViewer/ImageViewer";

import { handlePickImage } from "../../hooks/useSelectImage";

const PlaceHolderImage = require("../../../assets/background-image.png");

export const Product = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceHolderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footContainer}>
        <Button
          theme="primary"
          label="Choose photo"
          onPress={() => handlePickImage(setSelectedImage)}
        />
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
