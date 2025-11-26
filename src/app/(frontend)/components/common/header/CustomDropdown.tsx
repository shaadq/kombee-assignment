"use client";

import { ChevronDownIcon } from "@sanity/icons";
import { Dropdown } from "antd";
import Link from "next/link";

interface DropdownChild {
  url: string | null;
  label: string | null;
}

interface CustomDropdownProps {
  item: {
    label: string | null;
    url: string | null;
    children: DropdownChild[] | null;
  };
}

const CustomDropdown = ({ item }: CustomDropdownProps) => {
  return (
    <Dropdown
      menu={{
        items: item.children?.map((child: DropdownChild, index: number) => ({
          key: index,
          label: <Link href={child.url || ""}>{child.label}</Link>,
        })),
      }}
    >
      <div className="flex items-center uppercase cursor-pointer">
        {item.label}
        <ChevronDownIcon className="text-2xl" />
      </div>
    </Dropdown>
  );
};

export default CustomDropdown;
