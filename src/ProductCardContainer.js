import ProductCard from "./ProductCard";
export default function ProductCardContainer({ coffeeList }) {
  return (
    <ul className="product-container">
      {coffeeList.map((coffee) => (
        <ProductCard coffee={coffee} key={coffee.name} />
      ))}
    </ul>
  );
}
