import { useState, useRef } from 'react'
import BeginnerLayout from '../beginnerUtility/BeginnerLayout/BeginnerLayout';
import AddItem from './AddItem';
import RenderShoppingList from './RenderShoppingList';
import './ShoppingList.css';

export default function ShoppingList() {
    const [shoppingItem, setShoppingItem] = useState({ itemName: '', error: false });
    const [itemList, setItemList] = useState([]);
    const inputRef = useRef();

    function removeItemFromList(ind) {
        // console.log(ind);
        const newList = itemList.filter((item, index) => {
            if (index !== ind) {
                return item;
            }
        });
        setItemList([...newList]);
    }

    function editItemCheckEnter(e, ind, item) {
        if (validateInput(item.name)) {
            if (e.key === "Enter") {
                updateItemFromList(e, ind, "edit")
            }
        }
    }

    function updateItemFromList(e, ind, element) {
        const newList = itemList.map((item, index) => {
            if (index === ind) {
                if (element === "name") {
                    return { ...item, [element]: e.target.value };
                } else {
                    return { ...item, [element]: !item[element] };
                }
            } else {
                return item;
            }
        });
        setItemList([...newList]);
    }

    function addItemToList() {
        if (validateInput(shoppingItem.itemName)) {
            const newList = [...itemList];
            newList.push({ name: shoppingItem.itemName, displayState: false, edit: false });
            setItemList([...newList]);
            setShoppingItem({ ...shoppingItem, itemName: '', error: false });
            inputRef.current.focus();
        } else {
            setShoppingItem({ ...shoppingItem, error: true })
        }
    }

    function handleItem(e) {
        setShoppingItem({ ...shoppingItem, itemName: e.target.value })
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
            headingTitle="Project 4: Shopping List"
            bgColor="bg-pink">
            <div className='shopping-box'>
                <h2 className='sub-head-style'>Items To Buy</h2>
                <AddItem
                    shoppingItem={shoppingItem}
                    checkEnter={checkEnter}
                    handleItem={handleItem}
                    inputRef={inputRef}
                    addItemToList={addItemToList}
                />
                <RenderShoppingList
                    itemList={itemList}
                    editItemCheckEnter={editItemCheckEnter}
                    updateItemFromList={updateItemFromList}
                    removeItemFromList={removeItemFromList}
                />
            </div>
        </BeginnerLayout>
    );
}