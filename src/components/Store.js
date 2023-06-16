import Item from "./Item";

const Store = ({ handleCartAdd, posts }) => {

  const itemCards = posts.map((item, index) => (
    <Item key={item.image + index} product={item} handleCartAdd={handleCartAdd} />
  ));
    
  return (
    <>
      {
        posts.length > 0 ? (
          <div className={"store-container"}>{itemCards}</div>
        ) : (<h2 style={{marginTop: '40vh'}}>No posts found.</h2>)
      }
    </>
  )
}

export default Store;