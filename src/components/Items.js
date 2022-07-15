import { useState } from 'react';
import { getItemList } from '../services/itemListService';
import Item from './Item';

function Items() {
  const [items, setItems] = useState([]);
  getItemList().then(itemList => setItems(itemList));
  return (
    <>
      {items.map(item => <Item item={item}></Item>)} 
    </>
  );
}

export default Items;
