import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';


const weatherOptions = {
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Cloudy",
        subtitle: "aint no sunshine"
    },
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["black", "yellow"],
        title: "Thunder Storm!!",
        subtitle: "wowwowwowwow!!"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#8e9eab", "#eef2f3"],
        title: "Drizzle",
        subtitle: "so uncertain"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#314755", "#26a0da"],
        title: "its rainy",
        subtitle: "Dammmnnnn"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#ece9e6", "#ffffff"],
        title: "Snow!",
        subtitle: "foking beautiful!"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#ede574", "#e1f5c4"],
        title: "Sunny",
        subtitle: "what a good day"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#403b4a", "#e7e9bb"],
        title: "Haze",
        subtitle: "Cant see anything"
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#1f1c2c", "#928dab"],
        title: "Fog",
        subtitle: "Stay at home"
    }
}


export default function Weather({temp, condition}) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <LinearGradient style={styles.container} colors={weatherOptions[condition].gradient}>
            <View style={styles.harfContainer}>
                <MaterialCommunityIcons size={200} name={weatherOptions[condition].iconName} color="white"/>
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={{...styles.harfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
            </LinearGradient>
        </View>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Dust",
        "Mist"
            ]).isRequired

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    harfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    },
    temp: {
        fontSize: 60,
        color: "white"
    },
    title: {
        color: "white",
        fontSize:50,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "400",
        fontSize:30
    },
    textContainer: {
        paddingHorizontal:40,
        alignItems: "center"
    }
})