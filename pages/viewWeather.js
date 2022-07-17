import BottomSheet from "react-native-bottomsheet-reanimated";
import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar, Dimensions } from "react-native";

const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;

export default function ViewWeather (){
    return(
        <SafeAreaView style={styles.background}>

        <StatusBar style="default" />
        <View style={styles.rectangle}/>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background : {
        flex: 1,
        backgroundColor: "#E9EFC0",
        alignItems: "center",
        justifyContent: "center"
    },
    rectangle : {
        width: chartWidth-70,
        height: chartHeight-150,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000000", 
        shadowOpacity: 0.3,//그림자 투명도
        shadowOffset: { width: 2, height: 2 }, 
    },
})
