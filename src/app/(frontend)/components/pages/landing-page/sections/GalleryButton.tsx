"use client";

import { useRouter } from "next/navigation";

const GalleryButton = ({
  buttonText,
  buttonUrl,
}: {
  buttonText: string | null;
  buttonUrl: string | null;
}) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/${buttonUrl}`)}
      className="text-[#42454A] border-2 border-[#42454A] rounded-md py-5 px-15 font-bold cursor-pointer w-full mb-5 text-xl"
    >
      {buttonText}
    </button>
  );
};

export default GalleryButton;
