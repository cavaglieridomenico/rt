import productList from "../../utils/searchbleDataList";
import ProductTable from "./ProductTable/ProductTable";
import SearchBar from "./SearchBar/SearchBar";
import style from "./style.module.css";

const FilterableProductTable = () => {
  return (
    <div className={style.productTableContainer}>
      <SearchBar />
      <ProductTable productList={productList} />
    </div>
  );
};

export default FilterableProductTable;
