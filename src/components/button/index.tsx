import { TouchableOpacity, TouchableOpacityProps } from "react-native";

const variantStyles = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-white-500 text-black",
};

export type ButtonProps = {
  variant: keyof typeof variantStyles;
} & TouchableOpacityProps;

export function Button({
  children,
  onPress,
  variant = "primary",
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={`px-4 py-2 rounded-md ${variantStyles[variant]}`}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}
