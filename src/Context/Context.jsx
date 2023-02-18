import { createContext, useState, useEffect } from "react";

const carts = JSON.parse(localStorage.getItem("states"))?.carts;
const kitchens = JSON.parse(localStorage.getItem("states"))?.kitchens;
// const defaultAppState = {
//   cart: [],
//   setCart: () => {},
//   kitchen: [],
//   setKitchen: () => {},
//   toggleCart: false,
//   setToggleCart: () => {},
//   toggleKitchen: false,
//   setToggleKitchen: () => {},
// };

export const Context = createContext();

const ContextProvider = (props) => {
  const [cart, setCart] = useState(carts ? carts : []);
  const [toggleCart, setToggleCart] = useState(true);

  const [kitchen, setKitchen] = useState(kitchens ? kitchens : []);
  const [toggleKitchen, setToggleKitchen] = useState(true);

  const states = {
    carts: cart,
    kitchens: kitchen,
  };

  useEffect(() => {
    localStorage.setItem("states", JSON.stringify(states));
  }, [states]);
  const value = {
    cart,
    setCart,
    kitchen,
    setKitchen,
    toggleCart,
    toggleKitchen,
    setToggleCart,
    setToggleKitchen,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default ContextProvider;
