import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { PRODUCT_INFO_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import tick from "../../../assets/images/tick.svg";

const ProductInfoSection = async () => {
  const { data: content } = await sanityFetch({ query: PRODUCT_INFO_QUERY });
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-[#42454A] text-center font-bold text-4xl mb-6">
          {content?.title}
        </h2>
        <p className="text-center font-normal text-[#42454A]">
          {content?.subtitle}
        </p>

        <div className="grid grid-cols-2">
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
          <div className="flex">
            <ul className="m-auto">
              {content?.points?.map((point: string, index: number) => (
                <li key={index} className="mb-7 text-[#42454A]">
                  <div className="flex gap-3">
                    <Image src={tick} alt="" width={30} height={20} />{" "}
                    <div className="text-xl">{point}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfoSection;
