import HeadingAndInfo from "./HeadingAndInfo";
import Button from "./Button";
import ProductCardContainer from "./ProductCardContainer";
import { useEffect, useState } from "react";
export default function App() {
  const [coffeeList, setCoffeeList] = useState([]);
  const [available, setAvailable] = useState("all");
  const [product, setProduct] = useState([]);
  async function getData() {
    const response = await fetch(
      " https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    );
    if (!response.ok) {
      return;
    }

    const data = await response.json();
    setCoffeeList(data);
    setProduct(data);
    console.log(data);
  }

  function handleAll() {
    setAvailable("all");
    setProduct(coffeeList);
  }

  function handleAvailable() {
    setAvailable("available");
    setProduct((coffees) => coffees.filter((coffee) => coffee.available));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <HeadingAndInfo />
      <div className="button-container">
        <Button
          available={available === "all" ? "select" : ""}
          onClick={handleAll}
        >
          All Products
        </Button>
        <Button
          available={available === "available" ? "select" : ""}
          onClick={handleAvailable}
        >
          Available Now
        </Button>
      </div>
      <ProductCardContainer coffeeList={product} />
    </div>
  );
}
