import { Image, TextInput, Dimensions, FlatList } from "react-native";

import { useGallery } from "./use-gallery";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

const SPACING = 8;

const IMAGE_WIDTH = SCREEN_WIDTH / 2;
const IMAGE_HEIGHT = SCREEN_HEIGHT / 3;

export function GalleryScreen() {
  const { photos, onEndReached } = useGallery();

  if (photos?.length === 0) {
    return <TextInput placeholder="Carregando..." />;
  }

  return (
    <FlatList
      data={photos}
      keyExtractor={(item, index) => `${item?.id.toString()}-${index}`}
      numColumns={2}
      onEndReached={onEndReached}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item?.src.large }}
          style={{
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT,
          }}
        />
      )}
      contentContainerStyle={{
        justifyContent: "space-between",
      }}
      style={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
      }}
    />
  );
}
