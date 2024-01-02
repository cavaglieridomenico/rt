import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import style from "../style.module.css";
// import productList from "../../../utils/searchbleDataList";
import { Product } from "../../../utils/searchbleDataList";

type ProductTableProps = {
  productList: Product[];
};

const ProductTable = ({ productList }: ProductTableProps) => {
  const rows: any[] = [];
  let lastCategory: any = null;

  productList.forEach((item: Product) => {
    if (lastCategory !== item.category) {
      rows.push(
        <div>
          <ProductCategoryRow categoryName={item.category} />
        </div>
      );
    }
    rows.push(<ProductRow {...item} />);
    lastCategory = item.category;
  });

  return (
    <div>
      <div className={style.tableLabel}>
        <p>Name</p>
        <p>Price</p>
      </div>
      {rows}
    </div>
  );
};

export default ProductTable;
