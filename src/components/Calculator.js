import React from 'react';
import { convert, toCelcius, toFahrenheit } from '../lib/Converter';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: '',
    }

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        })
    }

    render () {

        const {temperature, scale} = this.state;
        const celcius = scale === 'f' ? convert(temperature, toCelcius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return(
            <div>
                
                <TemperatureInput scale="c" temperature={celcius} onTemperatureChange={this.handleChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleChange} />

                <BoilingVerdict celcius ={parseFloat(temperature)}/>
            </div>          
        );
    }
}