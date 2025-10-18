function CartWidget() {
  return (
    <div style={styles.cart}>
      🛒 <span style={styles.count}>3</span>
    </div>
  );
}

const styles = {
  cart: {
    fontSize: "20px",
    cursor: "pointer"
  },
  count: {
    marginLeft: "5px",
    fontWeight: "bold",
    color: "yellow"
  }
};

export default CartWidget;
