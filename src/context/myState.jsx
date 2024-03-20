import { useEffect, useState } from "react";
import MyContext from "./myContext";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { fireDb } from "../firebase/FirebaseConfig";

const myState = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // User State
  const [getAllProduct, setGetAllProduct] = useState([]);

  const getAllProductFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDb, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProduct(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Order State
  const [getAllOrder, setGetAllOrder] = useState([]);

  const getAllOrderFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDb, "order"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let orderArray = [];
        QuerySnapshot.forEach((doc) => {
          orderArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllOrder(orderArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProductFunction();
    getAllOrderFunction();
  }, []);

  return (
    <div>
      <MyContext.Provider
        value={{
          loading,
          setLoading,
          getAllProduct,
          getAllProductFunction,
          getAllOrder,
        }}
      >
        {children}
      </MyContext.Provider>
    </div>
  );
};

export default myState;
