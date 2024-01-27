import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./product.api";

export const useGetProducts = () => {
  const productsData = useQuery({
    queryKey: ["products"], // put a unique key.
    queryFn: getProducts,
    select: (data) => {
      const products = data.slice(0, 3).map((item) => ({
        id: item._id,
        name: item.productName,
        description: item.productDescription,
        price: item.productPrice,
      }));

      return products;
    },
  });

  return productsData;
};
