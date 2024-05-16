import Api from "_/lib/axios";
import { Photos } from "_/models/photos";

export default {
  async getCuratedPhotos({ page }: { page: number }) {
    try {
      return await Api.get<Photos>(`/curated?page=${page}&per_page=20`);
    } catch (error) {
      console.error(error);
    }
  },
};
