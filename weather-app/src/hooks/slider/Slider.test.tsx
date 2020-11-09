import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WeatherSlider from './sliderMemo';

describe('<WeatherSlider />', () => {
  test('it should mount', () => {
    let val = 0;
    const props: any = {min: 10,
        max: 35,
        label: "Temperature slider",
        val: 10,
        step: 2,
        classes: "",
        onChange: (e: Event) => changeCallback(e)
    }
    const changeCallback = (e:any) => {
        val = e.target.value;
      };
    render(<WeatherSlider {...props}/>);
    
    const footer = screen.getByTestId('Slider');

    expect(footer).toBeInTheDocument();
  });
});