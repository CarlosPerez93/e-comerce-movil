import { View } from "react-native";
import { PrimaryButton } from "./PrimaryButton/PrimaryButton";
import { DefaultButton } from "./DefaultButton/DefaultButton";

export const Button = ({ theme, label }) => {
  return (
    <>
      {theme === "primary" ? (
        <PrimaryButton label={label} />
      ) : (
        <DefaultButton label={label} />
      )}
    </>
  );
};
