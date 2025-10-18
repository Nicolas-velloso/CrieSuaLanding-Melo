import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { produtoId } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtosMock = [
      { id: 1, nome: "Celular", descricao: "Smartphone Android" },
      { id: 2, nome: "Notebook", descricao: "Laptop potente" },
      { id: 3, nome: "Camisa", descricao: "Camisa de algodão" },
      { id: 4, nome: "Livro React", descricao: "Aprenda React do zero" },
    ];

    const promessa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(produtosMock.find(p => p.id === Number(produtoId)));
      }, 1000);
    });

    promessa.then((dados) => setProduto(dados));
  }, [produtoId]);

  if (!produto) {
    return <p style={{ textAlign: "center" }}>Carregando detalhes...</p>;
  }

  return (
    <div style={styles.detail}>
      <h2>{produto.nome}</h2>
      <p>{produto.descricao}</p>
      <button>Adicionar ao carrinho</button>
    </div>
  );
}

const styles = {
  detail: {
    padding: "20px",
    textAlign: "center"
  }
};

export default ItemDetailContainer;
