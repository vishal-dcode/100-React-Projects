export default function List({ cards, removeCard }) {
  return (
    <section className="card-wrapper">
      {cards.map((card, id) => (
        <div key={id} className="card-ctr">
          <img
            className="banner"
            src={`https://source.unsplash.com/random/?wallpaper-${id}`}
            alt="Banner"
          />
          <span>{card.username}</span>
          <h4>{card.name}</h4>
          <p>
            {card.address.street} {card.address.city} {card.address.zipcode}
          </p>
          <button className="btn" onClick={() => removeCard(card.id)}>
            Remove
          </button>
        </div>
      ))}
    </section>
  );
}
