import { Gesture } from "react-native-gesture-handler";

export const useDrag = (translateX, translateY) => {
  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
  });
  return drag;
};
