import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import style from "../style.module.css";

const ProductTable = () => {
  return (
    <div>
      <div className={style.tableLabel}>
        <p>Name</p>
        <p>Price</p>
      </div>
      <ProductCategoryRow />
      <div>
        <ProductRow />
      </div>
    </div>
  );
};

export default ProductTable;
