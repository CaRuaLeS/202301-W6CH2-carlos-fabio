import { CharacterStructure } from "../../components/card/model/card";

export class CharacterApiRepo {
  url: string;
  constructor() {
    this.url = "http://localhost:3000/characters";
  }

  async loadChar(): Promise<CharacterStructure[]> {
    const resp = await fetch(this.url);
    if (!resp.ok)
      throw new Error("Error Http: " + resp.status + ". " + resp.statusText);
    const data = (await resp.json()) as CharacterStructure[];
    return data;
  }

  async updateChar(char: CharacterStructure): Promise<CharacterStructure> {
    const url = this.url + "2";
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(char),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = (await response.json()) as CharacterStructure;
    return data;
  }
}
