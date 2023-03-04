import { useReducer, useRef } from 'react'
import BeginnerLayout from '../../beginnerUtility/BeginnerLayout/BeginnerLayout';
import AddItem from '../AddItem';
import RenderShoppingList from '../RenderShoppingList';
import '../ShoppingList.css';
import { listReducer } from './listReducer';

export default function ShoppingListReducer() {
    // const [shoppingItem, setShoppingItem] = useState({ itemName: '', error: false });
    // const [itemList, setItemList] = useState([]);
    const initialState = {
        shoppingItem: { itemName: '', error: false },
        itemList: []
    }
    const [state, dispatch] = useReducer(listReducer, initialState)
    const inputRef = useRef();

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

    function handleItem(e) {
        dispatch({
            type: "enter_item",
            itemName: e.target.value
        })
    }

    function validateInput(val) {
        if (val && val.length > 0) {
            return true;
        }
    }

    function checkEnter(e) {
        if (e.key === "Enter") {
            addItemToList()
        }
    }

    return (
        <BeginnerLayout
            headingTitle="Project 4: Shopping List Using Reducer"
            bgColor="bg-pink">
            <div className='shopping-box'>
                <h2 className='sub-head-style'>Items To Buy</h2>
                <AddItem
                    shoppingItem={state.shoppingItem}
                    checkEnter={checkEnter}
                    handleItem={handleItem}
                    inputRef={inputRef}
                    addItemToList={addItemToList}
                />
                <RenderShoppingList
                    itemList={state.itemList}
                    editItemCheckEnter={editItemCheckEnter}
                    updateItemFromList={updateItemFromList}
                    removeItemFromList={removeItemFromList}
                />
            </div>
        </BeginnerLayout>
    );
}