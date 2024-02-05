import { Image, Pressable, StyleSheet } from "react-native";

export const EmojiSelect = ({ item, index, onSelect, onCloseModal }) => {
  return (
    <Pressable
      onPress={() => {
        onSelect(item);
        onCloseModal();
      }}
    >
      <Image source={item} key={index} style={styles.image} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
