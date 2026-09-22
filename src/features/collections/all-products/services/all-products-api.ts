import { allProducts } from "../data/all-products";
import { collectionHero } from "../data/collection-hero";
import { CollectionsPageData } from "../types/all-product";

export function getAllProductAsync(): Promise<CollectionsPageData> {
  return Promise.resolve({
    hero: collectionHero,
    products: allProducts,
  });
}
