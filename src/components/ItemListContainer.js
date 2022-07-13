import '../styles/ItemListContainer.css'

function ItemListContainer(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div className='itemListContainer'>
        {props.children}
      </div>
    </div>
  )
}

export default ItemListContainer
