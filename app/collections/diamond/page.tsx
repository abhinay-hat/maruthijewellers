import CollectionPage from "@/components/CollectionPage";
import { diamondCollection } from "@/lib/collections-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamond Jewellery Collections | Maruthi Jewellers",
  description:
    "Explore our stunning diamond jewellery collection - rings, chains, bracelets, and necklaces with certified diamonds.",
};

export default function DiamondCollectionPage() {
  return <CollectionPage data={diamondCollection} />;
}
