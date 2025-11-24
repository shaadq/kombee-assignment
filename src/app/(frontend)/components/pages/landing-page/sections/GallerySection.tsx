import { sanityFetch } from "@/sanity/lib/live";
import { GALLERY_QUERY } from "@/sanity/lib/queries";

const GallerySection = async () => {
  const { data: content } = await sanityFetch({ query: GALLERY_QUERY });

  return <div>GallerySection</div>;
};

export default GallerySection;
