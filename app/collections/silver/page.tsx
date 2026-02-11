import CollectionPage from "@/components/CollectionPage";
import { silverCollection } from "@/lib/collections-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Silver Jewellery Collections | Maruthi Jewellers",
  description:
    "Explore our premium silver jewellery collection - rings, pooja items, bracelets, and silver idols crafted with purity.",
};

export default function SilverCollectionPage() {
  return <CollectionPage data={silverCollection} />;
}
