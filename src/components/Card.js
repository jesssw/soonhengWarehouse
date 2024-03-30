
const Card = ({ barcode_id,img, title, company, model,year,stock_brand,category,location,update_date, stock_quantity, newPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <div className="barcode-id">Barcode: {barcode_id} </div>
          <div> 
            <div>Car Details:</div>
            <div className=""> {company} - {model}</div>
             <div className="">Manufacturing year: {year}</div>
          </div>
        
          <div className="">Manufacturer: {stock_brand}</div>
          <div className="">Stock Category: {category}</div>

          <section className="card-price">
            <div className="price">
            {newPrice}
            </div>
        
          </section>
          <div className=""> {update_date}</div>
          {/* <div className="stock-quantity" data-value={stock_quantity}>Stock Left: {stock_quantity}</div> */}
          <div className={`stock-quantity ${stock_quantity < 3 ? 'low-stock' : ''}`} data-value={stock_quantity}>Stock:<br></br> <span class="quantity-no">{stock_quantity}</span> </div>
          <div className="stock-location">Location: {location}</div>

        </div>
      </section>
    </>
  );
};

export default Card;
