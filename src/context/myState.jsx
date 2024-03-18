import { Children } from "react";
import MyContext from "./myContext";

const myState = ({ Children }) => {
  const name = "Arun Kumar";
  return (
    <div>
      <MyContext.Provider value={name}>{Children}</MyContext.Provider>
    </div>
  );
};

export default myState;
