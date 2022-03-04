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
  <ScrollView style={styles.container}>
    <Text style={styles.text1}></Text>
    <Text style={styles.text2}></Text>
    <Text style={styles.text3}></Text>
    <Text style={styles.text4}></Text>
    <Text style={styles.text5}> Here we go, how it's going. There we go...</Text>
    <Text style={styles.text5}></Text>
    <Text style={styles.text5}></Text>
    <Text style={styles.text5}></Text>
    <Text style={styles.text5}></Text>
    <Text style={styles.text5}></Text>
  </ScrollView>

);
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10
        },
        text1: {
            color: '#000',
            marginTop: 20,
            marginBottom: 20,
            paddingVertical: 15,
            fontSize: 20,
            borderColor: "#9ACD32",
            borderWidth: 4,
            backgroundColor: "yellow"
        },
        text2: {
            color: '#000',
            marginTop: 20,
            marginBottom: 20,
            paddingVertical: 15,
            fontSize: 20,
            borderColor: "#9ACD32",
            borderWidth: 4,
            backgroundColor: "yellow",
            borderStyle: "dashed"
        },
        text3: {
            color: '#000',
            marginTop: 20,
            marginBottom: 20,
            paddingVertical: 10,
            fontSize: 20,
            borderColor: "red",
            borderWidth: 4,
            backgroundColor: "yellow",
            borderWidth: 15

        },
        text4: {
            color: '#000',
            marginTop: 20,
            marginBottom: 20,
            paddingVertical: 10,
            fontSize: 20,
            borderColor: "#9ACD32",
            borderWidth: 4,
            backgroundColor: "yellow",
            borderStyle: "dotted"
        },
        text5: {
            color: '#000',
            marginTop: 20,
            marginBottom: 20,
            paddingVertical: 15,
            fontSize: 20,
            borderColor: "#9ACD32",
            borderWidth: 2,
            backgroundColor: "yellow"
        },

});


export default App;
