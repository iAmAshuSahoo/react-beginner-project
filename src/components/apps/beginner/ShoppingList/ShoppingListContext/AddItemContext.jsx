import { useRef } from 'react';
import { useShopState, useShopDispatch } from './ShoppingContext'

export default function AddItem({ validateInput }) {
    const state = useShopState();
    const dispatch = useShopDispatch();
    const inputRef = useRef();

    function addItemToList() {
        if (validateInput(state.shoppingItem.itemName)) {
            dispatch({
                type: 'add_item',
            })
            inputRef.current.focus();
        } else {
            dispatch({
                type: 'error_item',
            })
        }
    }

    function checkEnter(e) {
        if (e.key === "Enter") {
            addItemToList()
        }
    }

    function handleItem(e) {
        dispatch({
            type: "enter_item",
            itemName: e.target.value
        })
    }

    return (
        <div className="add-item">
            {state.shoppingItem.error && <div className='error-occured'>The input cannot be empty</div>}
            <input type="text" name="listItem" value={state.shoppingItem.itemName}
                id="listItem" className={`input-items ${state.shoppingItem.error ? "error-shop-list" : ""}`} ref={inputRef}
                placeholder='Add Item to Shopping List'
                onKeyDown={(e) => checkEnter(e)} onChange={(e) => handleItem(e)} />
            <button className='shopping-button' onClick={addItemToList}>Add</button>
        </div>
    );
}