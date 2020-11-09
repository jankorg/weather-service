export  interface AmoutRainfall {
    day: number;
    amount: number;
  };
  
export interface ChanceOfRainData {
    AmoutRainfall: AmoutRainfall;
    lower_bound: number;
    mean: number;
    upper_bound: number;
  }