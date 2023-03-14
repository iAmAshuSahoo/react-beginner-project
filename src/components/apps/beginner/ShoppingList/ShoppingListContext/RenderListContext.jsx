import { useContext } from 'react';
import { useShopState, useShopDispatch } from './ShoppingContext';

export default function RenderShoppingList({ validateInput }) {
    const dispatch = useShopDispatch();
    const state = useShopState();

    function removeItemFromList(ind) {
        dispatch({
            type: "delete_item",
            ind: ind
        })
    }

    function editItemCheckEnter(e, ind, item) {
        if (validateInput(item.name)) {
            if (e.key === "Enter") {
                updateItemFromList(e, ind, "edit")
            }
        }
    }

    function updateItemFromList(e, ind, element) {
        dispatch({
            type: "update_item",
            value: e.target.value,
            element: element,
            ind: ind
        })
    }

    return (
        <div className='item-list'>
            {state.itemList && state.itemList.length ? state.itemList.map((item, ind) => {
                return (
                    <div className='shop-item' key={ind}>
                        {!item.edit ?
                            <span className={`item-name add-cursor ${item.displayState ? "strike" : ""}`}
                                onClick={(e) => updateItemFromList(e, ind, "displayState")}>{item.name}</span> :
                            <span className={`item-name add-cursor ${item.displayState ? "strike" : ""}`}>
                                <input type="text" className='edit-input-item' onKeyDown={(e) => editItemCheckEnter(e, ind, item)}
                                    value={item.name} onChange={(e) => updateItemFromList(e, ind, "name")} />
                            </span>
                        }
                        <span className="update-item delete-item tooltip-task" onClick={() => removeItemFromList(ind)}>
                            X<span className="tooltiptext">Remove Item</span>
                        </span>
                        <span className={`update-item tooltip-task ${!item.edit ? "edit-item" : "edit-update-item"}`} onClick={(e) => updateItemFromList(e, ind, "edit")}>
                            {!item.edit ? "E" : "U"}<span className="tooltiptext">Update Item</span>
                        </span>
                    </div>
                );
            }) : <div className='empty-list'>Shopping List is Empty</div>}
        </div>
    );
}