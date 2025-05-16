import { createContext, useContext, useState } from "react";
interface ContextI {
  loading: () => {
    turnOn: () => void;
    turnOff: () => void;
  };
  isLoading: boolean;
}
const LoadingContext = createContext<ContextI>({} as ContextI);

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const loading = () => {
    const turnOn = () => {
      setIsLoading(true);
    };

    const turnOff = () => {
      setIsLoading(false);
    };

    return {
      turnOn,
      turnOff,
    };
  };
  return (
    <LoadingContext.Provider value={{ isLoading, loading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export function useLoading() {
  return useContext(LoadingContext);
}
