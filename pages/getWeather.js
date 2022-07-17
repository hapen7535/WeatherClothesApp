import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';

const API_KEY = "52bacd42c76fca3df8e77a348d4856dc";

export default function getWeather ({weatherInfo}) {

    const [city, setCity] = useState("Loading...");
    const [days, setDays] = useState([]);
    const [ok, setOk] = useState(true);

    const Weather = async() => {
        const {granted} = await Location.requestForegroundPermissionsAsync();
        if(!granted){
            setOk(false);
        }

        const { coords : { latitude, longitude },
        } = await Location.getCurrentPositionAsync({
        accuracy: 5,
        });

        const location = await Location.reverseGeocodeAsync(
            {latitude, longitude},
            {useGoogleMaps: false}
        );

        setCity(location[0].city);

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
        );

        const json = await response.json();
        setDays(json.daily);

    };

    useEffect(() => {
        Weather();
    }, []);

    weatherInfo(days);

    return (
        <View>
            <Text>{props.days}</Text>
        </View>
    );

};
