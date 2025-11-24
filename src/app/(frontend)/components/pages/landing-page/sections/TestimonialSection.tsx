import { sanityFetch } from "@/sanity/lib/live";
import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries";

const TestimonialSection = async () => {
  const { data: content } = await sanityFetch({ query: TESTIMONIALS_QUERY });
  return <div>TestimonialSection</div>;
};

export default TestimonialSection;
