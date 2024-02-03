import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

import { Button } from "../Buttons/Button";
import { ImageViewer } from "../ImageViewer/ImageViewer";

import { handlePickImage } from "../../hooks/useSelectImage";
import { OptionsButton } from "../Buttons/OptionsButton";

const PlaceHolderImage = require("../../../assets/background-image.png");

export const PickImageAsync = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceHolderImage}
          selectedImage={selectedImage}
        />
      </View>
      {showAppOptions ? (
        <OptionsButton setShowAppOptions={setShowAppOptions} />
      ) : (
        <View style={styles.footContainer}>
          <Button
            theme="primary"
            label="Choose photo"
            onPress={() => handlePickImage(setSelectedImage, setShowAppOptions)}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
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
