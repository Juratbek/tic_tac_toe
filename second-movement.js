import secondMoveCombinations from './second-movement.combinations';
import { getCombinationMirrorly } from './utils';

export default function calculateCordsForSecondMove(coords) {
  return getCombinationMirrorly(coords, secondMoveCombinations);
}
