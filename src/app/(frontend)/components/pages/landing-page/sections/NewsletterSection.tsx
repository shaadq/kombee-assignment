import { sanityFetch } from "@/sanity/lib/live";
import { NEWSLETTER_QUERY } from "@/sanity/lib/queries";

const NewsletterSection = async () => {
  const { data: content } = await sanityFetch({ query: NEWSLETTER_QUERY });

  console.log(content);
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-[#42454A] text-center font-bold text-4xl mb-6">
          {content?.title}
        </h2>
        <p className="text-center font-normal text-[#42454A] mb-10">
          {content?.description}
        </p>

        <div className="flex justify-center gap-3">
          <input
            type="text"
            className="bg-[#F5F5F5] rounded-[10px] px-[20px] py-[15px] text-sm w-[300px] focus:outline-none"
            placeholder="Enter your email"
          />
          <button className="px-[26px] py-[14px] text-white bg-[#42454A] rounded-[4px] cursor-pointer shadow-md rounded-[10px]">
            {content?.buttonLabel}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
