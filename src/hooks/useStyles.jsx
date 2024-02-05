import { useAnimatedStyle, withSpring } from "react-native-reanimated";

export const useImageStyle = (selectImage) =>
  useAnimatedStyle(() => {
    return {
      width: withSpring(selectImage.value),
      height: withSpring(selectImage.value),
    };
  });

export const useContainerStyle = (translateX, translateY) =>
  useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withSpring(translateX.value) },
        { translateY: withSpring(translateY.value) },
      ],
    };
  });
