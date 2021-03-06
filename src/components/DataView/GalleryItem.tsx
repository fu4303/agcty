import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Item } from "@types/DataTypes";
import { ItemContext, useItemContext } from "src/contexts/ItemContext";

interface GalleryItemProps {
  item: Item;
  children: React.ReactNode;
}

function GalleryItem({ item, children }: GalleryItemProps) {
  return (
    <ItemContext.Provider value={item}>
      <Link href={item.link}>
        <a
          aria-label={item.title}
          className="flex flex-col overflow-hidden transition duration-100 ease-in-out bg-white border rounded-md shadow border-dark-400 group hover:border-dark-300 ring-4 ring-transparent focus:ring-beige-100"
        >
          {children}
        </a>
      </Link>
    </ItemContext.Provider>
  );
}

GalleryItem.Image = function GalleryItemImage({ children }) {
  return (
    <div className="relative overflow-hidden bg-transparent border-b border-dark-400 h-36">
      {children}
    </div>
  );
};

GalleryItem.Description = function GalleryItemContent() {
  const { title, description } = useItemContext();

  return (
    <div className="flex flex-col justify-between flex-1 group-hover:bg-geist-50">
      <div className="p-4">
        <div className="font-semibold text-dark-900 group-hover:text-dark-800">
          {title}
        </div>
        <div className="text-sm text-dark-700">{description}</div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center" />
      </div>
    </div>
  );
};

export default GalleryItem;
