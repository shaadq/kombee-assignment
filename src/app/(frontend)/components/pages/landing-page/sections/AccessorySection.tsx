import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { ACCESSORIES_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import tick from "../../../assets/images/tick.svg";
import AccessoryButton from "./AccessoryButton";

const AccessorySection = async () => {
  const { data: content } = await sanityFetch({ query: ACCESSORIES_QUERY });
  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-[#42454A] text-center font-bold text-4xl mb-6">
          {content?.title}
        </h2>
        <p className="text-center font-normal text-[#42454A] mb-10">
          {content?.subtitle}
        </p>

        <div className="grid grid-cols-1">
          {content?.items &&
            content?.items.map((item, index: number) => {
              const isOdd = index % 2 === 1;

              return (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-10 items-center"
                >
                  {/* LEFT COLUMN */}
                  {isOdd ? (
                    // image on left for odd index
                    <div>
                      {item?.image && (
                        <Image
                          src={urlFor(item.image).url()}
                          alt=""
                          className="w-full"
                          width={100}
                          height={100}
                        />
                      )}
                    </div>
                  ) : (
                    // text on left for even index
                    <div className="flex">
                      <div className="m-auto">
                        <h3 className="mb-12 text-[#42454A] font-semibold text-3xl">
                          {item?.title}
                        </h3>

                        <ul>
                          {item?.points?.map((point, pIndex: number) => (
                            <li key={pIndex} className="mb-5">
                              <div className="flex items-center gap-3">
                                <Image
                                  src={tick}
                                  width={30}
                                  height={20}
                                  alt=""
                                />
                                {point}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* RIGHT COLUMN */}
                  {!isOdd ? (
                    // image on right for even index
                    <div>
                      {item?.image && (
                        <Image
                          src={urlFor(item.image).url()}
                          alt=""
                          className="w-full"
                          width={100}
                          height={100}
                        />
                      )}
                    </div>
                  ) : (
                    // text on right for odd index
                    <div className="flex">
                      <div className="m-auto">
                        <h3 className="mb-12 text-[#42454A] font-semibold text-3xl">
                          {item?.title}
                        </h3>

                        <ul>
                          {item?.points &&
                            item?.points.map((point, pIndex: number) => (
                              <li key={pIndex} className="mb-5">
                                <div className="flex items-center gap-3">
                                  <Image
                                    src={tick}
                                    width={30}
                                    height={20}
                                    alt=""
                                  />
                                  {point}
                                </div>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>

        <div className="flex justify-center mt-20">
          <AccessoryButton
            buttonText={content?.buttonText || "See more"}
            buttonUrl={content?.buttonUrl || ""}
          />
        </div>
      </div>
    </section>
  );
};

export default AccessorySection;
