import { View } from "react-native";
import { GestureDetector } from "react-native-gesture-handler";
import Animated, { useSharedValue } from "react-native-reanimated";

import { useDoubleTap, useImageStyle } from "../../../hooks";

export const EmojiSticker = ({ imageSize, stickerSource }) => {
  const scaleImage = useSharedValue(imageSize);
  const imageStyle = useImageStyle(scaleImage);
  const doubleTap = useDoubleTap({
    scaleImage: scaleImage,
    imageSize: imageSize,
  });

  return (
    <View style={{ top: -350 }}>
      <GestureDetector gesture={doubleTap}>
        <Animated.Image
          source={stickerSource}
          resizeMode="contain"
          style={[imageStyle, { width: imageSize, height: imageSize }]}
        />
      </GestureDetector>
    </View>
  );
};
