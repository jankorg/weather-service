
import {AmoutRainfall, ChanceOfRainData} from '../../utils/interfaces/chartInterfaces';
export class ContentMapperClass {
    
    chanceOfRain(pressure: number, temperature: number, amount:number) {
        let score = Math.log(amount+1) * Math.log(pressure-929) * Math.log(temperature-9);
        let mean = Math.min(Math.max(score, 0), 100)
        let upper_bound = Math.min(1.5*mean, 100);
        let lower_bound = Math.max(0.5*mean, 0);
      
        return [lower_bound, mean, upper_bound];
    }

    getChanceOfRainData (pressure: number, temperature: number, data: Array<AmoutRainfall>) {
        let chanceOfRainList: Array<ChanceOfRainData>;
        chanceOfRainList = data.map((val) => {
          const chanceOrainArr = this.chanceOfRain(pressure, temperature, val.amount);
          
          const chancOfRainObj =
          {
            AmoutRainfall: val,
            lower_bound: chanceOrainArr[0],
            mean: chanceOrainArr[1],
            upper_bound: chanceOrainArr[2],
          };
      
          return chancOfRainObj;
        })
        return chanceOfRainList;
      }
      
}