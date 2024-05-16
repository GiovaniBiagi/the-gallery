import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import photosService from "_/services/photos";

export const useGallery = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["photos"],
      initialPageParam: 1,
      queryFn: async ({ pageParam }) =>
        await photosService.getCuratedPhotos({
          page: pageParam,
        }),
      getNextPageParam: (lastPage) => lastPage?.data.page! + 1,
    });

  const loadMore = async () => {
    if (!hasNextPage) {
      return;
    }

    return await fetchNextPage();
  };

  const flattenedPhotos = useMemo(
    () => data?.pages.flatMap((page) => page?.data.photos) ?? [],
    [data?.pages]
  );

  return {
    photos: flattenedPhotos,
    isLoading: isFetchingNextPage || isFetching,
    onEndReached: loadMore,
  };
};
