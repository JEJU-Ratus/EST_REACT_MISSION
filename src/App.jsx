import "./App.css";
import CardList from "./components/ProductCard.jsx";
import styles from "./components/ProductCard.module.css";

function App() {
  const products = [
    { id: 1, name: "무선 키보드", price: 39000, brand: "EZTECH" },
    { id: 2, name: "무선 마우스", price: 29000, brand: "EZTECH" },
    { id: 3, name: "모니터", price: 199000, brand: "EZTECH" },
  ];
  const cardLists = products.map(p => {
    return (
      <li key={p.id} className={styles.productItem}>
        <CardList name={p.name} price={p.price} brand={p.brand} />
      </li>
    );
  });
  return (
    <>
      <ul>{cardLists}</ul>
    </>
  );
}

export default App;
