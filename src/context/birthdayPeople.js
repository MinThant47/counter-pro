import React, { createContext, useState, useEffect } from "react";
import { createClient } from "contentful";

export const BirthdayContext = createContext();

const BirthdayContextProvider = (props) => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const client = createClient({
      space: process.env.REACT_APP_SPACE_ID,
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
    });

    client.getEntries({ content_type: "birthdayInfo" }).then((res) => {
      console.log(res.items);
      setPeople(res.items);
    });
  }, []);
  return (
    <BirthdayContext.Provider value={{ people }}>
      {props.children}
    </BirthdayContext.Provider>
  );
};

export default BirthdayContextProvider;
