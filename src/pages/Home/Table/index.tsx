import { SetStateAction, useState } from "react";

import { ProductI } from "../types";

import Button from "../../../components/Button";
import { useLoading } from "../../../context/Loading";
import { useModal } from "../../../context/Modal";
import api from "../../../services/api";
interface TableProps {
  products: ProductI[];
  getProducts: (value: ProductI) => void;
  setProducts: React.Dispatch<SetStateAction<ProductI[]>>;
}

function Table({ products, getProducts, setProducts }: TableProps) {
  const [showModal, setShowModal] = useState(false);
  const { openModal } = useModal();
  const { loading } = useLoading();


  const deleteProduct = async (id: number) => {
    try {
      loading().turnOn()
      
      await api.delete(`/products/${id}`);
      const updatedProduct = products.filter((val) => val.id !== id);
      setProducts(updatedProduct);
    } catch (err) {}
    finally{
      loading().turnOff()

    }
  };
  return (
    <>
      <div className="overflow-scroll sm:overflow-auto px-5">
        <table className="w-full overflow-scroll">
          <thead className="bg-blue-900">
            <tr className="text-gray-100  border-b-2 border-gray-200 ">
              <th className="py-5">Name</th>
              <th className="py-5">Image</th>
              <th className="py-5">Category</th>
              <th className="py-5">Price</th>
              <th className="py-5">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr className="text-gray-500 ">
                <td className="text-gray-500 p-3 ">{product.title}</td>
                <td className="text-gray-500 p-3 ">{product.image}</td>
                <td className="text-gray-500 p-3 ">{product.category}</td>
                <td className="text-gray-500 p-3 ">R${product.price}</td>
                <td className="text-gray-500 p-3 ">
                  <div className="flex gap-2">
                    <Button
                      small
                      onClick={() =>
                        openModal("update", { product, getProducts })
                      }
                    >
                      Update
                    </Button>
                    <Button
                      small
                      variation="secondary"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
