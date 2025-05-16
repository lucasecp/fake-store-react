import { useEffect, useState } from "react";
import { useLoading } from "../../context/Loading";
import api from "../../services/api";
import { ProductI } from "../Home/types";
import Category from "./category/index";
import ChartProducts from "./Chart";

function Dashboard() {
  const [products, setProducts] = useState<ProductI[]>([]);
  const { loading } = useLoading();

  const showResults = async () => {
    try {
      loading().turnOn();
      const { data } = await api.get("/products");

      setProducts(data);
      return data;
    } catch (err) {
    } finally {
      loading().turnOff();
    }
  };

  useEffect(() => {
    showResults();
  }, []);

  const categories = [...new Set(products.map((val) => val.category))];

  const priceCategory = categories.reduce((ac, category) => {
    const categoryGroup = products.filter((val) => val.category === category);

    const categorySum = categoryGroup.reduce(
      (soma, item) => soma + Number(item.price),
      0
    );

    ac.push({
      price: "R$ " + (categorySum / categoryGroup.length).toFixed(2),
      title: category,
      priceNumber: (categorySum / categoryGroup.length).toFixed(2),
    });
    return ac;
  }, []);

  return (
    <>
      <div className="grid sm:grid-cols-[auto_auto]  grid-cols-[auto] gap-6 justify-center items-center my-9">
        <h2 className="sm:col-span-2 text-gray-800 text-center font-light text-3xl mb-4">
          Categories
        </h2>
        {priceCategory.map((val) => (
          <Category key={val.title} title={val.title} price={val.price} />
        ))}
      </div>
      <div className=" sm:p-30 p-3 flex items-center justify-center">
        <ChartProducts values={priceCategory} />
      </div>
    </>
  );
}

export default Dashboard;
