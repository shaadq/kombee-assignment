"use client";

import { useRouter } from "next/navigation";

const AccessoryButton = ({
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
      className="text-[#42454A] border-2 border-[#42454A] rounded-md py-5 px-15 font-medium cursor-pointer"
    >
      {buttonText}
    </button>
  );
};

export default AccessoryButton;
