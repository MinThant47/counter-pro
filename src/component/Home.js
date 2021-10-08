import { useEffect, useState } from "react";
import { client } from "../client";
import { Link } from "react-router-dom";

const Home = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    client
      .getEntries({ content_type: "birthdayInfo" })
      .then((res) => {
        console.log(res.items);
        setPeople(res.items);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  return (
    <div>
      {people &&
        people.map((bd) => {
          return (
            <div key={bd.sys.id}>
              <Link to={`/counter/${bd.fields.name}`}>{bd.fields.name}</Link>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
