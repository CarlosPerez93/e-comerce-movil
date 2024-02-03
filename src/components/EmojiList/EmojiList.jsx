import { useState } from "react";
import { FlatList, Image, Platform, Pressable } from "react-native";

export const EmojiList = ({ onSelect, onCloseModal }) => {
  const [emoji] = useState([
    require("../../../assets/emojis/dace-crazy.png"),
    require("../../../assets/emojis/dace-love.png"),
  ]);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image source={item} key={index} style={style.image} />
        </Pressable>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
