import { useState } from "react";

const Input = ({ setProducts, products }) => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");

  const handleSubmit = (e) => {
    console.log(products);
    setProducts([
      ...products,
      ...[{ code, name, description, price, discount }],
    ]);
  };
  return (
    <div>
      <label name="Code">code: </label>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <label name="nome">nome: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label name="Descrição">Descrição: </label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label name="Preço">Preço: </label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label name="Desconto">Desconto: </label>
      <input
        type="number"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
      />
      <button onClick={handleSubmit}>send</button>
    </div>
  );
};

export default Input;
