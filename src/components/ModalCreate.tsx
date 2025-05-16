import React, { useState } from "react";
import { useLoading } from "../context/Loading";
import { useModal } from "../context/Modal";
import { ProductI } from "../pages/Home/types";
import api from "../services/api";
import FormProduct from "./FormProduct";

interface ModalProps {
  getProducts?: (value: ProductI) => void;
}

const ModalCreate: React.FC<ModalProps> = ({ getProducts }) => {
  const [filters, setFilters] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });
  const { loading } = useLoading();

  const { closeModal } = useModal();

  const onCreate = async (e: Event) => {
    
    e.preventDefault();
    if(Object.values(filters).filter(val=>val).length === 0){
      return 
    }
    try {
      loading().turnOn();
      const { data } = await api.post(`/products/`, filters);
      getProducts && getProducts(data);

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
      onSubmit={onCreate}
      action="create"
    />
  );
};

export default ModalCreate;
