import * as ImagePicker from "expo-image-picker";
export const handlePickImage = async (setSelectedImage, setShowAppOptions) => {
  let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
  });
  if (!result.canceled) {
    setSelectedImage(result.assets[0].uri);
    setShowAppOptions(true);
  } else alert("You did not select any image.");
};
