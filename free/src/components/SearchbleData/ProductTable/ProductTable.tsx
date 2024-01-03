import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import style from "../style.module.css";
// import productList from "../../../utils/searchbleDataList";
import { Product } from "../../../utils/searchbleDataList";

type ProductTableProps = {
  productList: Product[];
  filterText: string;
  inStockOnly: boolean;
};

const ProductTable = ({
  productList,
  filterText,
  inStockOnly,
}: ProductTableProps) => {
  const rows: any[] = [];
  let lastCategory: any = null;

  productList.forEach((product: Product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (lastCategory !== product.category) {
      rows.push(
        <div>
          <ProductCategoryRow categoryName={product.category} />
        </div>
      );
    }
    rows.push(<ProductRow {...product} />);
    lastCategory = product.category;
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
