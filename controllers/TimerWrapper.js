
import React,{Component} from 'react'
import {
//   AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch
} from 'react-native'

import styles from '../styles/styles.js'
const timerOptions = [5, 7, 10, 12, 15, 21]
import Button from '../controllers/Button'
import ReviewCell from '../controllers/ReviewCell.js'

var TimerWrapper = React.createClass({
 
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ReviewCell/>
        </View>
      </ScrollView>
    )
  }
})

module.exports = TimerWrapper