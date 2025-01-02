type UsersLocalButtonsProps = {
  handleUserLocal: () => void;
  removeUserLocal: () => void;
  showUserLocal: boolean;
  children: JSX.Element | JSX.Element[];
};

const UsersLocalButtons = ({
  handleUserLocal,
  removeUserLocal,
  showUserLocal,
  children,
}: UsersLocalButtonsProps) => {
  return (
    <div>
      <div>
        <button className="text-button" onClick={handleUserLocal}>
          Load UsersLocal
        </button>
        <button className="text-button ml-01" onClick={removeUserLocal}>
          Remove UsersLocal
        </button>
      </div>
      {showUserLocal ? children : <></>}
    </div>
  );
};

export default UsersLocalButtons;
