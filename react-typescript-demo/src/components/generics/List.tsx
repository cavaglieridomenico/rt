type ListProps<T> = {
  items: T[];
  handleClick: (value: T) => void;
};

const List = <T extends string | number>({
  items,
  handleClick,
}: ListProps<T>) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div onClick={() => handleClick(item)} key={index}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default List;
