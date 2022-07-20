import { useEffect, useState } from 'react';
import { getItemList } from '../services/itemListService';
import Item from './Item';

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItemList().then(itemList => setItems(itemList));
  }, []);

  return (
    <>
      {items.map(item => <Item key={item.id} item={item}></Item>)}
    </>
  );
}

export default Items;
