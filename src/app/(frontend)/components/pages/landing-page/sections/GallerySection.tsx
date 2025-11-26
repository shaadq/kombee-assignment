import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { GALLERY_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import React from "react";
import GalleryButton from "./GalleryButton";

const GallerySection = async () => {
  const { data: content } = await sanityFetch({ query: GALLERY_QUERY });

  const images = content?.images ?? [];
  const points = content?.points ?? [];

  const tiles = [
    images[0] ?? null,
    images[1] ?? null,
    <div key="buttons" className="">
      {points.map(
        (p: { text: string | null; url: string | null }, i: number) => (
          <GalleryButton
            key={i}
            buttonText={p?.text || "See more"}
            buttonUrl={p?.url || "#"}
          />
        )
      )}
    </div>,
    images[2] ?? null,
  ].filter(Boolean);

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="text-[#42454A] text-center font-bold text-4xl mb-6">
          {content?.title}
        </h2>
        <p className="text-center font-normal text-[#42454A] mb-10">
          {content?.subtitle}
        </p>

        <div className="grid grid-cols-2 gap-15">
          {tiles.map((tile, idx) => {
            // if tile is a React element (Buttons), render as-is
            if (React.isValidElement(tile)) {
              return (
                <div
                  key={`tile-${idx}`}
                  className="flex items-start justify-center"
                >
                  {tile}
                </div>
              );
            }

            // otherwise it's an image object { title, image }
            const img = tile as { title?: string | null; image: string | null };

            return (
              <div key={`tile-${idx}`} className="relative overflow-hidden">
                {img?.title && (
                  <h3 className="absolute top-4 left-4 font-bold text-[#42454A] text-2xl z-10">
                    {img.title}
                  </h3>
                )}

                {img?.image && (
                  <Image
                    src={urlFor(img.image).url()}
                    alt={img?.title ?? ""}
                    className="w-full object-cover"
                    width={100}
                    height={100}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
