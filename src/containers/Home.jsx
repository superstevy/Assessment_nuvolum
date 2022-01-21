import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Card from "../components/Card";
import ProductDetail from "../components/ProductDetail";
import API from "../API";

const api = new API();

const Home = () => {
  // The array products will be used to store the datas fetched from the api
  const [products, setProducts] = useState([]);

  // selectedProductId will take the value of the id of a selected product
  const [selectedProductId, setSelectedProductId] = useState(null);

  const cardClick = (productId) => {
    console.log(productId);
    selectedProductId(productId);
  };

  // fetching product datas with a limit of 5
  const limit = 5;
  useEffect(() => {
    api
      .getProducts({ limit })
      .then((response) => {
        // storing datas fetched in the products array
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
          {/* Checking if any data exist in the products array then mapping them out on the screen */}
          {products.length > 0 && (
            <>
              {products.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  selectedProductId={selectedProductId}
                  setSelectedProductId={setSelectedProductId}
                />
              ))}
            </>
          )}
        </div>
        <div className="product-details">
          {/* For each listed item the description and price will also be listed */}
          {products.length > 0 && (
            <>
              {products.map((product) => (
                <ProductDetail
                  key={product.id}
                  product={product}
                  selectedProductId={selectedProductId}
                />
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
