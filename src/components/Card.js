
const Card = ({ barcode_id,img, title, company, model,year,stock_brand,category,location,update_date, stock_quantity, newPrice }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <div className="barcode-id">Barcode: {barcode_id} </div>
          <div class="car-details"> 
            <div className="bolder"> {company} - {model}</div>
             <div className="">Manufacturing year: <span className="bolder">{year}</span> </div>
          </div>
        
        <div class="">
          <div>Item Details:</div>
          <div className="bolder">Manufacturer: {stock_brand}</div>
          <div className="">Stock Category: {category}</div>
        </div>
        
          <section className="card-price">
            <div className="price">
            ${newPrice}
            </div>
        
          </section>
          <div className="update-date">Last Update: {update_date.split("T")[0]}</div>
          {/* <div className="stock-quantity" data-value={stock_quantity}>Stock Left: {stock_quantity}</div> */}
          <div className={`stock-quantity ${stock_quantity < 3 ? 'low-stock' : ''}`} data-value={stock_quantity}>Stock:<br></br> <span class="quantity-no">{stock_quantity}</span> </div>
          <div className="stock-location">Location: {location}</div>

        </div>
      </section>
    </>
  );
};

export default Card;
