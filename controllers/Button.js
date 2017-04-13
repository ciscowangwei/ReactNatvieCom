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

var Button = React.createClass({
  startTimer(event) {
    let time = (this.props.isMinutes) ? this.props.time*60 : this.props.time
    return this.props.startTimer(time)
  },
  render() {
    return (
      <TouchableOpacity onPress={this.startTimer}>
        <Text style={styles.button}>{this.props.time} {(this.props.isMinutes) ? 'minutes' : 'seconds'}</Text>
      </TouchableOpacity>
    )
  }
})

module.exports = Button