import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Card from "../components/Card";
import ProductDetail from "../components/ProductDetail";
import API from "../API";

const api = new API();

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const cardClick = (productId) => {
    console.log(productId);
    selectedProductId(productId);
  };
  const limit = 5;
  useEffect(() => {
    api
      .getProducts({ limit })
      .then((response) => {
        setProducts(response.data);
        setSelectedProductId(response.data[0].id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="home">
      <Heading />
      <section className="main">
        <div className="card-list">
          {products.length > 0 && (
            <>
              {products.map((product) => (
                <Card key={product.id} product={product} selectedProductId={selectedProductId} setSelectedProductId={setSelectedProductId} />
              ))}
            </>
          )}
        </div>
        <div className="product-details">
          {products.length > 0 && (
            <>
              {products.map((product) => (
                <ProductDetail key={product.id} product={product} selectedProductId={selectedProductId} />
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
