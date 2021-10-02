import "./styles.css";
const Cart = ({ cart, setCart }) => {
  const handleDeletItem = (removedItem) => {
    const filtredCart = cart.filter((item) => item !== removedItem);
    setCart(filtredCart);
  };
  return (
    <div>
      <div>
        <p>
          preço total :
          {cart.reduce((acc, currentvalue) => {
            const total = currentvalue.price - currentvalue.discount;
            return acc + total;
          }, 0)}
        </p>
        <div>-</div>
        <p>
          desconto total :
          {cart.reduce((acc, currentvalue) => {
            const total = acc + currentvalue.discount;
            return total;
          }, 0)}
        </p>
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
