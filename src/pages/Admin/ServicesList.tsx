import { getProducts } from "@/api/admin/product/product.api";
import { useQuery } from "@tanstack/react-query";

const ServicesList = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/api/v1/services")
  //       .then((res) => res.json())
  //       .then((data) => setData(data.data));
  //   }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"], // put a unique key.
    queryFn: getProducts,
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  console.log(data);

  return (
    <div>
      {data?.map((item) => (
        <h4>{item.productName}</h4>
      ))}
    </div>
  );
};

export default ServicesList;
