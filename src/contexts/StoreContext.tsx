import { ReactNode, createContext, useContext, useState } from "react";

interface StoreProviderProps {
  children: ReactNode;
}

interface StoreContextProps {
  // getQuant: (id: number) => number,
  cartItems: Array<CartItem>;
  increaseQuant: (id: number) => void;
  decreaseQuant: (id: number) => void;
  removeItem: (id: number) => void;
  checkout: () => void;
}

interface CartItem {
  id: number;
  qtd: number;
}

const StoreContext = createContext({} as StoreContextProps);

export function useStore() {
  return useContext(StoreContext);
}

export function StoreProvider({ children }: StoreProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function increaseQuant(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, qtd: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, qtd: item.qtd + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseQuant(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.qtd === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, qtd: item.qtd - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function checkout() {
    setCartItems([]);
  }

  return (
    <StoreContext.Provider
      value={{ increaseQuant, decreaseQuant, removeItem, cartItems, checkout }}
    >
      {children}
    </StoreContext.Provider>
  );
}
