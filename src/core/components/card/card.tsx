import { CardStructure } from "./model/card";

export function Card({ character }: { character: CardStructure }) {
  return (
    <div>
      <li className="character col">
        <div className="card character__card">
          <img
            src={character.picture ?? "./media/default.jpg"}
            alt={`${character.name} ${character.family}`}
            className="character__picture card-img-top"
          />
          <div className="card-body">
            <h2 className="character__name card-title h4">
              {character.name} {character.family}
            </h2>
            <div className="character__info">
              <ul className="list-unstyled">
                <li>Age: {character.age}</li>
                <li>
                  Status:{" "}
                  {character.isLive ? (
                    <i className="fas fa-thumbs-up"></i>
                  ) : (
                    <i className="fas fa-thumbs-down"></i>
                  )}
                </li>
              </ul>
            </div>
            <div className="character__overlay">
              <ul className="list-unstyled">
                {character.throneYears !== undefined && (
                  <li>Years of Reign: {character.throneYears}</li>
                )}
                {character.weapon !== undefined && (
                  <li>Weapon: {character.weapon}</li>
                )}
                {character.dexterity !== undefined && (
                  <li>Dexterity: {character.dexterity}</li>
                )}
                {character.advisor !== undefined && (
                  <li>Advises: {character.advisor}</li>
                )}
                {character.servant !== undefined && (
                  <li>Serves: {character.servant}</li>
                )}
                {character.grade !== undefined && (
                  <li>Grade: {character.grade}</li>
                )}
              </ul>
              <div className="character__actions">
                <button className="character__action btn">Speaks</button>
                <button className="character__action btn">Dies</button>
              </div>
            </div>
          </div>
          <i className="emoji"></i>
        </div>
      </li>
    </div>
  );
}
