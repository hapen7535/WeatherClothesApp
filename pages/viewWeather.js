import BottomSheet from "react-native-bottomsheet-reanimated";
import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Dimensions, ActivityIndicator } from "react-native";
import getWeather from "./getWeather";

const icons = {
    Clouds: "cloudy",
    Clear: "day-sunny",
    Atmosphere: "cloudy-gusts",
    Snow: "snow",
    Rain: "rains",
    Drizzle: "rain",
    Thunderstorm: "lightning",
  }

const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;
const days = [];

export default function ViewWeather (){

    const weatherInfo = (weather) => {
        days = weather;
    };

    return(
        <SafeAreaView style={styles.background}>

        <StatusBar style="default" />
        <View style={styles.rectangle}/>

        <View style={styles.settingposition}>
        <Text style={styles.titletext}>오늘 뭐 입지</Text>
        <Text style={styles.subtext}>오늘 날씨는 다음과 같습니다</Text>
            <View>
            <getWeather weatherInfo={weatherInfo}></getWeather>
        { days.length === 0 ? (
            <View>
              <ActivityIndicator style={{marginTop: 10}} color="white" size="large"/>
            </View>
          ) : (
            days.map((day, index) =>
                <Text style={styles.temp}>{parseFloat(day.temp.day).toFixed(1)}</Text>
            )
        )}
            </View>
        </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background : {
        flex: 1,
        backgroundColor: "#E9EFC0",
        alignItems: "center",
        justifyContent: "center",
    },
    rectangle : {
        width: chartWidth-70,
        height: chartHeight-150,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000000", 
        shadowOpacity: 0.3,//그림자 투명도
        shadowOffset: { width: 2, height: 2 }, 
        position: "absolute",
    },
    titletext: {
        fontSize: 22,
        fontFamily: 'HSDuggobi',
        color: "#5A4022",
        top:-300,
        bottom:0,
        left:-20,
        right:0,
    },
    settingposition: {

        alignItems: "flex-start",
        justifyContent: "flex-start",

    },
    subtext: {
        fontSize: 18,
        fontFamily: 'NotoSansKR-Bold',
        color: "#5A4022",
        top:-250,
        bottom:0,
        left:0,
        right:0,
    },
})
