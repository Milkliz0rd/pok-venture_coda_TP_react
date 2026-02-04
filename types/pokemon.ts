export interface Pokemon {
    id: number;
    nameFr: string;
    types: string[];
    sprite: string;
    level: number;
    currentHp: number;
    maxHp: number;
    dateOfCapture: Date;
}