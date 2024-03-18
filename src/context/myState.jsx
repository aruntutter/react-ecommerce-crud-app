import MyContext from "./myContext";

const myState = ({ children }) => {
  const name = "Arun Kumar";
  return (
    <div>
      <MyContext.Provider value={name}>{children}</MyContext.Provider>
    </div>
  );
};

export default myState;
