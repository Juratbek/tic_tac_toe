import fourthMoveCombinations from "./fourth-movement.combinations";
import { getCombinationMirrorly } from "./utils";

export default function calculateCordsForFourthMove(coords) {
  return getCombinationMirrorly(coords, fourthMoveCombinations);
}
