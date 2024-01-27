import axios from "axios";

export const getProducts = async () => {
  const res = await axios("https://device-market-server.vercel.app/products");
  return res.data;
};

// export const getProducts = async () => {
//   const res = await fetch(
//     "https://device-market-server.vercel.app/products"
//   ).then((res) => res.json());

//   if (!res.success) {
//     throw new Error("Some went wrong!!");
//   }
//   return res;
// };
