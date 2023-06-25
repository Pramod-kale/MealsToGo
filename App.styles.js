import { StyleSheet, StatusBar } from "react-native"


export const appStyles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },




})