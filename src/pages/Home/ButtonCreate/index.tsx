import Button from "../../../components/Button";
import { useModal } from "../../../context/Modal";
import { ProductI } from "../types";

interface ButtonCreateProps {

  getProducts: (value: ProductI) => void;
}
const ButtonCreate: React.FC<ButtonCreateProps> = ({getProducts }) =>{
  const {openModal} = useModal()

  return <Button type='button' onClick={() => openModal("create", { getProducts })}>Create New Product</Button>;
}

export default ButtonCreate;
