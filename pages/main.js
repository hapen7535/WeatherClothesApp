import React from 'react';
import { View, StyleSheet, StatusBar, Image, SafeAreaView, Text } from 'react-native';
import BottomSheet from "react-native-bottomsheet-reanimated";
import circles from "../Images/circles.png"
import person from "../Images/lying.png"

export default function Main() {
    return(
        <SafeAreaView style={styles.background}>
            <StatusBar style="default" />
            <Image style={styles.circle} source={circles}/>
            <View style={styles.settingPosition}>
            <Text style={styles.maintext}>오늘{"\n"}뭐{"\n"}입지</Text>
            <Image style={styles.person} source={person}/>
            </View>
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

    },
    maintext: {
        fontSize: 65,
        fontFamily: 'HSDuggobi',
        color: "#5A4022",
    },
    settingPosition: {
        flexDirection: "column",
    },
})