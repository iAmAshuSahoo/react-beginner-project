export default function AddItem({ shoppingItem, checkEnter, handleItem, inputRef, addItemToList }) {
    return (
        <div className="add-item">
            {shoppingItem.error && <div className='error-occured'>The input cannot be empty</div>}
            <input type="text" name="listItem" value={shoppingItem.itemName}
                id="listItem" className={`input-items ${shoppingItem.error ? "error-shop-list" : ""}`} ref={inputRef}
                placeholder='Add Item to Shopping List'
                onKeyDown={(e) => checkEnter(e)} onChange={(e) => handleItem(e)} />
            <button className='shopping-button' onClick={addItemToList}>Add</button>
        </div>
    );
}