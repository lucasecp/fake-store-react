import Button from "../../../components/Button";
import Input from "../../../components/Input";
import ButtonCreate from "../ButtonCreate";
import { FilterI, ProductI } from "../types";

interface FilterProps {
  filters: FilterI;
  setFilters: React.Dispatch<React.SetStateAction<FilterI>>;
  onSubmit: (e: Event) => void;
  getProducts: (product: ProductI) => void;
}
const  Filters: React.FC<FilterProps> =({ filters, setFilters, onSubmit, getProducts }) =>{
  return (
    <div className=" py-5 px-5 sm:px-44 rounded-t-lg flex flex-col sm:flex-row gap-6 justify-between items-end">
    
    <form onSubmit={onSubmit} className=" w-full sm:w-auto flex flex-col sm:flex-row gap-6 items-end">
      <Input
        value={filters.name}
        onChange={(value: string) => setFilters({ ...filters, name: value })}
        placeholder="Name"
        label="Name"
        />
      <Input
        value={filters.category}
        onChange={(value: string) =>
          setFilters({ ...filters, category: value })
        }
        placeholder="Category"
        label="Category"
        />
      <Button type="submit">Search</Button>
    </form>
    <ButtonCreate getProducts={getProducts}/>
        </div>
  );
}

export default Filters;
