export interface Evaluation {
  id: string;
  songId: string;
  songTitle: string;
  rating: number;
  amount: number;
  date: string;
}

export const getRandomAmount = (): number => {
  // Random amount between 6.00 and 9.00
  return parseFloat((Math.random() + 2.0).toFixed(2));
};