import style from "../style.module.css";

const SearchBar = () => {
  return (
    <div>
      <input type="text" placeholder="Search..." id="search-bar" />
      <div className={style.checkboxStock}>
        <input
          type="checkbox"
          name="only-in-stock"
          id="only-in-stock"
          className={style.onlyInStock}
        />
        <label htmlFor="only-in-stock">Only shows products in stock</label>
      </div>
    </div>
  );
};

export default SearchBar;
