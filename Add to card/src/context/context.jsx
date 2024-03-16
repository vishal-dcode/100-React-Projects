import React, { useEffect, useContext, createContext, useReducer } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    loading: true,
    carts: [],
    total: 0,
    quantity: 1
  };

  const AppReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_DATA": {
        return {
          ...state,
          carts: action.payload,
          loading: false
        };
      }
      case "CLEAR_CART": {
        return { ...state, carts: [] };
      }
      case "REMOVE_ITEM": {
        return {
          ...state,
          carts: state.carts.filter((item) => item.id !== action.payload)
        };
      }
      case "INCREASE": {
        return {
          ...state,
          quantity: state.quantity + 1
          // quantity: state.carts.map((item) =>
          // item.id === action.payload ? { quantity: state.quantity + 1 } : item
          // )
        };
      }
      case "DECREASE": {
        return {
          ...state,
          carts: state.carts.map((item) =>
            item.id === action.payload ? { quantity: state.quantity - 1 } : item
          )
        };
      }
      case "GET_TOTALS": {
        return {
          ...state,
          total: state.carts.reduce(
            (totalAmt, cartItem) => totalAmt + cartItem.price,
            0
          )
        };
      }
      default:
        return state;
    }
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          dispatch({ type: "LOAD_DATA", payload: data });
        }, 1000); // 2 seconds delay
      })
      .catch((err) => {
        console.log("Something Went Wrong", err);
      });
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.carts]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch,
        clearCart,
        removeItem,
        increase,
        decrease
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default function useGlobalContext() {
  return useContext(AppContext);
}
