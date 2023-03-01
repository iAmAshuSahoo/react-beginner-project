export default function RenderShoppingList({ itemList, editItemCheckEnter, updateItemFromList, removeItemFromList }) {
    return (
        <div className='item-list'>
            {itemList && itemList.length ? itemList.map((item, ind) => {
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