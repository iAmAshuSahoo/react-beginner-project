import { createContext, useReducer, useContext } from 'react';
import { listReducer } from './listReducer'

export const ShoppingContext = createContext(null);
export const ShoppingDispatchContext = createContext(null);

export function ShopProvider({ children }) {
    const initialState = {
        shoppingItem: { itemName: '', error: false },
        itemList: []
    }
    const [state, dispatch] = useReducer(listReducer, initialState);

    return (
        <ShoppingContext.Provider value={state}>
            <ShoppingDispatchContext.Provider value={dispatch}>
                {children}
            </ShoppingDispatchContext.Provider>
        </ShoppingContext.Provider>
    );
}

export function useShopState() {
    return useContext(ShoppingContext);
}

export function useShopDispatch() {
    return useContext(ShoppingDispatchContext);
}
