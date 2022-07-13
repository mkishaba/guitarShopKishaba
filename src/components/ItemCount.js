import { useState } from 'react'
import '../styles/ItemCount.css'

function ItemCount(props) {
  const [itemStock, setItemStock] = useState(props.stock)
  const [itemQty, setItemQty] = useState(props.initial);

  function onAddItemClick() {
    if (itemStock > 0) {
      setItemQty(itemQty + 1);
      setItemStock(itemStock - 1)
    }
  }

  function onRemoveItemClick() {
    if (itemQty > 0) {
      setItemQty(itemQty - 1);
      setItemStock(itemStock + 1);
    }
  }

  return (
    <div className='itemCountContainer'>
      <button className='itemCountButton' onClick={onRemoveItemClick}>-</button>
      <div>{itemQty}</div>
      <button className='itemCountButton' onClick={onAddItemClick}>+</button>
    </div>
  );
}

export default ItemCount;