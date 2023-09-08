import Person from "./Person";
import type { Name } from "./Person.types";
import PersonList from "./PersonList";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn?: boolean;
};

const Greet = ({ name, messageCount = 0, isLoggedIn = false }: GreetProps) => {
  const person: Name = {
    firstName: "Bruce",
    secondName: "Wayne",
  };

  const personList: Name[] = [
    {
      firstName: "John",
      secondName: "Owen",
    },
    {
      firstName: "Gene",
      secondName: "Wilder",
    },
    {
      firstName: "Kurt",
      secondName: "Russel",
    },
  ];

  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcame ${name}! You have ${messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
      <Person name={person} />
      <hr />
      <PersonList names={personList} />
    </div>
  );
};

export default Greet;
