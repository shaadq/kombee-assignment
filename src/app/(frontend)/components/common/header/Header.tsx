import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { HEADER_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomDropdown from "./CustomDropdown";

const Header = async () => {
  const { data: content } = await sanityFetch({ query: HEADER_QUERY });
  console.log(content);

  return (
    <header className="h-[100px] shadow-sm">
      <div className="container flex items-center justify-between h-full">
        {content?.logo && (
          <Image
            src={urlFor(content.logo).url()}
            alt="Logo"
            width={100}
            height={100}
          />
        )}

        <div className="flex items-center gap-10">
          {content?.navItems?.map((item, index: number) => (
            <React.Fragment key={index}>
              {item.type === "dropdown" ? (
                <CustomDropdown item={item} />
              ) : (
                <Link
                  href={item?.url || ""}
                  key={index}
                  className="uppercase text-[#42454A]"
                >
                  {item?.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex gap-10">
          {content?.button1Text && content?.button1Url && (
            <Link
              href={content.button1Url}
              className="text-[#42454A]! uppercase flex items-center"
            >
              {content.button1Text}
            </Link>
          )}

          {content?.button2Text && content?.button2Url && (
            <Link
              href={content.button2Url}
              className="px-[26px] py-[14px] text-white! bg-[#42454A]! uppercase rounded-[4px] cursor-pointer shadow-md"
            >
              {content.button2Text}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
