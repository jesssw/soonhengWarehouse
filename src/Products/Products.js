import "./Product.css";
import React from 'react';
import Card from '../components/Card'; // Assuming Card component is imported from '../components/Card'

const Products = ({ result }) => {
  // console.log(result);
  return (
    <>
      <section className="card-container">
        {result.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </section>
    </>
  );
};

export default Products;
