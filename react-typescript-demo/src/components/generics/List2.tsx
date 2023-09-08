type ListProps<T> = {
  items: T[];
  handleClick: (value: T) => void;
};

const List2 = <T extends { name: string }>({
  items,
  handleClick,
}: ListProps<T>) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div onClick={() => handleClick(item)} key={index}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default List2;
