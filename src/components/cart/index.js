import "./styles.css";
const Cart = ({ cart, setCart }) => {
  const handleDeletItem = (removedItem) => {
    const filtredCart = cart.filter((item) => item !== removedItem);
    setCart(filtredCart);
  };
  return (
    <div>
      <div>
        {cart.map((item, index) => (
          <section key={index}>
            <p>Produto: {item.name}</p>
            <p> Descrição: {item.description}</p>
            <p>
              <s title="preço antigo">Preço: {item.price}</s>
            </p>
            <p>Preço:{(item.price - item.discount).toFixed(2)}</p>
            <button onClick={() => handleDeletItem(item)}>
              Remover produto
            </button>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Cart;
