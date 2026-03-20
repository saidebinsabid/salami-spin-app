export const getWeightedRandomItem = (items) => {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;

  for (let i = 0; i < items.length; i++) {
    if (random < items[i].weight) {
      return items[i];
    }
    random -= items[i].weight;
  }
  return items[items.length - 1]; // Fallback
};
