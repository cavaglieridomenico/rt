export type Name = {
  firstName: string;
  secondName: string;
};

export type PersonProps = {
  name: Name;
};

export type PersonListProps = {
  names: Name[];
};
