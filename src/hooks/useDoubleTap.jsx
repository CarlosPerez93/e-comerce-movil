import { Gesture } from "react-native-gesture-handler";

export const useDoubleTap = (scaleImage, imageSize) =>
  Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else scaleImage.value = imageSize;
    });
