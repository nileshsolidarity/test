import { useEffect, useState } from "react";
import "./Header.scss";
import axios from "axios";
import { Link } from "react-router-dom";

function Header() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    };
    getData();
  }, []);
  return (
    <div className="header">
      <div className="headerContainer">
        <h1>Products</h1>
        <div className="productListContainer">
          {data.map((item) => (
            <Link to={`/products/${item.id}`} className="link">
              <div className="productListItem" key={item.id}>
                <img src={item.image} alt="" />
                <h2>{item.title}</h2>
                <span>price: ${item.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
