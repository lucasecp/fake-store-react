import { useLoading } from "../context/Loading";
import { useModal } from "../context/Modal";
import ModalCreate from "./ModalCreate";
import ModalUpdate from "./ModalUpdate";

function Loading() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;


  return (
    <div className=" bg-slate-900/20 fixed top-0 left-0  w-full h-full flex items-center justify-center">

    <p className="text-2xl text-gray-900 p-9 bg-gray-50 rounded-2xl">Loading...</p>
    </div>
  );
}

export default Loading;
