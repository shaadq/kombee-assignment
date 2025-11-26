import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { EFFICIENCY_MOTOR_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

const EfficiencySection = async () => {
  const { data: content } = await sanityFetch({
    query: EFFICIENCY_MOTOR_QUERY,
  });
  return (
    <section className="py-10 pb-0">
      <div className="container">
        <h2 className="text-[#42454A] text-center font-bold text-4xl mb-6">
          {content?.title}
        </h2>
        <p className="text-center font-normal text-[#42454A]">
          {content?.subtitle}
        </p>

        {content?.image && (
          <Image
            src={urlFor(content?.image).url()}
            alt=""
            width={100}
            height={100}
            className="w-full"
          />
        )}
      </div>
    </section>
  );
};

export default EfficiencySection;
