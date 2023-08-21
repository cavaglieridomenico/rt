import type { PersonListProps } from "./Person.types";

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((person, index) => {
        return (
          <p key={index}>
            {person.firstName} {person.secondName}
          </p>
        );
      })}
    </div>
  );
};

export default PersonList;
