import { useState } from "react";
import MyContext from "./myContext";

const myState = ({ children }) => {
  // const name = "Arun Kumar";
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <MyContext.Provider
        value={{
          loading,
          setLoading,
        }}
      >
        {children}
      </MyContext.Provider>
    </div>
  );
};

export default myState;
