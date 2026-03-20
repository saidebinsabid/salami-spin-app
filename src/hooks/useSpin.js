import { getWeightedRandomItem } from '../utils/weightedRandom';
import { SALAMI_AMOUNTS } from '../utils/constants';

export function useSpin() {
  const performSpin = () => {
    const selectedItem = getWeightedRandomItem(SALAMI_AMOUNTS);
    
    return {
      amount: selectedItem.value,
      timestamp: new Date().toISOString()
    };
  };

  return {
    performSpin,
  };
}
