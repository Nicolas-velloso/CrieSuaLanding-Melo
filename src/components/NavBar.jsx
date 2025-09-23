import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Minha Loja</h1>
      <ul style={styles.links}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Produtos</a></li>
        <li><a href="#">Contato</a></li>
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
  logo: {
    margin: 0
  },
  links: {
    listStyle: "none",
    display: "flex",
    gap: "15px"
  }
};

export default NavBar;