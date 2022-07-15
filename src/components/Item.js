function Item({item}) {
  return (
    <div>
      <img src={item.url} alt='' width='200'></img>
      <h4>{item.title}</h4>
      <h5>U$S{item.price}</h5>
    </div>
  );
}

export default Item