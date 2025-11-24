import { sanityFetch } from "@/sanity/lib/live";
import { ACCESSORIES_QUERY } from "@/sanity/lib/queries";

const AccessorySection = async () => {
  const { data: content } = await sanityFetch({ query: ACCESSORIES_QUERY });
  return <div>AccessorySection</div>;
};

export default AccessorySection;
