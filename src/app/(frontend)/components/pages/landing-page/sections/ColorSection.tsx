import { sanityFetch } from "@/sanity/lib/live";
import { COLORS_QUERY } from "@/sanity/lib/queries";

const ColorSection = async () => {
  const { data: content } = await sanityFetch({ query: COLORS_QUERY });
  return <div>ColorSection</div>;
};

export default ColorSection;
