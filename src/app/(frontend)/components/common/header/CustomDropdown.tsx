"use client";

import { ChevronDownIcon } from "@sanity/icons";
import { Dropdown } from "antd";
import Link from "next/link";

interface DropdownChild {
  url?: string;
  label: string;
}

interface CustomDropdownProps {
  item: {
    label: string;
    url?: string;
    children?: DropdownChild[];
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
      {/* <a onClick={(e) => e.preventDefault()}> */}
      <div className="flex items-center gap-1 uppercase">
        {item.label}
        <ChevronDownIcon className="text-2xl" />
      </div>
      {/* </a> */}
    </Dropdown>
  );
};

export default CustomDropdown;
