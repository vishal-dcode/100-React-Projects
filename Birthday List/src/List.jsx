export default function List({ people }) {
  return (
    <div className="list-wrapper">
      {people.map((person) => {
        return (
          <div key={person.id} className="person-card">
            <img src={person.img} alt="Profile Pic" />
            <div className="person-details">
              <h3>{person.name}</h3>
              <p>Age: {person.age} years</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
