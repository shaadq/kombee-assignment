import { sanityFetch } from "@/sanity/lib/live";
import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import TestimonialSwiper from "./TestimonialSwiper";

const TestimonialSection = async () => {
  const { data: content } = await sanityFetch({ query: TESTIMONIALS_QUERY });
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-[#42454A] text-center font-bold text-4xl mb-6">
          {content?.title}
        </h2>

        {/* @ts-expect-error: Sanity items don't match strict Testimonial type */}
        <TestimonialSwiper testimonials={content?.items || []} />
      </div>
    </section>
  );
};

export default TestimonialSection;
