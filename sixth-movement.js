import sixthMoveCombinations from './sixth-movement.combinations'
import { getCombinationMirrorly } from './utils';

export default function calculateCordsForSixthMove(coords) {
    return getCombinationMirrorly(coords, sixthMoveCombinations);
  }
  