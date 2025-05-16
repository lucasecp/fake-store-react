import { useModal } from "../context/Modal";
import ModalCreate from "./ModalCreate";
import ModalUpdate from "./ModalUpdate";

function Modal() {
  const { modalType, modalProps } = useModal();

  if (!modalType) return null;

  const modalComponents = {
    update: <ModalUpdate {...modalProps} />,
    create: <ModalCreate {...modalProps} />,
  };

  return (
    <div className=" bg-slate-900/40 fixed top-0 left-0  w-full h-full flex items-center justify-center">

      <div className=" absolute m-auto bg-slate-50 p-10 rounded-lg duration-300 transition">
       
        { modalComponents[modalType] || null}
      </div>
    </div>
  );
}

export default Modal;
