/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const App = () => (
  <ScrollView>
  <View style={styles.container}>
    <Text style={styles.text1}></Text>
    <Text style={styles.text2}></Text>
    <Text style={styles.text3}></Text>
    <Text style={styles.text4}></Text>
    <Text style={styles.text5}></Text>
    <Text style={styles.text6}></Text>
    <Text style={styles.text7}></Text>
    <Text style={styles.text8}> Keep Scrolling </Text>
    <Text style={styles.text9}></Text>
    <Text style={styles.text10}></Text>
  </View>
  </ScrollView>
);
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10
        },
        text1: {
            color: '#000',
            marginTop: 15,
            paddingVertical: 15,
            fontSize: 20,
            borderColor: "black",
            borderWidth: 4,
            backgroundColor: "green"
        },
        text2: {
            color: '#000',
            marginTop: 15,
            paddingVertical: 15,
            fontSize: 20,
            borderColor: "black",
            borderWidth: 10,
            backgroundColor: "green"
        },
        text3: {
            color: '#000',
            marginTop: 15,
            paddingVertical: 15,
            fontSize: 20,
            borderColor: "black",
            borderWidth: 4,
            backgroundColor: "green",
            borderStyle: "dotted"

        },
        text4: {
            color: '#000',
            marginTop: 15,
            paddingVertical: 15,
            fontSize: 20,
            borderColor: "black",
            borderWidth: 4,
            backgroundColor: "green",
            opacity: .2
        },
        text5: {
            color: '#000',
            marginTop: 15,
            paddingVertical: 15,
            fontSize: 20,
            borderColor: "black",
            borderWidth: 4,
            backgroundColor: "green",
            borderStyle: "dashed"
        },
        text6: {
            color: '#000',
            marginTop: 15,
            paddingVertical: 15,
            fontSize: 20,
            borderColor: "black",
            borderWidth: 4,
            backgroundColor: "green",
            borderTopColor: "blue"
        },
        text7: {
            color: '#000',
            marginTop: 15,
            paddingVertical: 15,
            fontSize: 20,
            borderColor: "black",
            borderWidth: 4,
            backgroundColor: "green",
            borderTopWidth: 0
        },
        text8: {
            color: '#000',
            marginTop: 15,
            paddingVertical: 5,
            fontSize: 20,
            borderColor: "black",
            borderWidth: 4,
            backgroundColor: "green"
        },
        text9: {
            color: '#000',
            marginTop: 15,
            paddingVertical: 15,
            fontSize: 20,
            borderColor: "black",
            borderWidth: 4,
            backgroundColor: "purple"
        },
        text10: {
            color: '#000',
            marginTop: 15,
            paddingVertical: 15,
            fontSize: 20,
            borderColor: "black",
            borderWidth: 4,
            backgroundColor: "green",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
        },
        text: {
            color: '#000',
            marginTop: 10,
            paddingVertical: 8,
            fontSize: 20
        },



});


export default App;
