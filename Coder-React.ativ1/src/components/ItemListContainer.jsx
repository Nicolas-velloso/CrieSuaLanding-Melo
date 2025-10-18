import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ItemListContainer() {
  const { categoriaId } = useParams();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const produtosMock = [
      { id: 1, nome: "Celular", categoria: "eletronicos" },
      { id: 2, nome: "Notebook", categoria: "eletronicos" },
      { id: 3, nome: "Camisa", categoria: "roupas" },
      { id: 4, nome: "Livro React", categoria: "livros" },
    ];

    const promessa = new Promise((resolve) => {
      setTimeout(() => {
        if (categoriaId) {
          resolve(produtosMock.filter(p => p.categoria === categoriaId));
        } else {
          resolve(produtosMock);
        }
      }, 1000);
    });

    promessa.then((dados) => setProdutos(dados));
  }, [categoriaId]);

  return (
    <section style={styles.container}>
      <h2>{categoriaId ? `Categoria: ${categoriaId}` : "Catálogo de Produtos"}</h2>
      {produtos.length === 0 ? (
        <p>Carregando produtos...</p>
      ) : (
        <ul style={styles.list}>
          {produtos.map((p) => (
            <li key={p.id}>
              <Link to={`/produto/${p.id}`}>{p.nome}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center"
  },
  list: {
    listStyle: "none",
    padding: 0
  }
};

export default ItemListContainer;
