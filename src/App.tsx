import { ModalProvider } from "./context/Modal";

import "./App.css";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Modal from "./components/ModalContainer";
import { LoadingProvider } from "./context/Loading";
import StoreRoutes from "./routes";

function App() {
  return (
    <>
      <LoadingProvider>
        <ModalProvider>
          <Header />
          <StoreRoutes />
          <Modal />
          <Loading />
        </ModalProvider>
      </LoadingProvider>
    </>
  );
}

export default App;
