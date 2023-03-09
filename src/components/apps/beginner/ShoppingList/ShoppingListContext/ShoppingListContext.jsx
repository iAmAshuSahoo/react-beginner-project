import BeginnerLayout from '../../beginnerUtility/BeginnerLayout/BeginnerLayout';
import AddItem from './AddItemContext';
import RenderShoppingList from './RenderListContext';
import '../ShoppingList.css';
import { ShopProvider } from './ShoppingContext'

export default function ShoppingListContext() {
    // const [shoppingItem, setShoppingItem] = useState({ itemName: '', error: false });
    // const [itemList, setItemList] = useState([]);
    function validateInput(val) {
        if (val && val.length > 0) {
            return true;
        }
    }

    return (
        <ShopProvider>
            <BeginnerLayout
                headingTitle="Project 4: Shopping List Using Reducer and Context"
                bgColor="bg-pink">
                <div className='shopping-box'>
                    <h2 className='sub-head-style'>Items To Buy</h2>
                    <AddItem
                        validateInput={validateInput}
                    />
                    <RenderShoppingList
                        validateInput={validateInput}
                    />
                </div>
            </BeginnerLayout>
        </ShopProvider>
    );
}

// AddItem
// shoppingItem = { state.shoppingItem }
// checkEnter = { checkEnter }
// handleItem = { handleItem }
// inputRef = { inputRef }
// addItemToList = { addItemToList }


// RenderShoppingList
// itemList={state.itemList}
// editItemCheckEnter={editItemCheckEnter}
// updateItemFromList={updateItemFromList}
// removeItemFromList={removeItemFromList}