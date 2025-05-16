import React, { SetStateAction, useEffect, useState } from "react";
import { ProductI } from "../pages/Home/types";
import Input from "./Input";
import Textarea from "./Textarea";
import api from "../services/api";
import Button from "./Button";
import { useModal } from "../context/Modal";

interface FormProductProps {
  filters:{
    title: string
    description:  string
    image:  string
    price:  string
    category: string
  }
  setFilters: React.Dispatch<SetStateAction<{ title: string; description: string; image: string; price: string; category: string; }>>
  action: 'create' | 'update'
  onSubmit: (e: Event)=> void
}

const FormProduct: React.FC<FormProductProps> = ({ setFilters, filters, onSubmit, action }) => {
  const {closeModal} = useModal()
 
  return (
    <div className='flex flex-col gap-9'>
      <h2 className='text-gray-950 text-center text-2xl'>{ action ==='create'? 'Create': 'Update'} Product</h2>
    <form onSubmit={(e: any) => onSubmit(e)}  className=" grid sm:grid-cols-2 sm:gap-6 gap-3 items-end">
      <Input
        value={filters.title}
        onChange={(value: string) => setFilters({ ...filters, title: value })}
        placeholder="Name"
        label="Name"
      />
      <Input
        value={filters.image}
        onChange={(value: string) =>
          setFilters({ ...filters, image: value })
        }
        placeholder="Image"
        label="Image"
      />
      <Input
        value={filters.price}
        onChange={(value: string) =>
          setFilters({ ...filters, price: value })
        }
        placeholder="Price"
        label="Price"
        type='number'
      />
      <Input
        value={filters.category}
        onChange={(value: string) =>
          setFilters({ ...filters, category: value })
        }
        placeholder="Category"
        label="Category"
      />
      <Textarea
      className='sm:col-span-2 '
        value={filters.description}
        onChange={(value: string) =>
          setFilters({ ...filters, description: value })
        }
        placeholder="description"
        label="Description"
      />
      <Button variation="secondary" onClick={()=> closeModal()}>Close</Button>
      <Button type="submit">{action ==='update' ? 'Update': 'Create'}</Button>
    </form>
    </div>
  );
};

export default FormProduct;
