import "./styles.css";
const Products = ({ products, setCart, cart }) => {
  const handleCart = (item) => {
    setCart([...cart, item]);
  };
  return (
    <div>
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
