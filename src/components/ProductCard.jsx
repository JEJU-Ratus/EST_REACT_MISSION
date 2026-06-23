export default function CardList({ name, price, brand }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{brand}</p>
    </article>
  );
}
