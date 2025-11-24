import { sanityFetch } from "@/sanity/lib/live";
import { NEWSLETTER_QUERY } from "@/sanity/lib/queries";

const NewsletterSection = async () => {
  const { data: content } = await sanityFetch({ query: NEWSLETTER_QUERY });
  return <div>NewsletterSection</div>;
};

export default NewsletterSection;
