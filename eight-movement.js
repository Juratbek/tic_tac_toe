import eightMoveCombinations from "./eight-movement.combinations";
import { getCombinationMirrorly } from "./utils";

export default function calculateCordsForEightMove(coords) {
  return getCombinationMirrorly(coords, eightMoveCombinations);
}
