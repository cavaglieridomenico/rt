import style from "../style.module.css";

type ProductCategoryRowProps = {
  categoryName: string;
};

const ProductCategoryRow = ({ categoryName }: ProductCategoryRowProps) => {
  return (
    <div className={style.categoryName}>
      <p>{categoryName}</p>
    </div>
  );
};

export default ProductCategoryRow;
