import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";
import style from "../style.module.css";
import productList from "../../../utils/searchbleDataList";
import { Product } from "../../../utils/searchbleDataList";

const ProductTable = () => {
  const rows: any[] = [];
  let lastCategory: any = null;

  productList.forEach((item: Product) => {
    if (lastCategory !== item.category) {
      rows.push(
        <div>
          <ProductCategoryRow categoryName={item.category} />
          <ProductRow {...item} />
        </div>
      );
      lastCategory = item.category;
      return;
    }
    rows.push(<ProductRow {...item} />);
  });

  return (
    <div>
      <div className={style.tableLabel}>
        <p>Name</p>
        <p>Price</p>
      </div>
      {rows}
      {/* {productList.map((item: Product, index: number) => {
        return (
          <div key={index}>
            <ProductCategoryRow categoryName={item.category} />
            <div>
              <ProductRow {...item} />
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default ProductTable;
