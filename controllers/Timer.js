
import React,{Component} from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch
} from 'react-native'

import styles from '../styles/styles.js'


var Timer = React.createClass({
   render() {
     if (this.props.time == 0) {
      AudioPlayer.play('flute_c_long_01.wav')
     }
     if (this.props.time == null || this.props.time == 0) return <View><Text  style={styles.heading}> </Text></View>
     return (
       <View>
         <Text style={styles.heading}>{this.props.time}</Text>
         <Text>Seconds left</Text>
       </View>
     )
    }
})

module.exports = Timer