import { StatusBar } from 'expo-status-bar';
import { Alert } from "react-native";
import React from 'react';
import Loading from './Loading'
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "ba51ecbd559e8e683e301ab6c9cd80af";

export default class extends React.Component {
  state = {
    isLoading: true
  }

  getWeather = async (latitude, longitude) => {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    const { data: {
      main: { temp },
      weather
    } } = await axios.get(url)
    console.log(weather[0].main)
    this.setState({isLoading: false, condition: weather[0].main, temp: temp})
  }

  getLocation = async ()=> {
    try {
      const response = await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      // Send to API and get weather
      this.getWeather(latitude, longitude)
      this.setState({isLoading: false})
    } catch(error) {
      console.log(error)
      Alert.alert("Can't find you.", "So sad")
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}

