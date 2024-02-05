import { useAnimatedStyle, withSpring } from "react-native-reanimated";

export const useImageStyle = (selectImage) =>
  useAnimatedStyle(() => {
    return {
      width: withSpring(selectImage.value),
      height: withSpring(selectImage.value),
    };
  });
