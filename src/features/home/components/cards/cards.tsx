import { Card } from "../card/card";
import { MOCK_CARDS } from "../card/mocks/cards";

export function Cards() {
  return (
    <div>
      <ul className="characters-list row list-unstyled">
        {MOCK_CARDS.map((character) => (
          <li className="col-md-3">
            <Card character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
}
