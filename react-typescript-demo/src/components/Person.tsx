import type { PersonProps } from "./Person.types";

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.firstName} {props.name.secondName}
    </div>
  );
};

export default Person;
