import { ProductItem } from "../types/category";

export function useProduct() {
  // Replace with backend api call
  const products: ProductItem[] = [
    {
      images: [
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/436821/item/goods_00_436821.jpg?width=1600&impolicy=quality_75",
      ],
      title: "KIDS Dry Pique Short Sleeve Polo Shirt",
      price: 391,
      amount: 15,
      code: "COL00",
      description:
        "Feels silky and refreshing. Classic item that is simple and versatile.",
    },
    {
      images: [
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/444755/item/vngoods_66_444755.jpg?width=1600&impolicy=quality_75",
      ],
      title: "MEN Unsodo Short Sleeve Shirt",
      price: 784,
      amount: 10,
      code: "COL01",
      description:
        "Inspired by the iconic designs of Kamisaka Sekka. Relaxed cut for a laid-back style.",
    },
    {
      images: [
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/443161/item/goods_17_443161.jpg?width=1600&impolicy=quality_75",
      ],
      title: "MEN Dry-EX Marvel Crew Neck Short Sleeve T-Shirt",
      price: 489,
      amount: 10,
      code: "COL17",
      description:
        "Featuring a Spider-Man motif. With an iconic spider design on the back. <br/> The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.",
    },
    {
      images: [
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/437410/item/goods_66_437410.jpg?width=1600&impolicy=quality_75",
      ],
      title: "MEN Dry-EX Crew Neck Short Sleeve T-Shirt",
      price: 391,
      amount: 1,
      code: "COL03",
      description:
        "Dries sweat quickly, leaving you feeling fresh and comfortable. Fold back the cuffs to show off the accent color stripes.",
    },
    {
      images: [
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/425974/item/vngoods_54_425974.jpg?width=1600&impolicy=quality_75",
      ],
      title: "MEN AIRism Cotton Crew Neck Oversized T-Shirt",
      price: 391,
      amount: 3,
      code: "COL54",
      description:
        "Feel smooth, AIRism with cotton looks.A fashionable oversized design.",
    },
    {
      images: [
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/449458/item/vngoods_01_449458.jpg?width=1600&impolicy=quality_75",
      ],
      title: "MEN Striped Short Sleeve T-Shirt",
      price: 489,
      amount: 10,
      code: "COL010",
      description:
        "A relaxed T-shirt with bold stripes for a signature JWA style.",
    },
    {
      images: [
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/441596/item/goods_09_441596.jpg?width=1600&impolicy=quality_75",
      ],
      title: "MEN Dry Crew Neck Short Sleeve Color T-Shirt",
      price: 146,
      amount: 5,
      code: "COL09",
      description:
        "A versatile wardrobe essential. With a smooth, stay-fresh feel.",
    },
  ];

  const getProductById = (code: String): ProductItem | undefined => {
    return products.find((item) => item.code === code);
  };

  const getProducts = () => {
    return products;
  };

  return { products, getProductById, getProducts };
}
