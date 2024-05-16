import * as z from "zod";

export const SrcSchema = z.object({
  original: z.string(),
  large2x: z.string(),
  large: z.string(),
  medium: z.string(),
  small: z.string(),
  portrait: z.string(),
  landscape: z.string(),
  tiny: z.string(),
});
export type Src = z.infer<typeof SrcSchema>;

export const PhotoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  photographer: z.string(),
  photographer_url: z.string(),
  photographer_id: z.number(),
  avg_color: z.string(),
  src: SrcSchema,
  liked: z.boolean(),
  alt: z.string(),
});
export type Photo = z.infer<typeof PhotoSchema>;

export const PhotosSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  photos: z.array(PhotoSchema),
  next_page: z.string(),
});
export type Photos = z.infer<typeof PhotosSchema>;
