function ItemListContainer({ greeting }) {
  return (
    <section style={styles.container}>
      <h2>{greeting}</h2>
    </section>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center"
  }
};

export default ItemListContainer;