import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { COLORS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

const ColorSection = async () => {
  const { data: content } = await sanityFetch({ query: COLORS_QUERY });
  return (
    <section className="py-10 pb-20">
      <div className="container">
        <h2 className="text-[#42454A] text-center font-bold text-4xl mb-6">
          {content?.title}
        </h2>
        <p className="text-center font-normal text-[#42454A] mb-10">
          {content?.subtitle}
        </p>

        {content?.image && (
          <Image
            src={urlFor(content?.image).url()}
            alt=""
            width={100}
            height={100}
            className="w-full rounded-xl"
          />
        )}

        <div className="grid grid-cols-4 gap-20 mt-[-150px] px-10">
          {content?.colors?.map((item, index: number) => (
            <div key={index} className="relative">
              <h3 className="text-7xl font-bold opacity-50 text-white absolute z-0 pointer-events-none right-2 bottom-2">
                {item?.label}
              </h3>
              {item?.image && (
                <Image
                  src={urlFor(item?.image).url()}
                  alt=""
                  width={100}
                  height={100}
                  className="w-full"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ColorSection;
