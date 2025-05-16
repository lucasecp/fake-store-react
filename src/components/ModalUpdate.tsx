import React, { useEffect, useState } from "react";
import { useLoading } from "../context/Loading";
import { useModal } from "../context/Modal";
import api from "../services/api";
import FormProduct from "./FormProduct";

interface ModalProps {
  product?: any;
  getProducts?: any;
}

const ModalUpdate: React.FC<ModalProps> = ({ product, getProducts }) => {
  const { closeModal } = useModal();
  const [filters, setFilters] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });
  const { loading } = useLoading();
  useEffect(() => {
    setFilters({
      title: product.title || "",
      description: product.description || "",
      image: product.image || "",
      price: product.price || "",
      category: product.category || "",
    });
    return () => {};
  }, [product]);

  const onUpdate = async (e: Event) => {
    e.preventDefault();
    
    if (Object.values(filters).filter((val) => val).length === 0) {
      return;
    }

    try {
      loading().turnOn();
      const { data } = await api.put(`/products/${product.id}`, filters);
      await getProducts(data);

      closeModal();

      return data;
    } catch (err) {
      console.log(err);
    } finally {
      loading().turnOff();
    }
  };

  return (
    <FormProduct
      setFilters={setFilters}
      filters={filters}
      onSubmit={onUpdate}
      action="update"
    />
  );
};

export default ModalUpdate;
