import { StatusBar } from 'expo-status-bar';
import { Alert } from "react-native";
import React from 'react';
import Loading from './Loading'
import * as Location from 'expo-location';

export default class extends React.Component {
  getLocation = async ()=> {
    try {
      const response = await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      console.log(location)
    } catch(error) {
      console.log(error)
      Alert.alert("Can't find you.", "So sad")
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading></Loading>
  }
}

