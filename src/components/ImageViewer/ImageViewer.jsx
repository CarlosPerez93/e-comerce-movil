import { StyleSheet, Image } from "react-native";

export const ImageViewer = ({ placeholderImageSource }) => {
  return <Image style={styles.image} source={placeholderImageSource} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
