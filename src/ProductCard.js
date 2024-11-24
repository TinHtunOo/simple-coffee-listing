export default function ProductCard({ coffee }) {
  return (
    <li className="product-card">
      <div className="product-img-container">
        <img src={coffee.image} alt={coffee.name} />
      </div>
      <div className="label">
        <h4>{coffee.name}</h4>
        <span className="coffee-price">{coffee.price}</span>
      </div>
      <div className="info">
        <div className="info-container">
          <img
            src={coffee.rating ? "image/Star_fill.svg" : "image/Star.svg"}
            alt="star"
          />
          {coffee.rating ? (
            <div>
              <span className="rating">{coffee.rating}</span>{" "}
              <span className="vote">({coffee.votes} votes)</span>
            </div>
          ) : (
            <span className="no-rating">no rating</span>
          )}
        </div>
        {!coffee.available && <div className="sold-out">sold out</div>}
      </div>
    </li>
  );
}
