function ItemDetail({ itemDetail }) {
  return (
    <div>
      <img src={itemDetail.url} alt='' width='400'></img>
      <h3>{itemDetail.title}</h3>
      <h4>Description: {itemDetail.description}</h4>
      <h5>Price: U$S{itemDetail.price}</h5>
    </div>
  )
}

export default ItemDetail;
