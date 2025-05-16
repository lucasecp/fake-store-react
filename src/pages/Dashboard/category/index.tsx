import Button from "../../../components/Button";
import { useModal } from "../../../context/Modal";
import { ProductI } from "../types";

interface CategoryProps {

title: string
price: string
}
const Category: React.FC<CategoryProps> = ({title, price }) =>{
  const {openModal} = useModal()

  return <div className=" shadow-sm rounded-2xl sm:p-5 p-2 flex flex-col gap-9 sm:w-100 w-65">
   <h3 className="text-gray-800 text-center font-light text-2xl">{title}</h3>
   <div className="self-end text-rose-500  text-center font-bold text-sm flex flex-col">
   <p className="text-gray-600">Avarege Price</p>
   <p className="">{price}</p>

   </div>
  </div>;
}

export default Category;
