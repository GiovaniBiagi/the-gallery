import { Link } from "expo-router";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function InitialScreen() {
  return (
    <View className="flex-1">
      <Image
        source={require("_/assets/background.png")}
        style={[
          StyleSheet.absoluteFillObject,
          { width: "100%", height: undefined },
        ]}
      />

      <View className="flex-1 justify-end px-6">
        <Text className="text-7xl font-extrabold font-serif text-commom-black text-center">
          THE
        </Text>
        <Text className="text-4xl font-black font-serif text-commom-black text-center mb-14">
          Gallery
        </Text>
        <Link href="/gallery" asChild>
          <TouchableOpacity
            className="justify-center items-center bg-commom-black rounded-xl p-4 mt-4 mb-14"
            activeOpacity={0.6}
          >
            <Text className="text-xl font-bold text-commom-white">
              Get Started
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
