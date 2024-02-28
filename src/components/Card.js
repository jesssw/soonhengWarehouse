
const Card = ({ img, title, company, model,year,stock_brand,category,location,update_date, prevPrice, newPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <div className=""> {company}</div>
          <div className=""> {model}</div>
          <div className=""> {year}</div>
          <div className=""> {stock_brand}</div>
          <div className=""> {category}</div>
          <div className="total-reviews">Location: {location}</div>

          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
        
          </section>
          <div className=""> {update_date}</div>

        </div>
      </section>
    </>
  );
};

export default Card;
