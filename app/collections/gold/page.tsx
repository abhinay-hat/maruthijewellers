import CollectionPage from "@/components/CollectionPage";
import { goldCollection } from "@/lib/collections-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold Jewellery Collections | Maruthi Jewellers",
  description:
    "Explore our exquisite gold jewellery collection - rings, chains, bracelets, and necklaces crafted with 100% hallmarked gold.",
};

export default function GoldCollectionPage() {
  return <CollectionPage data={goldCollection} />;
}
