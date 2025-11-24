import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { HERO_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

const HeroSection = async () => {
  const { data: content } = await sanityFetch({ query: HERO_QUERY });
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-2 mb-6">
          <div className="pt-6">
            <h1 className="text-7xl text-[#42454A] uppercase leading-[1.1] mb-3">
              <span className="font-light block">{content?.title}</span>
              <span className="font-bold block">{content?.titleBold}</span>
            </h1>
            <hr className="text-[#42454A] my-6 w-80" />
            <p className="text-[#42454A] font-light text-2xl">
              {content?.subtitle}
            </p>
          </div>
          <div>
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
        </div>
        <div className="grid grid-cols-6">
          {content?.stats?.map((stat, index) => (
            <div
              key={index}
              className="px-6 py-4 bg-white shadow-lg rounded-lg text-center w-fit m-auto"
            >
              <h2 className="mb-3 text-3xl font-bold text-[#42454A]">
                {stat?.value ?? ""}{" "}
                <span className="text-sm">{stat?.unit ?? ""}</span>
              </h2>
              <p className="font-light text-sm">{stat?.label ?? ""}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
