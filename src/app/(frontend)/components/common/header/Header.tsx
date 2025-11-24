import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { HEADER_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";

const Header = async () => {
  const { data: content } = await sanityFetch({ query: HEADER_QUERY });
  return (
    <header className="h-[100px] shadow-sm">
      <div className="container flex items-center justify-between h-full">
        <Image
          src={urlFor(content?.logo).url()}
          alt="Logo"
          width={100}
          height={100}
        />

        <div className="flex items-center gap-10">
          {content?.navItems?.map((item, index) => (
            <Link
              href={item.url}
              key={index}
              className="uppercase text-[#42454A]"
            >
              {item?.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-10">
          <button className="text-[#42454A] uppercase">Log in</button>
          <button className="px-[26px] py-[14px] text-white bg-[#42454A] uppercase rounded-[4px] cursor-pointer shadow-md">
            sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
