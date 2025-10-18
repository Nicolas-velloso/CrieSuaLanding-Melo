import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Minha Loja</h1>
      <ul style={styles.links}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categoria/eletronicos">Eletrônicos</Link></li>
        <li><Link to="/categoria/roupas">Roupas</Link></li>
        <li><Link to="/categoria/livros">Livros</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#282c34",
    padding: "10px 20px",
    color: "white"
  },
  logo: { margin: 0 },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "15px"
  }
};

export default NavBar;
