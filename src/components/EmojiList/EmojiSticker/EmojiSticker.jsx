import { GestureDetector } from "react-native-gesture-handler";
import Animated, { useSharedValue } from "react-native-reanimated";

import {
  useDrag,
  useDoubleTap,
  useImageStyle,
  useContainerStyle,
} from "../../../hooks";

export const EmojiSticker = ({ imageSize, stickerSource }) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const drag = useDrag(translateX, translateY);
  const scaleImage = useSharedValue(imageSize);
  const doubleTap = useDoubleTap(scaleImage, imageSize);

  const imageStyle = useImageStyle(scaleImage);
  const containerStyle = useContainerStyle(translateX, translateY);

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
};
