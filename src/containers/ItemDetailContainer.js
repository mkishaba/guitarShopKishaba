import '../styles/ItemDetailContainer.css'
import ItemDetail from '../components/ItemDetail';
import { useEffect, useState } from 'react';
import { getItem } from '../services/itemListService';

function ItemListContainer(props) {
  const [itemDetail, setItemDetail] = useState({});
  useEffect(() => {
    getItem().then(detailData => {
      setItemDetail(detailData);
    });
  }, []);
  return (
    <div>
      <div className='itemDetailContainer'>
        <ItemDetail itemDetail={itemDetail} />
      </div>
    </div>
  )
}

export default ItemListContainer
