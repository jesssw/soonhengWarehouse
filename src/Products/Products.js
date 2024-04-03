import "./Product.css";
import React from 'react';
import Card from '../components/Card'; 

const Products = ({ result }) => {
  //   // console.log(result);
  return (
    <>
      <section className="card-container">
        {result.length === 0 ? (
          <p>No results found.</p>
        ) : (
          result.map((product, index) => (
            <Card key={index} {...product} />
          ))
        )}
      </section>
    </>
  );
};

export default Products;
