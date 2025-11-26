import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { FOOTER_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

const Footer = async () => {
  const { data: content } = await sanityFetch({ query: FOOTER_QUERY });
  return (
    <footer className="relative">
      <div className="bg-[#42454A] absolute w-full h-[calc(100%-120px)] bottom-0 z-[-9]"></div>
      <div className="grid grid-cols-2">
        <div>
          {content?.image && (
            <Image
              src={urlFor(content?.image).url()}
              alt=""
              width={100}
              height={100}
              className="w-full!"
            />
          )}
        </div>
        <div>
          <div className="grid grid-cols-3 pt-[200px] pl-10">
            {content?.columns?.map((data, index: number) => (
              <div key={index}>
                <h3 className="mb-10 text-[#FBFBFB] font-bold text-[22px]">
                  {data.title}
                </h3>
                <ul>
                  {data?.links?.map((link, index: number) => (
                    <li
                      key={index}
                      className="mb-5 text-[16px] text-[#FBFBFB] font-light"
                    >
                      <Link href={link.url || ""}>{link.label}</Link>
                    </li>
                  ))}
                </ul>

                {index === 2 && (
                  <div className="flex gap-5 mt-10">
                    {" "}
                    {content?.socials &&
                      content?.socials.map((social, index: number) => (
                        <div
                          key={index}
                          className="w-10 h-10 bg-[#FAFAFC] flex items-center justify-center rounded-full"
                        >
                          <Link
                            href={social.url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {" "}
                            {social?.image && (
                              <Image
                                src={urlFor(social?.image).url()}
                                alt=""
                                className="w-auto"
                                width={10}
                                height={10}
                              />
                            )}
                          </Link>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        {content?.copyright && (
          <p className="text-center text-[#FBFBFB] pt-5 pb-6 font-light">
            {content?.copyright}
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
