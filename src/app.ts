// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
  new HumanHero(1, 'John', 'male', 33, 100),
  new HumanHero(2, 'Doe', 'male', 44, 99),
  new HumanHero(3, 'Jane', 'male', 55, 98),
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} humans
 */
export const transformers: TransformerHero[] = [
  new TransformerHero(1, 'a', 2, 4, 'b'),
  new TransformerHero(2, 'c', 2, 6, 'd'),
  new TransformerHero(3, 'e', 2, 8, 'f'),
];
