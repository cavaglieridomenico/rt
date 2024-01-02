import { Product } from "../../../utils/searchbleDataList";
import style from "../style.module.css";

const ProductRow = (prop: Product) => {
  const productName = prop.stocked ? (
    prop.name
  ) : (
    <span style={{ color: "red" }}>{prop.name}</span>
  );
  return (
    <div className={style.productRow}>
      <p>{productName}</p>
      <p>{prop.price}</p>
    </div>
  );
};

export default ProductRow;
