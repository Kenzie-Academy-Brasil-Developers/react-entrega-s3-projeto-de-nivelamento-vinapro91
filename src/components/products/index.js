import "./styles.css";
const Products = ({ products, setCart, cart }) => {
  const handleCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <div>
      <p>
        preço total :
        {cart.reduce((acc, currentvalue) => {
          const total = currentvalue.price - currentvalue.discount;
          return acc + total;
        }, 0)}
      </p>
      <div> </div>
      <p>
        desconto total :
        {cart.reduce((acc, currentvalue) => {
          const total = acc + currentvalue.discount;
          return total;
        }, 0)}
      </p>
      {products.map((item, index) => (
        <section key={index}>
          <p>Produto: {item.name}</p>
          <p> Descrição: {item.description}</p>
          <p>
            <s title="preço antigo">Preço: {item.price}</s>
          </p>
          <p>Preço:{(item.price - item.discount).toFixed(2)}</p>
          <button onClick={() => handleCart(item)}>
            Adicionar Ao carrinho
          </button>
        </section>
      ))}
    </div>
  );
};

export default Products;
