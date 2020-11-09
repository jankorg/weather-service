
 
import React, {useEffect, memo, useState} from 'react';
import styles from './Slider.module.scss';
 
 interface Slider{
    max: number, 
    min: number, 
    val: number, 
    label: string
  }
  
  interface SliderMemo{
    step: number;
    onChange: any; 
    classes: string;
    sliderProps: Slider;
  }
  
  const WeatherSlider = memo(
    (SliderProps: SliderMemo) => {
      const [sliderVal, setSliderVal] = useState(0);
      
      useEffect(() => {
        setSliderVal(SliderProps.sliderProps.val)
      },[SliderProps.sliderProps.val]);
  
      const changeCallback = (e:any) => {
        setSliderVal(e.target.value);
        SliderProps.onChange(e);
      };
  
      return (
        <div className={styles.slidecontainer} data-testid="Slider">
          <h1>{SliderProps.sliderProps.label}</h1>
          <h3>value: {sliderVal}</h3>
          <input
            type="range"
            value={sliderVal}
            {...SliderProps.sliderProps}
            className={`slider ${SliderProps.classes}`}
            id={`slider-${SliderProps.sliderProps.label}`}
            onChange={changeCallback}
          />
        </div>
      );
    }
  );
  
  export default WeatherSlider;