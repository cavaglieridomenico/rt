import style from "../style.module.css";

type SearchBarProps = {
  onFilterTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterText: string;
  onInStockOnlyChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inStockOnly: boolean;
};

const SearchBar = ({
  onFilterTextChange,
  filterText,
  onInStockOnlyChange,
  inStockOnly,
}: SearchBarProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        id="search-bar"
        value={filterText}
        onChange={(event) => onFilterTextChange(event)}
      />
      <div className={style.checkboxStock}>
        <input
          type="checkbox"
          name="only-in-stock"
          id="only-in-stock"
          className={style.onlyInStock}
          onChange={(event) => onInStockOnlyChange(event)}
          checked={inStockOnly}
        />
        <label htmlFor="only-in-stock">Only shows products in stock</label>
      </div>
    </div>
  );
};

export default SearchBar;
