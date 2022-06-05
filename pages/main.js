import React from 'react';
import { View, StyleSheet, StatusBar, Image, SafeAreaView, Text } from 'react-native';
import circles from "../Images/circles.png"
import person from "../Images/lying.png"

export default function Main() {
    return(
        <SafeAreaView style={styles.background}>
            <StatusBar style="default" />
            <Image style={styles.circle} source={circles}/>
            <Image style={styles.person} source={person}/>
            <Text style={styles.maintext}>오늘{"\n"}뭐{"\n"}입지</Text>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    background : {
        flex: 1,
        backgroundColor: "#E9EFC0",
        alignItems: "center",
        justifyContent: "center"
    },
    circle: {
        position: "absolute",
    },
    person: {
        position: "absolute",
    },
    maintext: {
        fontSize: 65,
        fontFamily: 'HSDuggobi',
    },
})