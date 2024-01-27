export const getProducts = async () => {
  return await fetch("https://device-market-server.vercel.app/products").then(
    (res) => res.json()
  );
};
