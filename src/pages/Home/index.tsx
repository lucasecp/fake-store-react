import { useEffect, useState } from "react";
import { useLoading } from "../../context/Loading";
import api from "../../services/api";
import Filters from "./Filters";
import Table from "./Table";
import { FilterI, ProductI } from "./types";

function Home() {
  const [filters, setFilters] = useState<FilterI>({
    category: "",
    name: "",
  });
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

  // criando e editando os produtos estaticamente ao clicar nos botões update e create
  const getStaticProducts = (updatedProduct: ProductI) => {
    const creation =
      products.filter((val) => val.id === updatedProduct.id).length === 0;
    if (creation) {
      const productMapped = products;

      productMapped.unshift(updatedProduct);

      setProducts(productMapped);
      return;
    }

    //removendo o registro antigo
    const updating = products.filter((val) => updatedProduct.id !== val.id);
    updating.unshift(updatedProduct);
    setProducts(updating);
  };

  const getByNameCategory = (e: Event) =>{
    e.preventDefault()
    const productSearch = products.filter(val => val.title.toLowerCase().includes(filters.name.toLowerCase()) || val.category.toLowerCase().includes(filters.category.toLowerCase()))
    setProducts(productSearch)
  }

  return (
    <>
      <Filters
        filters={filters}
        setFilters={setFilters}
        onSubmit={getByNameCategory}
        getProducts={getStaticProducts}
      />
      <Table
        products={products}
        getProducts={getStaticProducts}
        setProducts={setProducts}
      />
    </>
  );
}

export default Home;
