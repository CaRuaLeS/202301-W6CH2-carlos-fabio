export type CharacterStructure = {
  name: string;
  family: string;
  age: number;
  isLive: boolean;
  sentence: string;
  category?: Category;
  picture: string;
  throneYears?: number; // For King
  weapon?: string; // For Fighter
  dexterity?: number; // For Fighter
  advisor?: CharacterStructure | string; // For Counselor
  grade?: number; // For Squire
  servant?: CharacterStructure | string; // ForSquire
};

type Category = "king" | "squire" | "fighter" | "counselor";
