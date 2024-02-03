import { PrimaryButton } from "./PrimaryButton/PrimaryButton";
import { DefaultButton } from "./DefaultButton/DefaultButton";

export const Button = ({ theme, label, onPress }) => {
  return (
    <>
      {theme === "primary" ? (
        <PrimaryButton label={label} onPress={onPress} />
      ) : (
        <DefaultButton label={label} onPress={onPress} />
      )}
    </>
  );
};
