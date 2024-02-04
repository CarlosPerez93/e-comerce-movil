import { useState } from "react";
import { FlatList, Platform, StyleSheet } from "react-native";

import { ItemSelect } from "../ItemSelect/ItemSelect";

export const EmojiList = ({ onSelect, onCloseModal }) => {
  const [emoji] = useState([
    require("../../../assets/images/emoji1.png"),
    require("../../../assets/images/emoji2.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <ItemSelect
          index={index}
          item={item}
          onSelect={() => onSelect}
          onCloseModal={() => onCloseModal}
        />
      )}
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
});
