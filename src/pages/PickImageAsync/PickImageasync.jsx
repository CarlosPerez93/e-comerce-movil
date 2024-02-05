import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";

import { Button } from "../../components/Buttons/Button";
import { EmojiList } from "../../components/EmojiList/EmojiList";
import { EmojiPicker } from "../../components/Modal/EmojiPicker";
import { ImageViewer } from "../../components/ImageViewer/ImageViewer";
import { OptionsButton } from "../../components/Buttons/OptionsButton";
import { EmojiSticker } from "../../components/EmojiList/EmojiSticker/EmojiSticker";

import { handlePickImage } from "../../hooks";

const PlaceHolderImage = require("../../../assets/background-image.png");

export const PickImageAsync = () => {
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onModalClose = () => setIsModalVisible(false);
  const onAddSticker = () => setIsModalVisible(true);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceHolderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        )}
        <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
        </EmojiPicker>
      </View>
      {showAppOptions ? (
        <OptionsButton
          setShowAppOptions={setShowAppOptions}
          onAddSticker={onAddSticker}
        />
      ) : (
        <View style={styles.footContainer}>
          <Button
            theme="primary"
            label="Choose photo"
            onPress={() => handlePickImage(setSelectedImage)}
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
