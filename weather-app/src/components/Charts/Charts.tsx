import React, {
  useEffect, 
  useState,
  useMemo} from 'react';
import styles from './Charts.module.scss';
import WeatherSlider from '../../hooks/slider/sliderMemo';
import {
  LineChart, 
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from 'recharts';
import {ApiRepositoryClass} from '../../utils/apiRepositories/apiRepository'
import {AmoutRainfall, ChanceOfRainData} from '../../utils/interfaces/chartInterfaces';
import {ContentMapperClass} from '../../utils/controllers/ContentMapper';

let ApiRepo = new ApiRepositoryClass();
let Maper = new ContentMapperClass();

const Charts: React.FC = () => {
  const [pressureVal, setPressureVal] = useState(970);
  const [temperatureVal, setTemperatureVal] = useState(10);
  const [pressureSlider] = useState({
    min: 970,
    max: 1030,
    label: "Pressure slider",
    val: pressureVal,
  });
  const pressureSliderProps = useMemo(
    () => ({
      sliderProps: pressureSlider,
      step: 2,
      classes: "",
      onChange: (e: Event) => sliderValueChanged(e)
    }),
    [pressureVal]
  );

  const [temperatureSlider] = useState({
    min: 10,
    max: 35,
    label: "Temperature slider",
    val: temperatureVal,
  });
  
  const temperatureSliderProps = useMemo(
    () => ({
      sliderProps: temperatureSlider,
      step: 2,
      classes: "",
      onChange: (e: Event) => sliderValueChanged(e)
    }),
    [temperatureVal]
  );
  const [amount, setRainfallList] = useState<AmoutRainfall[]>([]);
  const [chanceOfRainData, setchanceOfRainData] = useState<ChanceOfRainData[]>([]);

  useEffect(() => {
    ApiRepo.getAmoutRainfallByDay()
    .then((response: any) => {
        let days = response.data ? response.data.map((val:any)=> val.days) : [];
        setRainfallList(days[0]);
    });
  }, []);

  const sliderValueChanged = (e:any) => {
    let chanceOfRainList: Array<ChanceOfRainData>;
    if(e.target.id.includes("Pressure")){
      setPressureVal(e.target.value);
    } else {
      setTemperatureVal(e.target.value);
    }
    chanceOfRainList= Maper.getChanceOfRainData (pressureVal, temperatureVal, amount);
    setchanceOfRainData(chanceOfRainList);
  };

  return(
    <div className={styles.Charts} data-testid="Charts">
      <div className="wrapper">
          <div className="container">
            <WeatherSlider {...pressureSliderProps} />
          </div>
          <div  className="container">
          <h1>Chance of rain chart</h1>
            <LineChart
              width={500}
              height={300}
              data={chanceOfRainData}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="AmoutRainfall.day" />
              <YAxis dataKey="AmoutRainfall.amount" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="lower_bound" stroke="#0767f7" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="mean" stroke="#f76707" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="upper_bound" stroke="#07f763" activeDot={{ r: 8 }} />
            </LineChart>
          </div>
          <div className="container">
              <WeatherSlider {...temperatureSliderProps} />
          </div>
          <div className="container">
            <h1>Amount of rainfall chart</h1>
                  <BarChart
                    width={500}
                    height={300}
                    data={amount}
                    margin={{
                      top: 5, right: 30, left: 20, bottom: 5,
                    }}
                  >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis  dataKey="amount" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="amount" fill="#82ca9d" />
                </BarChart>
          </div>
      </div>
    </div>
  );
  
}

export default Charts;
