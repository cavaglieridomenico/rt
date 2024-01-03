import { useState } from "react";
import productList from "../../utils/searchbleDataList";
import ProductTable from "./ProductTable/ProductTable";
import SearchBar from "./SearchBar/SearchBar";
import style from "./style.module.css";

const FilterableProductTable = () => {
  const [filterText, setFilterText] = useState<string>("");
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  return (
    <div className={style.productTableContainer}>
      <SearchBar
        onFilterTextChange={(event) => setFilterText(event.target.value)}
        filterText={filterText}
        onInStockOnlyChange={(event) => setInStockOnly(event.target.checked)}
        inStockOnly={inStockOnly}
      />
      <ProductTable
        productList={productList}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
};

export default FilterableProductTable;
