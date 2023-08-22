import { useContext, useEffect, useState } from "react";
import "./Description.scss";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

function Description() {
  const [data, setData] = useState("");
  const { addToCart } = useContext(CartContext);

  const location = useLocation();
  const navigate = useNavigate();

  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setData(res.data);
    };
    getData();
  }, [id]);

  const addToCarts = () => {
    const item = {
      id: data.id,
      title: data.title,
      price: data.price,
      image: data.image,
    };
    addToCart(item);
    navigate("/cart");
  };

  return (
    <div className="description">
      <div className="descContainer">
        <div className="left">
          <div className="leftContainer">
            <img src={data.image} alt="" />
          </div>
          <span>Price: ${data.price} </span>
        </div>
        <div className="right">
          <span>description</span>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <button onClick={addToCarts}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}

export default Description;
