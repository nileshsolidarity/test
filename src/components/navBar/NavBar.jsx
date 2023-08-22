import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function NavBar() {
  const { cartItems } = useContext(CartContext);

  const totalCount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <div className="navBar">
      <div className="navBarContainer">
        <Link className="link" to="/">
          <span>Home</span>
        </Link>
        <Link className="link" to="/cart">
          <span>Cart</span>
          <span style={{ fontSize: "20px" }}>{totalCount()}</span>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
