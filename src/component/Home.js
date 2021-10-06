import { useContext } from "react";
import { BirthdayContext } from "../context/birthdayPeople";

const Home = () => {
  const { people } = useContext(BirthdayContext);

  return (
    <div>
      {people &&
        people.map((bd) => {
          return <h3>{bd.fields.name}</h3>;
        })}
    </div>
  );
};

export default Home;
