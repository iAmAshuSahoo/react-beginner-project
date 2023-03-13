export function listReducer(state, action) {
    switch (action.type) {
        case "add_item": {
            const newList = [...state.itemList];
            newList.push({ name: state.shoppingItem.itemName, displayState: false, edit: false });
            return {
                ...state,
                itemList: [...newList],
                shoppingItem: {...state.shoppingItem, itemName: '', error: false}
            }
            // setItemList([...newList]);
            // setShoppingItem({ ...shoppingItem, itemName: '', error: false });
        }
        case "error_item": {
            return {
                ...state,
                shoppingItem: { ...state.shoppingItem, error: true }
            }
            // setShoppingItem({ ...shoppingItem, error: true })
        }
        case "enter_item": {
            return {
                ...state,
                shoppingItem: { ...state.shoppingItem, itemName: action.itemName }
            }
        // setShoppingItem({ ...shoppingItem, itemName: e.target.value })
        }
        case "delete_item": {
            const newList = state.itemList.filter((item, index) => {
                if (index !== action.ind) {
                    return item;
                }
            });
            return {
                ...state,
                itemList: [...newList]
            }
            // setItemList([...newList]);
        }
        case "update_item": {
            const newList = state.itemList.map((item, index) => {
                if (index === action.ind) {
                    if (action.element === "name") {
                        return { ...item, [action.element]: action.value };
                    } else {
                        return { ...item, [action.element]: !item[action.element] };
                    }
                } else {
                    return item;
                }
            });
            return({
                ...state,
                itemList: newList
            })
            // setItemList([...newList]);
        }
        default:
            throw Error('Unknown action: ' + action.type);
    }
    
}